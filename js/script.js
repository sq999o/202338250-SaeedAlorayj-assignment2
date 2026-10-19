// Portfolio Assignment 2
// Handles theme preferences, live project search, and contact form interaction.

const themeToggle = document.getElementById("theme-toggle");
const themeMessage = document.getElementById("theme-message");
const themeStorageKey = "portfolio-theme";

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

const projectSearch = document.getElementById("project-search");
const projectSearchStatus = document.getElementById("project-search-status");
const projectCards = document.querySelectorAll(".project-card");


// Apply the selected theme and update the button label.
function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-theme", isDark);

    if (isDark) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
}


// Restore the saved theme when the page loads.
function loadTheme() {
    themeMessage.textContent = "";

    try {
        const savedTheme = localStorage.getItem(themeStorageKey);

        if (savedTheme === "dark" || savedTheme === "light") {
            applyTheme(savedTheme);
        } else {
            applyTheme("light");
        }
    } catch (error) {
        applyTheme("light");

        themeMessage.textContent =
            "Your saved theme could not be loaded. " +
            "Use the theme button to choose a theme for this visit.";
    }
}


// Change the theme and try to save the preference.
themeToggle.addEventListener("click", function () {
    let selectedTheme = "dark";

    if (document.body.classList.contains("dark-theme")) {
        selectedTheme = "light";
    }

    // Keep theme switching functional even if saving fails.
    applyTheme(selectedTheme);

    try {
        localStorage.setItem(themeStorageKey, selectedTheme);

        themeMessage.textContent = "";
    } catch (error) {
        themeMessage.textContent =
            "Theme changed for this visit, but your preference could not be saved. " +
            "Choose your theme again next time.";
    }
});

loadTheme();


// Live project search
function filterProjects() {
    // Ignore letter case and normalize extra spaces.
    const searchTerm = projectSearch.value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

    let visibleCount = 0;

    projectCards.forEach(function (card) {
        // Search the existing project title and description.
        const projectText = card.textContent
            .toLowerCase()
            .replace(/\s+/g, " ");

        const isMatch = projectText.includes(searchTerm);

        card.hidden = !isMatch;

        if (isMatch) {
            visibleCount++;
        }
    });

    if (searchTerm === "") {
        projectSearchStatus.textContent =
            `Showing all ${projectCards.length} projects.`;
    } else if (visibleCount === 0) {
        projectSearchStatus.textContent =
            "No projects found. Try another keyword or clear the search.";
    } else {
        projectSearchStatus.textContent =
            `Showing ${visibleCount} of ${projectCards.length} projects.`;
    }
}

projectSearch.addEventListener("input", filterProjects);

// Set the initial results and count.
filterProjects();


// Contact form interaction
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");

    formMessage.textContent =
        `Thanks, ${nameInput.value}! Your message has been received.`;

    contactForm.reset();
});