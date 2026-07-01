// ===============================
// HAMBURGER MENU - START
// ===============================

// Hamburger Menu Toggle Functionality
// This controls the mobile navigation menu (hamburger icon + navigation bar)

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

// When the hamburger icon is clicked:
// 1. Toggle "active" class on the menu icon (for animation)
// 2. Toggle "active" class on the navigation menu (to show/hide it)

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
});

// ===============================
// HAMBURGER MENU - END
// ===============================


/* ==========================================
   PORTFOLIO CARD AUTO SHUFFLE
   This feature automatically shuffles the
   project cards every 5 seconds to make
   the layout feel dynamic and interactive.
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Select the container that holds all project cards
    const projects = document.querySelector(".projects");

    // Function to randomly shuffle project cards
    function shuffleCards() {
        // Convert NodeList into an array for sorting
        const cards = Array.from(projects.querySelectorAll(".card"));

        // Randomly sort the cards
        cards.sort(() => Math.random() - 0.5);

        // Re-append cards in new shuffled order
        cards.forEach(card => {
            projects.appendChild(card);
        });
    }

    // Automatically shuffle cards every 5 seconds (5000ms)
    setInterval(shuffleCards, 5000);
});

/* ==========================================
   END OF PORTFOLIO CARD AUTO SHUFFLE
   ========================================== */