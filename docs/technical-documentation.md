# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript.

The website contains three main sections:

- About Me
- Projects
- Contact

It also includes responsive design and basic JavaScript interactions.

## 2. HTML Structure

The main HTML file is:

`index.html`

The page is divided into the following main parts:

### Header and Navigation

The header contains:

- My name
- Navigation links
- Dark/Light mode button
- Introductory text and tagline

### About Me

The About Me section contains a short introduction about me as a Computer Science student at KFUPM.

### Projects

The Projects section contains two project cards.

Each project includes:

- Project image
- Project title
- Short description

### Contact

The Contact section contains a form with:

- Name
- Email
- Message
- Submit button

The form does not use a backend.

## 3. CSS Design

The main stylesheet is located at:

`css/styles.css`

The CSS is used for:

- Page colors
- Layout
- Typography
- Buttons
- Project cards
- Contact form
- Dark theme
- Responsive design

CSS variables are used to keep the colors organized.

## 4. Responsive Design

The website was designed to work on different screen sizes.

### Desktop

The project cards are displayed in two columns.

The navigation is displayed horizontally.

### Tablet

The layout becomes more compact and the project cards move into one column.

### Mobile

Navigation elements are rearranged to fit smaller screens.

Buttons expand to use the available width.

Text sizes and spacing are adjusted.

Responsive behavior is implemented using media queries, Flexbox, and CSS Grid.

## 5. JavaScript Features

The JavaScript file is located at:

`js/script.js`

### Dark and Light Mode

The theme button switches the page between Dark Mode and Light Mode.

JavaScript adds or removes the `dark-theme` class from the page.

### Contact Form Interaction

The contact form uses JavaScript to prevent the normal form submission.

After the user enters valid information and presses the submit button, a confirmation message is displayed.

The form is then cleared.

No backend or database is used.

## 6. Project Images

Project images are stored in:

`assets/images/`

The project uses two SVG placeholder images:

- `project1.svg`
- `project2.svg`

## 7. Testing

I tested the website by:

- Opening it in a web browser
- Testing the navigation links
- Testing Dark Mode and Light Mode
- Testing the contact form
- Resizing the browser window
- Checking desktop, tablet, and mobile layouts
- Checking that the project images load correctly

## 8. Technologies Used

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries
- Git
- GitHub

## 9. How to Run the Project

No additional packages are required.

To run the website:

1. Open the project folder.
2. Open `index.html` in a web browser.