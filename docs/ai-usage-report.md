# AI Usage Report – Assignment 2

**Student:** Saeed Alorayj  
**Student ID:** 202338250  
**Report updated:** 2026-10-23

**Preparation status:** The usage log below covers the interactions/artifacts visible in the supplied development record. Before submission, reconcile it with every full conversation, complete the personal-adaptation details, insert the exact official declaration, and sign it. This draft is not a signed declaration.

## 1. How I Used AI

I used ChatGPT as a coding and learning assistant while extending my Assignment 1 portfolio. It generated HTML, CSS, and JavaScript suggestions, including complete code blocks and replacement files, and explained their behavior. It also provided testing steps, Git guidance, code review, and documentation drafts.

I applied the changes to my project, worked through the explanations, and reported completing the guided feature tests. I understand the code and can explain how the search, saved theme, error handling, and form validation work. I reviewed the generated code together with the explanations and tested its behavior as part of the development process.

The table distinguishes changes made during the AI-assisted workflow from independently chosen changes. My own adaptation is recorded separately below.

## 2. Usage Log

Dates below refer to the known Assignment 2 development artifacts. Model versions were not captured in the available record; none are guessed. Add any additional tool, conversation, or artifact found when assembling the full evidence.

| ID | Tool | Date | Conversation or artifact / purpose | Files affected | What changed during integration or revision |
| --- | --- | --- | --- | --- | --- |
| U00 | ChatGPT; inherited Assignment 1 work | Reused 2026-10-19; original conversation date to confirm | Starting portfolio with earlier declared AI assistance | Existing HTML, CSS, JS, SVGs, README, and docs | Reused Assignment 1 as the required starting point; earlier AI assistance is described in the original Assignment 1 AI-use report |
| U01 | ChatGPT | 2026-10-19 | Search HTML snippet | index.html | Added a labeled search field, help text, and status message above the existing cards |
| U02 | ChatGPT | 2026-10-19 | Search stylesheet output | css/styles.css | Added input layout, focus transitions, and result/help styling while retaining the existing design |
| U03 | ChatGPT | 2026-10-19 | Search script output | js/script.js | Added normalized live filtering and count/no-results feedback to the existing interactions |
| U04 | ChatGPT | 2026-10-19 | Theme-feedback HTML snippet | index.html | Added a status paragraph for storage failures |
| U05 | ChatGPT | 2026-10-19 | Theme-feedback CSS snippet | css/styles.css | Styled the theme message only when it contains text |
| U06 | ChatGPT | 2026-10-19 | Persistent-theme script output | js/script.js | Extended the toggle with a saved preference, restoration, and try/catch recovery messages |
| U07 | ChatGPT | 2026-10-19 | Contact HTML revisions | index.html | Changed the button to Validate Message and added status semantics; the introductory wording was corrected during final review |
| U08 | ChatGPT | 2026-10-19 | Contact-feedback CSS output | css/styles.css | Added error/success colors for both themes and invalid-field borders |
| U09 | ChatGPT | 2026-10-19 | Form-validation script output | js/script.js | Replaced the original receipt-style confirmation with validation, first-error focus, and an accurate local-demo confirmation |
| U10 | ChatGPT | 2026-10-19 | Guided testing and Git instructions in the development conversation | Tests in browser Console; repository history | Applied the development workflow and reported completing feature tests; no application file contains the temporary storage test snippets |
| U11 | ChatGPT | Suggested 2026-10-19; applied 2026-10-23 | Final source review and contact-text correction | index.html | Corrected “It does not Validate Messages” to “It does not send messages” |
| U12 | ChatGPT | Drafted 2026-10-19; updated 2026-10-23 | README draft | README.md | Updated the copied Assignment 1 documentation for current features, setup, AI use, and separate evidence submission |
| U13 | ChatGPT | Drafted 2026-10-19; updated 2026-10-23 | Technical documentation draft | docs/technical-documentation.md | Added implementation details, limitations, expected test results, and a distinction between source checks and local browser testing |
| U14 | ChatGPT | Drafted 2026-10-19; updated 2026-10-23 | AI usage report draft | docs/ai-usage-report.md | Added this log and preparation fields following the new announcement; official declaration still needs its supplied wording |
| U15 | ChatGPT | 2026-10-19 and 2026-10-23 | Evidence-preparation guidance and ignore rules | .gitignore; planned evidence archive | Applied evidence exclusions on 2026-10-23; full conversations and original intermediate outputs still need to be assembled |
| U16 | ChatGPT | 2026-10-23 | Git credit updates and recovery guidance | Commit messages and local repository location; no application-code changes | Added Assisted-by: ChatGPT to the five development commits, verified identical file content against the backup, and created a clean local working copy outside OneDrive after a temporary-directory cleanup error |
| U17 | ChatGPT | 2026-10-23 | Documentation revision and delivery instructions | README.md; docs/technical-documentation.md; docs/ai-usage-report.md | Updated the report to reflect verified commit credits and the clean working copy; corrected the documented whitespace-normalization expression; retained fields requiring student input |

The descriptions above document the assisted development process. They do not imply that each listed refinement was independently authored by the student.

## 3. My Own Adaptation

The assignment also requires editing or improving AI output. Complete this with an actual student-chosen modification; understanding the explanations is recorded above and does not substitute for describing the modification.

- **Change I personally chose and made:** [Describe the actual change.]
- **Reason and affected file/function:** [Explain the purpose and location.]
- **How the change works:** [Explain in your own words.]
- **Test and actual result:** [Record what you did and observed.]

## 4. Understanding and Verification

I reviewed how input events trigger search; how trim, lowercase conversion, and whitespace normalization affect matching; how hidden controls card visibility; how localStorage saves/restores the theme; and how try/catch keeps the user informed when storage fails.

For the form, I reviewed preventDefault, ordered validation, return at the first error, email typeMismatch, focus management, and textContent feedback. The form does not deliver messages.

Guided feature testing was reported during development. The later source review checked syntax and HTML references. Final browser/device results must be recorded in the technical documentation. Any additional AI-assisted correction or documentation revision should be added to this log and the evidence.

## 5. Evidence and Commit Attribution

The separate Blackboard attachment must be named:

`202338250-SaeedAlorayj-assignment2-ai-evidence.zip`

It must contain the full AI conversations and original intermediate AI-generated outputs before student edits. Repository snapshots can support that evidence but do not replace the required full conversations or original outputs.

On 2026-10-23, the five existing development commits were verified to contain `Assisted-by: ChatGPT`. A comparison against the backup showed no differences in application files. After a temporary Git metadata folder could not be removed, a local clone preserved the updated history and produced a clean working copy outside OneDrive. Future AI-assisted commits, including documentation changes, must also credit the assistance.

Use the actual tool name in credit lines. Record a model version only if it can be verified; the announcement's GPT-x wording is an example, not a known model identity.

## 6. Official Declaration — Awaiting the Exact Statement

The announcement requires the declaration statement from the assignment guidelines. That statement is absent from the guidelines supplied for this review.

**[Insert the exact official declaration here after obtaining it. Do not substitute a generated statement.]**

- **Name:** Saeed Alorayj
- **Student ID:** 202338250
- **Signature:** [Student signs after reviewing the completed declaration and evidence.]
- **Date signed:** [Actual signing date.]
