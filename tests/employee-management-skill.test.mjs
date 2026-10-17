import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { usernameCandidate } from "../.skills/gss-employee-management/scripts/username.mjs";

const root = fileURLToPath(new URL("../.skills/gss-employee-management/", import.meta.url));
const read = (name) => readFileSync(path.join(root, name), "utf8");
const hub = read("SKILL.md");
const workflow = read("references/onboarding.md");
const defaults = read("references/onboarding-defaults.md");
const template = read("templates/welcome-letter.md");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

test("frontmatter is delimited, discoverable, and concise", () => {
  const match = hub.match(/^---\nname: ([a-z0-9-]+)\ndescription: "([^"\n]+)"\n---\n/);
  assert.ok(match, "Expected valid quoted name/description frontmatter.");
  assert.equal(match[1], path.basename(root));
  assert.ok(match[2].split(/\s+/).length <= 50);
  assert.ok(hub.length < 4000);
  assert.match(match[2], /Humanity account and Officers sheet setup/);
  assert.match(match[2], /not unrelated HR advice/);
});

test("all runtime resources are reachable from the hub", () => {
  for (const file of walk(root).filter((file) => !file.endsWith("SKILL.md"))) {
    assert.ok(hub.includes(path.relative(root, file)), `Missing hub reference: ${file}`);
  }
});

test("all explicit local Markdown/resource paths resolve", () => {
  for (const file of walk(root).filter((file) => file.endsWith(".md"))) {
    for (const [, target] of readFileSync(file, "utf8").matchAll(/`((?:\.\.\/)?(?:references\/|templates\/|scripts\/)?[\w-]+\.(?:md|mjs))`/g)) {
      assert.ok(existsSync(path.resolve(path.dirname(file), target)), `${file}: ${target}`);
    }
  }
});

test("legacy employee-management rules remain available", () => {
  const legacy = read("references/employee-management.md");
  for (const heading of [
    "Required Clarifying Questions", "GSS Write-Up Structure", "Default Discipline Logic",
    "Attendance and Scheduling Standards", "Protos Connect Standards", "WhatsApp Log Book Standards",
    "Policy and Post Order Lookup Rules", "Output Format Rules", "Standard Language Bank",
    "Management Review Checklist",
  ]) assert.ok(legacy.includes(`## ${heading}`));
  assert.match(legacy, /866-403-9630/);
  assert.match(legacy, /Manager has approved the final version/);
});

test("onboarding defaults and signature have a single authoring location", () => {
  const markdown = walk(root).filter((file) => file.endsWith(".md"))
    .map((file) => readFileSync(file, "utf8")).join("\n");
  assert.equal((markdown.match(/\$16\b/g) || []).length, 1);
  assert.equal((markdown.match(/Jay D\. Soulliere Jr\./g) || []).length, 1);
  assert.match(defaults, /verification prompts only/);
});

test("credential guards prohibit predictable secrets and template passwords", () => {
  const markdown = walk(root).filter((file) => file.endsWith(".md"))
    .map((file) => readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(markdown, /\[PASSWORD\]|Firstnamelastname5|password mirrors username|first letter is capitalized/i);
  assert.match(workflow, /employee sets their own password/);
  assert.match(workflow, /at least 16 characters/);
  assert.match(workflow, /forced change at first login/);
  assert.match(workflow, /If it is unavailable, stop/);
  assert.doesNotMatch(template, /Your password is/i);
});

test("approval, privacy, assignment, and retry gates are explicit", () => {
  for (const pattern of [
    /before creating or activating an account/,
    /Do not collect birthdate by default/,
    /only approved positions\/sites/,
    /actual existing headers/,
    /literal\/raw cell values/,
    /Read back the affected row\/range/,
    /Creation times out/,
    /Humanity succeeds but the sheet fails/,
    /Sheet write times out/,
    /Do not delete, deactivate, reset credentials/,
  ]) assert.match(workflow, pattern);
});

test("welcome letter is a draft until verified and contains required topic slots", () => {
  assert.match(template, /```text\n[\s\S]+\n```/);
  assert.match(template, /Draft: not ready to send/);
  for (const field of [
    "GUARD_GUIDE_URL", "USERNAME", "ADOBE_SIGN_STATUS_AND_NEXT_STEP",
    "HR_APPROVED_I9_INSTRUCTIONS_AND_SECURE_SUBMISSION_ROUTE",
    "VERIFIED_FIRST_PAY_DATE_AND_COVERED_PERIOD", "COMMAND_CENTER_CONTACT",
    "PROTOS_INSTRUCTIONS_IF_ASSIGNED", "APPLICABLE_WHATSAPP_LOG_BOOK_EXPECTATIONS",
    "APPLICABLE_UNIFORM_AND_SITE_INSTRUCTIONS", "APPROVED_SIGNATURE",
  ]) assert.ok(template.includes(`[${field}]`));
  assert.doesNotMatch(template, /paperwork has been sent|first paycheck will cover your first two weeks|page 1 and the top portion of page 2/);
});

test("candidate usernames preserve the suffix convention and normalize names", () => {
  assert.equal(usernameCandidate("John", "Smith"), "johnsmith5");
  assert.equal(usernameCandidate("John", "Smith", 1), "johnsmith6");
  assert.equal(usernameCandidate("Anne-Marie", "O’Neill"), "annemarieoneill5");
  assert.equal(usernameCandidate("José", "Nuñez"), "josenunez5");
  assert.equal(usernameCandidate(" Jo ", "Van Dyke"), "jovandyke5");
});

test("ambiguous or unsupported name components fail rather than silently changing identity", () => {
  for (const first of ["", "  ", "王", "Name123", "=SUM(A1)", "First/Other", "First.Last", null]) {
    assert.throws(() => usernameCandidate(first, "Smith"));
  }
  assert.throws(() => usernameCandidate("John", "Smith Jr."));
});

test("collision attempts reject invalid input", () => {
  for (const attempt of [-1, 0.5, Infinity, NaN, 10000, "1", null]) {
    assert.throws(() => usernameCandidate("John", "Smith", attempt));
  }
  assert.equal(usernameCandidate("John", "Smith", 9999), "johnsmith10004");
});

test("CLI returns a username-only JSON candidate and fails invalid requests", () => {
  const script = path.join(root, "scripts/username.mjs");
  const good = spawnSync(process.execPath, [script, "John", "Smith", "2"], { encoding: "utf8" });
  assert.equal(good.status, 0);
  assert.deepEqual(JSON.parse(good.stdout), { username: "johnsmith7" });
  for (const args of [[], ["John", "Smith", ""], ["John", "Smith", "1", "extra"], ["王", "Smith"]]) {
    const bad = spawnSync(process.execPath, [script, ...args], { encoding: "utf8" });
    assert.equal(bad.status, 1);
    assert.equal(bad.stdout, "");
  }
});
