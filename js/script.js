// Portfolio Assignment 1
// Handles the theme toggle and contact form interaction.

const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");


// Dark / Light theme
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});


// Contact form interaction
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");

    formMessage.textContent =
        `Thanks, ${nameInput.value}! Your message has been received.`;

    contactForm.reset();
});