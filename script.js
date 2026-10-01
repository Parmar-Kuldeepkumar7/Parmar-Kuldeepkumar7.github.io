// ========================================
// KULDEEPKUMAR PARMAR
// PORTFOLIO JAVASCRIPT
// ========================================


// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });


    // Close mobile menu after clicking a link
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });
}


// Close the mobile menu if the user clicks outside it
document.addEventListener("click", (event) => {

    if (!navLinks || !menuButton) {
        return;
    }

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        navLinks.classList.remove("active");
    }

});


// Update footer year automatically
const footerYear = document.querySelector(".footer-content span");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Kuldeepkumar Parmar`;

}
