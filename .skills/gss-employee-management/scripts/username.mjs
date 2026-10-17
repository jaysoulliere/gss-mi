import { pathToFileURL } from "node:url";

function normalizeComponent(value) {
  if (typeof value !== "string") {
    throw new TypeError("Provide approved first and last name components.");
  }
  const normalized = value
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[\s'’\-]/gu, "");
  if (!/^[a-z]+$/.test(normalized)) {
    throw new Error("Ask for approved Latin-letter username components.");
  }
  return normalized;
}

// Generates a candidate only. The caller must verify tenant constraints,
// employee identity, and availability before creating any account.
export function usernameCandidate(first, last, attempt = 0) {
  if (!Number.isSafeInteger(attempt) || attempt < 0 || attempt > 9999) {
    throw new RangeError("Attempt must be an integer from 0 through 9999.");
  }
  return `${normalizeComponent(first)}${normalizeComponent(last)}${5 + attempt}`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const [first, last, attempt = "0", ...extra] = process.argv.slice(2);
    if (extra.length || !/^\d+$/.test(attempt)) {
      throw new Error("Usage: node scripts/username.mjs FIRST LAST [ATTEMPT]");
    }
    console.log(JSON.stringify({ username: usernameCandidate(first, last, Number(attempt)) }));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
