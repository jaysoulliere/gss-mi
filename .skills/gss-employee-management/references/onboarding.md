# New-Hire Onboarding Workflow

Use this procedure for onboarding requests; it is an instruction workflow, not a live Humanity or Google Sheets integration. For a letter-only request, collect only facts needed for the letter and skip all external mutations.

## Intake and Approval

1. Read `onboarding-defaults.md`. Ask only for missing employee name, phone, email, position/site assignment, and hourly rate. Confirm first/last name components rather than splitting an ambiguous full name; preserve the full employee name in records.
2. Validate the supplied email, phone, rate/currency, and exact assignment against user-provided or approved records. Do not collect birthdate by default: require a documented downstream need, an approved restricted destination, and a secure collection route. Never collect identity images, SSNs, or bank details in chat, the Officers sheet, or repository files.
3. Resolve the Humanity tenant and the exact spreadsheet/worksheet. Inspect actual worksheet headers, existing matching employees, and required fields without changing anything; identify the activation method and verified Guard Guide URL. If access is missing or multiple targets match, stop and ask rather than guessing.
4. Present a preview with the employee identity, proposed username, approved rate, exact sites, target sheet/column mapping, and proposed actions. Explain whether an activation email will be sent. Obtain explicit authorized-management approval before creating or activating an account, changing credentials, editing the sheet, or sending anything; do not request approval twice for the same already-approved scope.

Completion condition: a validated preview and approval for specific external changes, or a clearly labeled draft-only outcome. A broad area header must not silently grant every site if the approved assignment is narrower.

## Username Selection

1. Search Humanity for an existing employee by email and available employee ID before proposing a new account. Same-name matches need identity confirmation; never merge or reuse an account based on name alone.
2. Run `node scripts/username.mjs "John" "Smith" 0` from the skill directory with the approved first and last name components. The script returns JSON such as `{"username":"johnsmith5"}`; attempt 1 returns `johnsmith6`. These are username examples, never passwords.
3. The script lowercases, removes combining accents, spaces, apostrophes, and hyphens, and rejects remaining non-ASCII letters or unsupported punctuation. If rejected or empty, ask for approved Latin username components without altering the employee's legal name. Exclude titles/suffixes only after confirming the components with the user.
4. Check the candidate against the tenant's actual username constraints and availability. If a different employee owns it, increment the attempt and check again; if the same employee exists, stop creation and seek approval for any needed update. After a race/duplicate error, re-read before retrying.

Completion condition: the username is valid and confirmed available, or an existing account has been identified with no duplicate creation. The script alone cannot establish availability.

## Humanity Account Setup

1. Open the approved Humanity tenant, then **Staff → Add Employee → Detailed Form**. Switch to **Detailed Mode** only if the current UI exposes a separate control; if labels differ, inspect rather than clicking blindly.
2. Enter confirmed first name, last name, email, available username, and the approved hourly rate. Add phone only to a verified intended field; do not invent a birthdate field.
3. Select only approved positions/sites. If the user approved an entire header, expand it and confirm its selected children match that scope before saving.
4. Prefer the verified built-in activation/reset invitation so the employee sets their own password. Treat **Send Activation** as a message-send action: enable it only if delivery to the confirmed recipient is approved. If account creation can safely defer activation, leave the account inactive until the delivery plan is approved.
5. If manual activation is unavoidable, stop for approval of that exception. Use a password manager or cryptographically secure generator for a unique random temporary password of at least 16 characters, compatible with the tenant policy; verify a forced change at first login is supported and enabled. If it is unavailable, stop and use a supported reset route or ask the tenant administrator rather than leaving a reusable manager-known password.
6. For an approved manual exception, transfer the temporary secret only through an approved secure secret-sharing mechanism to the verified employee. Do not output the secret or bearer reset URL in chat, welcome letters, logs, spreadsheets, or repository files; SMS/phone is not an automatic substitute.
7. Click **Create Employee** only after verifying the preview and activation behavior. Read back the employee ID, username, rate, assignments, and activation/invitation status. For manual exceptions, activate only after the approved reset and delivery protections are in place; report pending status until those checks succeed.

Completion condition: a read-back employee ID and accurate account/activation status, with no secret recorded in the task output. An invitation sent is not proof that the employee activated the account.

## Work Order Data Base / Officers

Map semantic fields to actual existing headers before any write; this table is not an assumed live schema.

| Semantic field | Value | Write condition |
|---|---|---|
| Employee name | Confirmed full name | Verified intended column |
| Phone | Confirmed phone | Approved purpose and column |
| Email | Confirmed email | Verified intended column |
| Position/sites | Exact approved assignments | Approved format and column |
| Hourly rate | Approved amount/currency | Restricted access and approved column; otherwise omit |
| Humanity employee ID | Read-back ID | Existing approved column |
| Humanity username | Verified username | Existing approved column |

1. Confirm the exact spreadsheet ID, Officers worksheet, actual headers, access scope, and approved mapping. If a required column or required non-sensitive value is missing, stop and ask. Do not add columns, broaden sharing, or write sensitive fields merely to complete onboarding.
2. Check for existing rows using employee ID where available and email as a secondary match; inspect ambiguous results. Never overwrite a row on a name-only match. Existing matching records require explicit approval for changes rather than a blind append.
3. Recheck the target immediately before writing. Append only the authorized mapped values to a new row, or perform the specifically approved update. Use literal/raw cell values so names and contact details are not interpreted as formulas; preserve phone text and existing formulas/validation. Do not send entire-sheet replacement writes.
4. Read back the affected row/range and compare every written value. Record a non-sensitive completion status and stable row reference in the authorized task context, not in the public repository.

Completion condition: one verified employee record with no duplicates or unrelated changes. Never store passwords, reset links, SSNs, bank details, identity documents, or birthdates in this worksheet.

## Partial Failure and Retry

- **Creation times out:** Search by email/employee ID before retrying; a timeout is not proof nothing was created.
- **Humanity succeeds but the sheet fails:** Report account creation as complete and the sheet as pending. Reuse the verified employee ID on retry; do not create another account.
- **Sheet write times out:** Read and deduplicate before retrying. Do not append again until the previous write's outcome is known.
- **Incorrect account or row:** Stop and request corrective-action approval. Do not delete, deactivate, reset credentials, or roll back unrelated records automatically.
- **Missing access or changed UI:** Report the blocker and completed steps. Never claim external work occurred based on the instructions alone.

## Welcome Letter and Final Handoff

1. Read `../templates/welcome-letter.md` plus the relevant Protos, WhatsApp, attendance, and onboarding defaults references. Fill the template with verified facts only; include Protos when assigned, applicable WhatsApp expectations, chain of command, uniforms/professionalism, and armed/unarmed acknowledgments when relevant.
2. Verify Adobe Sign status before saying paperwork was sent. If unverified, use neutral pending language and mark it pending in the handoff. Use HR-approved I-9 wording and the secure document route, not fixed page-number directions.
3. Populate a verified, employee-accessible Guard Guide URL; do not invent one. Verify payroll, first-pay period, stub access, direct deposit, handbook location, sender, and Command Center contact. Keep missing required details as visible placeholders in a **Draft: not ready to send** version.
4. Include the username only once verified. Describe the verified activation/reset status without including secrets or token-bearing URLs. Explain username sign-in only if supported by the tenant's actual sign-in flow; do not categorically prohibit email without verification.
5. Remove inapplicable optional blocks, resolve all remaining placeholders, and obtain management approval for the final content and recipient before sending. Preparing a draft is not sending it. Never assert that signing in records a handbook acknowledgment.
6. Return separate statuses for Humanity (created/inactive/invited/verified active), Officers sheet (verified/pending), Adobe Sign (confirmed sent/pending), and welcome letter (draft/approved/sent). Include remaining blockers and the next authorized step, without secrets or unnecessary PII.

Example partial handoff:

```text
Humanity: account created; invitation sent, activation not verified.
Officers sheet: pending; column mapping requires confirmation.
Adobe Sign: pending; delivery not verified.
Welcome letter: draft, not sent; Guard Guide URL missing.
Next step: confirm the column mapping and training URL; do not recreate the account.
```
