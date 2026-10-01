/* ========================================
   KULDEEPKUMAR PARMAR
   PORTFOLIO JAVASCRIPT
   ======================================== */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


    document.addEventListener("click", (event) => {

        const clickedInsideNavigation =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);


        if (
            !clickedInsideNavigation &&
            !clickedMenuButton
        ) {

            navLinks.classList.remove("active");

        }

    });

}


/* =========================
   CURRENT YEAR
   ========================= */

const footerYear =
    document.querySelector(".footer-content span");


if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Kuldeepkumar Parmar`;

}
