// Portfolio Assignment 2
// Handles the theme toggle, live project search, and contact form interaction.

const themeToggle = document.getElementById("theme-toggle");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

const projectSearch = document.getElementById("project-search");
const projectSearchStatus = document.getElementById("project-search-status");
const projectCards = document.querySelectorAll(".project-card");


// Dark / Light theme
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});


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