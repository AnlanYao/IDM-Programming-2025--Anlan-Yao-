/* ---- DATA & OOP ---- */

// Define Project class
class Project {
    constructor(title, description, image, link) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}

// Projects array for Projects page
const projects = [
    new Project("Project 1", "Description for Project 1.", "images/project1.PNG", "#"),
    new Project("Project 2", "Description for Project 2.", "images/project2.JPG", "#"),
    new Project("Project 3", "Description for Project 3.", "images/project3.PNG", "#"),
    new Project("Project 4-1", "Description for Project 4-1.", "images/project4-1.JPG", "#"),
    new Project("Project 4-2", "Description for Project 4-2.", "images/project4-2.JPG", "#")
];

/* ---- INDEX PAGE ---- */
function initIndexPage() {
  const el = document.getElementById("welcome-message");
  if (!el) return;

  const messages = [
    "Welcome to my portfolio!",
    "Hello — thanks for visiting.",
    "Feel free to explore my work."
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  el.textContent = randomMessage;
}

/* ---- ABOUT PAGE ---- */
function initAboutPage() {
    // Example: animate or reveal content
    const aboutText = document.getElementById("about-text");
    if (aboutText) {
        aboutText.style.opacity = "1"; // simple reveal effect
    }
}

/* ---- PROJECTS PAGE ---- */
function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card";

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        img.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const desc = document.createElement("p");
        desc.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View Project";
        link.target = "_blank";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(link);

        container.appendChild(card);
    });
}

/* ---- CONTACT PAGE ---- */
function initContactPage() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}

/* ---- INITIALISATION ---- */
function init() {
    // Detect page by id or unique element
    if (document.getElementById("welcome-message")) {
        initIndexPage();
    }
    if (document.getElementById("about-text")) {
        initAboutPage();
    }
    if (document.getElementById("projects-container")) {
        renderProjects();
    }
    if (document.getElementById("contact-form")) {
        initContactPage();
    }
}

// Run init on DOMContentLoaded
document.addEventListener("DOMContentLoaded", init);