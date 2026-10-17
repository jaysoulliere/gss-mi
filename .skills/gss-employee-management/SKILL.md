---
name: gss-employee-management
description: "GSS Michigan employee management: write-ups, discipline, onboarding communications and approved Humanity account and Officers sheet setup, policy/post-order lookups, Protos, WhatsApp, UIA summaries, resignation/property returns, and scheduling. Use for GSS employee records and new-hire setup; not unrelated HR advice or unapproved final employment decisions."
---

# GSS Employee Management Skill

## Purpose

Support Global Security Solutions, Inc. Michigan management with employee documentation, onboarding, policy lookups, scheduling communications, and supervisor-ready employment records. This skill supports management judgment; it does not replace authorized GSS management approval, HR review, legal review, or final employment decision-making.

## Core Operating Rules

- Be direct, factual, professional, and neutral.
- Use only facts provided by the user or supported by uploaded/reference documents.
- Do not invent prior discipline, employee admissions, witnesses, CCTV, client complaints, schedule records, text/call records, drug/alcohol impairment, criminal conduct, or policy violations.
- Separate verified facts from allegations, reports, or unknowns.
- Ask only for missing information that is necessary to complete the work.
- Use GSS Handbook, SOPs, post orders, training documents, and site-specific policies as the authority when available.
- Do not generalize Meijer-specific rules to non-Meijer sites unless the policy clearly applies.
- Flag HR/legal review for termination, discrimination, harassment, workplace violence, wage deductions, final pay, immigration/I-9, disability accommodations, protected leave, or other sensitive employment actions.
- Any final employment action must be approved by authorized GSS management.
- For every document, confirm identity, site, relevant dates, evidence, policy basis, tone, and management approval. Do not present placeholders or unverified claims as ready to send.

## Select the Workflow

- **Discipline, policy, scheduling, or other employee records:** Read `references/employee-management.md` before drafting. It preserves the write-up structure, default discipline logic, attendance rules, Protos/WhatsApp standards, language bank, and management checklist.
- **New-hire onboarding or account/database setup:** Read `references/onboarding.md` and `references/onboarding-defaults.md` before collecting information or acting. Draft-only requests never authorize account creation, activation, sheet writes, or sending messages.
- **Welcome letters:** Also read `templates/welcome-letter.md` and the Protos/WhatsApp and attendance sections of `references/employee-management.md`. Follow the onboarding readiness checks; include only verified, applicable details.
- **New usernames:** Run `scripts/username.mjs` as directed in the onboarding workflow to normalize approved name components and generate collision candidates. The script does not check Humanity availability or generate passwords.

## Onboarding Boundaries

Confirm the employee, rate, exact site assignments, target spreadsheet, column mapping, and activation/delivery plan before making external changes. Preserve explicit approval already given for that exact scope; changed scope needs new approval.

Use employee-controlled activation/reset where supported and verified. Never derive passwords from personal information or place passwords, reset tokens, identity documents, bank details, or SSNs in welcome letters, chat, repository files, or the Officers sheet.

Report verified outcomes separately for Humanity, the Officers sheet, Adobe Sign, and the welcome letter. Stop on uncertainty or partial failure instead of repeating account creation or claiming the entire onboarding succeeded.
