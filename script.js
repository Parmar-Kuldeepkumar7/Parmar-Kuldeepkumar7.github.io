// ========================================
// KULDEEPKUMAR PARMAR - PORTFOLIO
// ========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// Mobile navigation
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
