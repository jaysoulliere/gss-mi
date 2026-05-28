name: gss-employee-management
description: Use this skill for Global Security Solutions Michigan employee management work, including employee write-ups, disciplinary notices, onboarding support, policy and post-order lookups, Protos Connect issues, WhatsApp log book guidance, UIA/unemployment summaries, resignation/property return forms, scheduling communications, and supervisor-ready employment records. Do not use for unrelated general writing, non-GSS employment matters, or final employment decisions without management approval.
---

# GSS Employee Management Skill

## Purpose

Use this skill when assisting Global Security Solutions, Inc. Michigan management with employee documentation, discipline, onboarding support, policy lookups, post-order references, scheduling communications, Protos/WhatsApp guidance, and supervisor-ready employment records.

This skill supports management judgment. It does not replace authorized GSS management approval, HR review, legal review, or final employment decision-making.

## Core Operating Rules

- Be direct, factual, professional, and neutral.
- Use only facts provided by management or supported by uploaded/reference documents.
- Do not invent prior discipline, employee admissions, witnesses, CCTV, client complaints, schedule records, text/call records, drug/alcohol impairment, criminal conduct, or policy violations.
- Separate verified facts from allegations, reports, or unknowns.
- Ask only for missing information that is necessary to complete the document.
- Use GSS Handbook, SOPs, post orders, training documents, and site-specific policies as the authority when available.
- Do not generalize Meijer-specific rules to non-Meijer sites unless the policy clearly applies.
- Flag HR/legal review for termination, discrimination, harassment, workplace violence, wage deductions, final pay, immigration/I-9, disability accommodations, protected leave, or other sensitive employment actions.
- Any final employment action must be approved by authorized GSS management.

## When to Trigger

Use this skill for requests involving:

- Employee write-ups
- Written warnings
- Final warnings
- Suspension notices
- Termination notices or termination recommendations
- Corrective action plans
- UIA/unemployment protest summaries
- Employee signature packets
- Attendance and scheduling communications
- No call/no show documentation
- Late call-offs
- Tardiness
- Humanity clock-in/clock-out issues
- Protos Connect punch failures
- WhatsApp log book guidance
- New hire onboarding communications
- App installation reminders
- Uniform acknowledgments
- Armed/unarmed officer acknowledgments
- Resignation forms
- Company property return acknowledgments
- Policy/post-order summaries
- Client-facing employee conduct responses

Do not use this skill for:

- General personal employment advice unrelated to GSS
- Non-GSS HR work unless specifically adapted by the user
- Legal conclusions or legal filings without explicit user instruction and appropriate caveats
- Final employment decisions where management has not clearly instructed the action

## Required Clarifying Questions

For write-ups or discipline documents, ask only for missing information that is necessary:

- Employee full name
- Site/location
- Incident date
- What happened
- Desired discipline level, unless obvious from history or already stated
- Prior discipline history, only if management wants it referenced
- Supporting evidence, if relevant

If enough information is provided, produce the document without delay.

## GSS Write-Up Structure

When asked to create a GSS write-up, use this structure:

1. Employee name
2. Site/location
3. Incident date
4. Corrective action level
   - First Warning
   - Written Warning
   - Final Warning
   - Termination recommendation/notice, only if instructed
5. Checked offense categories
   - Absenteeism
   - No call/no show
   - Tardiness
   - Violation of company policies
   - Violation of safety rules
   - Substandard work
   - Failure to follow post orders
   - Failure to follow reporting procedures
   - Other, with short explanation
6. Description of infraction
7. Corrective action and expectations
8. Consequences of further infractions
9. Employee acknowledgment/signature section
10. Manager signature section

## Default Discipline Logic

- First attendance offense: written warning unless management states otherwise.
- Repeated attendance issue: final warning or termination, depending on documented history and management instruction.
- Serious misconduct, dishonesty, theft, violence, weapon/drug issue, abandoning post, or conduct creating major client/company risk: final warning or termination recommendation, depending on management instruction.
- Never reference prior history unless provided. If prior history is not provided, state that prior history was not provided or omit prior-history language.

## Attendance and Scheduling Standards

Employees are expected to:

- Report to post on time.
- Be in full uniform.
- Be ready to work at the start of the shift.
- Use Humanity as the employee time clock.
- Complete Protos Connect punches when a PIN is assigned.
- Provide direct notice to the GSS Command Center for call-offs, running late, emergencies, or coverage issues.

WhatsApp does not replace direct notice to the Command Center.

## Protos Connect Standards

When handling Protos-related issues:

- Confirm whether the Humanity shift title had a PIN, Sign In PIN, Sign Out PIN, or no PIN.
- Explain that Protos is the client-facing timekeeping system used to verify that GSS worked the shift.
- Explain that missed or incorrect Protos punches can make it appear that the shift was not worked.
- Explain that Protos errors affect client billing, documentation, compliance, and operational records.
- For Protos app issues, instruct the employee to call Protos Dispatch at 866-403-9630, unless management provides an updated GSS-approved phone tree.
- Do not treat Protos issues as payroll-only issues.

## WhatsApp Log Book Standards

WhatsApp functions as the virtual log book for:

- SOW
- EOW
- NTR
- Live location
- Incidents
- Equipment or vehicle notes
- Operational notes for the next guard

Important limitation:

WhatsApp does not replace required direct communication with the GSS Command Center for emergencies, call-offs, running late, or coverage issues.

## Onboarding Support Standards

For onboarding documents, include relevant items such as:

- Adobe Sign paperwork completion
- Onboarding portal/training materials
- I-9 reminder
- Direct deposit reminder
- Humanity app instructions
- Protos expectations when assigned
- WhatsApp expectations
- Payroll schedule
- Chain of command
- Uniform and professionalism expectations
- Armed or unarmed officer acknowledgments when applicable


## New Hire Onboarding Automation Workflow

When management asks to onboard a new hire, first prompt for all required fields (only ask missing items):

- Employee full name
- Phone number
- Email address
- Birthdate
- Position assignment header (example: MI, Detroit Area)
- Hourly rate (default to $16 unless management states otherwise)

### Humanity Employee Creation Steps

Use this exact process for Humanity account setup:

1. Go to Humanity.
2. Click **Staff**.
3. Click **Add Employee**.
4. Open the **Detailed Form**.
5. Switch to **Detailed Mode**.
6. Enter employee first name, last name, and email address.
7. Create username in this exact format: `[firstnamelastname5]`.
   - Example: John Smith -> `johnsmith5`
8. Set hourly rate to **$16** unless management provides a different rate.
9. Select the position assignment header (example: **MI, Detroit Area**) so all sites under that position are selected.
10. Uncheck **Send Activation**.
11. Click **Create Employee**.
12. On the next page, choose to **manually activate** the employee.
13. Go to password and set/save password in this exact format: `[Firstnamelastname5]`.
   - Password mirrors username, but the first letter is capitalized.

### Google Drive Work Order Database Step

After Humanity setup, go to the Google Drive sheet **Work Order Data Base** and under the **Officers** sheet add the new hire information using the provided onboarding details.

### Required Final Output for Onboarding

After collecting the required information and generating credentials, output a ready-to-send welcome letter with populated username/password using this template:

Welcome to Global Security Solutions,
Your new-hire paperwork has been sent to you electronically through Adobe Sign for completion. Please complete all required documents using the Adobe Sign link you received.
In addition, our onboarding site is available, offering access to the required forms as well as the employee handbook and a range of training materials.
To familiarize yourself with our policies and procedures, please take a moment to review the training materials available at the following link:
GSS MI Guard Guide
If you have trouble accessing Adobe Sign or the onboarding site, please let us know.
For the I-9, be sure to complete page 1 and the top portion of page 2. You will need to provide either one document from List A or one document each from Lists B and C. You will be prompted to upload images of these documents through the onboarding process.
A voided check is not required for the direct deposit form, but please ensure your account and routing numbers are accurate and easy to read.
Payroll Information
Our pay cycle runs weekly, Monday through Sunday, with payday every Friday via direct deposit.
Your first paycheck will cover your first two weeks of work.
Paycheck stubs are sent by email and require the last four digits of your Social Security number to open.
Employee Scheduling
We use the TCP Humanity Employee Scheduling app.
Your username is:
[USERNAME]
Your password is:
[PASSWORD]
Note:
The first letter is capitalized in the password but lowercase in the username.
Please sign in using the username above.
Do not try to sign in using your email address.
Please download the app so you can view and request available shifts.
When requesting shifts, it is best to also follow up by text message with the office / Command Center number to make sure your request is approved.
By signing in to the TCP Humanity app, you agree to read the GSS Employee Handbook. The handbook can be found under “Files” in the app menu.
Jay D. Soulliere Jr.
Global Security Solutions Inc.
jay@globalsecuritysolutions.com
Tel: 313-484-4845 | 866-GLO-SECU

## Policy and Post Order Lookup Rules

When answering policy questions:

- Use uploaded or connected GSS Handbook, SOPs, post orders, training materials, and site policies as the authority.
- Identify the relevant source document when available.
- Distinguish company-wide policy from site-specific instructions.
- Distinguish Meijer observe-and-report expectations from armed/non-Meijer site expectations.
- Do not overstate policy coverage if the source does not clearly support it.

## Output Format Rules

- Provide ready-to-send or ready-to-paste documents.
- Use clean headings and short paragraphs.
- For summaries, use:
  - Facts Provided
  - Policy Basis
  - Recommended Action
- For discipline, avoid casual phrasing.
- Include concrete dates, times, sites, names, and next steps when available.
- Use placeholders only for missing information that must be filled before use.
- Keep language firm, factual, and neutral.

## Standard Language Bank

### Attendance / No Call-No Show

Employee was scheduled to report for duty at [site] on [date] at [time]. Employee failed to report for the scheduled shift and did not provide proper advance notice to the GSS Command Center. This created a coverage issue for the client site and constitutes a violation of company attendance and reporting expectations.

### Late Call-Off

Employee notified the company shortly before the start of the scheduled shift that they would not be reporting to work. This did not provide adequate time to secure replacement coverage and resulted in an operational coverage issue for the client site.

### Protos Punch Failure

Employee failed to complete the required Protos Connect time clock punch for the assigned shift. Protos is the client-facing timekeeping system used to verify that GSS worked the shift. Missed or incorrect Protos punches can make it appear that the shift was not worked, causing billing, documentation, and client compliance issues.

### Failure to Follow Post Orders

Employee failed to follow post orders and site-specific expectations for the assigned location. Security officers are required to know and comply with current post orders, client procedures, and GSS policy while on duty.

### Professional Conduct

Employee’s conduct failed to meet GSS standards for professionalism, attentiveness, and judgment expected of a security officer assigned to a client site.

### Final Warning Consequence

This matter is issued as a final warning. Any further violation of company policy, post orders, client expectations, dishonesty, misconduct, attendance issue, or conduct creating risk to the company or client may result in immediate termination of employment.

## Management Review Checklist

Before issuing any document created with this skill, confirm:

- Employee name spelling
- Correct site/location
- Correct incident date
- Correct discipline level
- Prior discipline history, if referenced
- Supporting evidence exists
- No unsupported claims are included
- Policy reference is accurate
- Document matches GSS tone and intended action
- Manager has approved the final version
