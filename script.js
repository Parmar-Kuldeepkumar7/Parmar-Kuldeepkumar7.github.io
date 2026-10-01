/* =========================================
   KULDEEPKUMAR PARMAR
   PORTFOLIO JAVASCRIPT
   ========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       MOBILE NAVIGATION
       ========================================= */

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.getElementById("navLinks");


    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });


        const links =
            navLinks.querySelectorAll("a");


        links.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }



    /* =========================================
       ACTIVE NAVIGATION
       ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");


    const updateActiveLink = () => {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();



    /* =========================================
       CLOSE MOBILE MENU ON RESIZE
       ========================================= */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 850 &&
            navLinks
        ) {

            navLinks.classList.remove("active");

        }

    });



    /* =========================================
       SMOOTH SCROLL
       ========================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(targetId);


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const navHeight = 68;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navHeight;


                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }
            );

        });



    /* =========================================
       CURRENT YEAR
       ========================================= */

    const footer =
        document.querySelector("footer");


    if (footer) {

        const year =
            new Date().getFullYear();


        const copyright =
            footer.querySelector(
                ".footer-content span"
            );


        if (copyright) {

            copyright.textContent =
                `© ${year} Kuldeepkumar Parmar`;

        }

    }

});
