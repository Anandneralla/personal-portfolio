
// =====================================
// 1. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Update accessibility status
    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// =====================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// =====================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// =====================================
// 3. CURRENT YEAR IN FOOTER
// =====================================

const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} My Portfolio.
    All Rights Reserved.</p>
`;


// =====================================
// 4. PROJECT BUTTON INTERACTION
// =====================================

const projectButtons = document.querySelectorAll(".project-card a");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link will be added soon!");

        }

    });

});


// =====================================
// 5. CONTACT EMAIL INTERACTION
// =====================================

console.log("Personal Portfolio Website Loaded Successfully!");
