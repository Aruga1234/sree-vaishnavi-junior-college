/* =========================================================
   SREE VAISHNAVI JR COLLEGE
   CUSTOM JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       NAVBAR ACTIVE LINK
    ===================================================== */

    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =====================================================
       CLOSE MOBILE NAVBAR AFTER CLICK
    ===================================================== */

    const navbar = document.getElementById("mainNavbar");

    const mobileNavLinks =
        document.querySelectorAll(".navbar-nav .nav-link");

    mobileNavLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbar.classList.contains("show")
            ) {

                const navbarCollapse =
                    bootstrap.Collapse.getInstance(navbar);

                if (navbarCollapse) {
                    navbarCollapse.hide();
                }

            }

        });

    });


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");

    function toggleBackToTop() {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener("scroll", toggleBackToTop);

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       ANIMATED COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter");

    let counterStarted = false;

    function animateCounters() {

        if (counterStarted) {
            return;
        }

        const achievementSection =
            document.getElementById("achievements");

        if (!achievementSection) {
            return;
        }

        const sectionPosition =
            achievementSection.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionPosition < windowHeight - 100) {

            counterStarted = true;

            counters.forEach(function (counter) {

                const target =
                    parseInt(counter.getAttribute("data-target"));

                let current = 0;

                const increment =
                    Math.max(1, Math.ceil(target / 60));

                const timer =
                    setInterval(function () {

                        current += increment;

                        if (current >= target) {

                            counter.textContent =
                                target;

                            clearInterval(timer);

                        } else {

                            counter.textContent =
                                current;

                        }

                    }, 25);

            });

        }

    }

    window.addEventListener(
        "scroll",
        animateCounters
    );

    animateCounters();


    /* =====================================================
       ENQUIRY FORM
    ===================================================== */

    const enquiryForm =
        document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const studentName =
                    document.getElementById(
                        "studentName"
                    ).value.trim();

                const parentName =
                    document.getElementById(
                        "parentName"
                    ).value.trim();

                const phone =
                    document.getElementById(
                        "phone"
                    ).value.trim();

                const course =
                    document.getElementById(
                        "course"
                    ).value;

                if (
                    !studentName ||
                    !parentName ||
                    !phone ||
                    !course
                ) {

                    alert(
                        "Please fill in all required fields."
                    );

                    return;
                }

                /*
                 * This is a STATIC website.
                 *
                 * No backend/database is connected.
                 *
                 * For now, the form displays a confirmation.
                 * Later this can be connected to:
                 *
                 * - PHP
                 * - Node.js / Express
                 * - EmailJS
                 * - Formspree
                 * - Firebase
                 * - MongoDB
                 */

                alert(
                    "Thank you, " +
                    studentName +
                    "!\n\n" +
                    "Your admission enquiry has been recorded on this demo website.\n\n" +
                    "The college can be contacted at:\n" +
                    "9247797248 / 9493887248"
                );

                enquiryForm.reset();

            }
        );

    }


    /* =====================================================
       PHONE NUMBER VALIDATION
    ===================================================== */

    const phoneInput =
        document.getElementById("phone");

    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(
                        /[^0-9]/g,
                        ""
                    );

                if (this.value.length > 10) {

                    this.value =
                        this.value.substring(
                            0,
                            10
                        );

                }

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL EFFECT
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".course-card, " +
            ".feature-card, " +
            ".process-card, " +
            ".contact-card, " +
            ".skill-item"
        );

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });


    /* =====================================================
       SMOOTH ANCHOR SCROLLING
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId.length === 0
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    const navbarHeight =
                        document.querySelector(
                            ".main-navbar"
                        ).offsetHeight;

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }

            }
        );

    });

});