# Portfolio Assignment 2 – Interactive Features

## Project Description

This SWE 363 portfolio extends Assignment 1 using HTML, CSS, and JavaScript. It introduces Saeed Alorayj, a Computer Science student at KFUPM, and presents the SocialBook CSS Selectors Practice and Campus Events Dashboard projects.

## Features and Progress

| Area | Assignment 1 | Assignment 2 |
| --- | --- | --- |
| Projects | Two static cards | Live title/description search, result count, and no-results feedback |
| Theme | Dark/light toggle | Saved preference in localStorage, restoration on load, and storage-error messages |
| Contact | Basic confirmation | Blank/whitespace checks, email-format validation, first-error focus, and clear success/error feedback |
| Motion | Hover effects and smooth scrolling | Retained effects plus search-field and feedback-color transitions |

The responsive layout, About section, navigation, and local SVG project placeholders are retained.

## Project Files

| File | Purpose |
| --- | --- |
| `index.html` | Content, project cards, search, and form |
| `css/styles.css` | Layout, themes, responsive rules, and transitions |
| `js/script.js` | Search, storage, and validation |
| `assets/images/` | Two SVG project illustrations |
| `docs/technical-documentation.md` | Implementation and testing |
| `docs/ai-usage-report.md` | AI usage log and declaration |
| `.gitignore` | Excludes editor/OS files and AI evidence from the repository |

## Run Locally

If the project folder is already on your computer, open that copy; do not clone again.

1. For a first download only:

   ```bash
   git clone https://github.com/sq999o/202338250-SaeedAlorayj-assignment2.git
   ```

2. Open the project folder in VS Code.
3. Install the Live Server extension if needed.
4. Open `index.html` and click **Go Live**.
5. Use the local HTTP address opened by Live Server.

No application packages, build command, backend, or API key are required. Use the same browser and address, including the port, when testing theme persistence.

## How to Use

- Navigate with About, Projects, and Contact.
- Search for `Campus`, `socialbook`, or `Flexbox`. Clear the search to restore all cards.
- Switch the theme and reload to check the saved preference.
- Complete the contact fields and press **Validate Message**. Correct any field identified by an error.

The form validates locally; it does not send messages or verify that an email address exists. The application stores only the selected theme, not contact details.

## Documentation and AI Use

ChatGPT helped generate code, explain it, suggest tests, review the project, and draft documentation. The student integrated the changes, followed the explanations, and reported testing the features.

- [Technical documentation and test checklist](docs/technical-documentation.md)
- [AI usage log and declaration](docs/ai-usage-report.md)

Full AI conversations and original intermediate AI-generated outputs are submitted separately on Blackboard as `202338250-SaeedAlorayj-assignment2-ai-evidence.zip`, using `conversations/` and `artifacts/` folders. Conversation logs and the evidence ZIP must not be committed to this repository. The AI usage report contains the usage log and required declaration. A reconstructed summary does not replace the required original conversations.

## Author

Saeed Alorayj  
Student ID: 202338250  
Computer Science Student at KFUPM
