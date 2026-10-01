const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Mobile menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
