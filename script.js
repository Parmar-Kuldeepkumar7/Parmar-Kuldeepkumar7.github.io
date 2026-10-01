const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// Open / close mobile navigation
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close navigation after selecting a section
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
