# Technical Documentation – Assignment 2

## 1. Requirements and Structure

| Requirement | Implementation |
| --- | --- |
| Dynamic content | Live project search and updated result counts |
| Data handling | Theme storage and form validation |
| Transitions | Hover movements, smooth section navigation, and focus/color transitions |
| Error handling | Empty results, storage failures, invalid fields, and recovery instructions |

The assignment requires at least one data-handling option; this project does not need an external API.

The HTML contains the header, navigation, About, Projects, Contact, and footer. CSS and JavaScript are in separate files. The script uses `defer`, selects the existing element IDs, registers event handlers, and initializes the theme and search results.

## 2. Live Search

The `input` event calls `filterProjects()`. The query is trimmed, lowercased, and normalized with `replace(/\s+/g, " ")`. Card text is also lowercased and whitespace-normalized.

The function uses `includes()` for substring matching, changes each card's `hidden` property, and counts visible cards. An empty or spaces-only query displays all projects. Zero matches produce instructions to change or clear the query.

Search covers titles and descriptions. It is not fuzzy search or independent-word matching.

## 3. Theme Persistence

`applyTheme()` toggles the body's `dark-theme` class and updates the button label. The stored key is `portfolio-theme`; recognized values are `dark` and `light`.

`loadTheme()` restores a recognized value. A missing or unsupported value defaults to light. A read exception defaults to light and displays a recovery message.

A click applies the chosen theme before attempting `setItem()`. A failed save therefore does not prevent the visual change. Its message explains that the choice must be made again next time.

Storage belongs to the browser profile and origin. Different hosts or ports can have different saved preferences. New tabs load the saved value, but already-open tabs do not automatically synchronize.

## 4. Form Validation

The form is a local demo without a backend or delivery service.

- `preventDefault()` prevents normal submission.
- `noValidate` disables automatic validation popups while the script runs.
- Values are trimmed before validation.
- Checks run in order: name, email presence, email format, message.
- The email field is `type="email"`; `validity.typeMismatch` checks its format.
- Processing stops at the first error using `return`.
- `showFormError()` displays a message, marks the field with `aria-invalid`, connects the message using `aria-describedby`, and focuses the field.
- Input events clear outdated feedback.
- Valid input produces a success message explaining that nothing was sent, then resets the form.

Messages use `textContent`, so the user's name is displayed as text. Email-format validation does not establish that an address exists.

## 5. Presentation and Accessibility

CSS variables define both themes. Grid arranges cards and Flexbox arranges navigation and form elements.

| Width | Behavior |
| --- | --- |
| Above 850 px | Two project columns |
| 850 px and below | One project column; navigation wraps |
| 600 px and below | Navigation stacks; hero buttons expand; spacing and text sizes adjust |

Buttons/cards have small hover movements, fields have focus transitions, and section navigation scrolls smoothly.

Labels identify inputs. Images have alternative text. Interactive elements have visible keyboard-focus outlines. Search, theme, and form messages use `role="status"`; feedback is communicated with text as well as color. These features are not a claim of a complete accessibility audit.

## 6. Setup and Limitations

Follow the [README](../README.md) and run with Live Server. Keep the same browser and local address when testing storage.

There is no API fetch, database, contact-data persistence, or message delivery. Browser storage can be blocked or cleared. Project images are placeholders.

## 7. Verification Scope

The student reported completing the guided search, saved-theme, simulated storage-failure, and form-validation tests.

The source review checked JavaScript syntax, unique element IDs, label/ARIA references, local assets, navigation targets, and feature implementation. It corrected the contact introduction to say the form does not send messages.

A browser-based visual test was unavailable in the review environment. The table below lists expected results, not verified results for every browser/device.

## 8. Manual Test Checklist

| Test | Expected result |
| --- | --- |
| Empty search or spaces only | Both cards appear |
| `socialbook` | SocialBook only |
| `CAMPUS` or `Flexbox` | Campus Events only |
| `CSS` | Both projects |
| `  CSS   Selectors  ` | SocialBook only |
| `zzzz` | No cards and helpful no-results text |
| Clear search | Both cards return |
| Choose dark, reload | Dark theme remains; button says Light Mode |
| Choose light, reload | Light theme remains; button says Dark Mode |
| Open same address in a new tab | Last saved theme loads |
| Blank form or spaces-only name | Name error and focus |
| Name present, email blank | Email-required error |
| Email `invalid-email` | Email-format error |
| Valid name/email, blank message | Message-required error |
| Valid name, `test@example.com`, and message | Confirmation; form clears; nothing is sent |
| Type after feedback | Old feedback clears |
| Repeat errors/success in dark theme | Feedback remains readable |
| Widths 375, 768, 1440 px | Readable layout and no horizontal page overflow |
| Keyboard Tab, Enter, Space | Visible focus and operable controls |
| Another installed browser | Search, theme, form, images, and navigation work |
| Browser Console | No unexpected JavaScript errors |

### Temporary Storage-Failure Tests

Run only in the browser Console on the local test page. Refresh after each test to restore the original methods.

For a failed save:

```javascript
Storage.prototype.setItem = function () {
    throw new Error("Storage test");
};
```

Click the theme button. The theme should change and a save-error message should appear.

For a failed load:

```javascript
Storage.prototype.getItem = function () {
    throw new Error("Storage test");
};
loadTheme();
```

The page should use the light theme and display a load-error message. Refresh afterward.

### Final Local Test Record

Complete with actual results before submission:

- Browser/version: **[Enter actual browser/version.]**
- Additional browser: **[Enter actual browser/version or not tested.]**
- Widths checked: **[Enter actual widths.]**
- Results and remaining issues: **[Record actual results.]**
