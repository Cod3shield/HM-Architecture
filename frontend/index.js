// ===============================
// HAMBURGER MENU - START
// ===============================

// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    nav.classList.toggle("active");

});

// ===============================
// HAMBURGER MENU - END
// ===============================


// ===============================
// SLIDER / DOTS CAROUSEL - START
// ===============================

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let current = 0;

slides.forEach((slide, index) => {

    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (index === 0)
        dot.classList.add("active");

    dot.onclick = () => showSlide(index);

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = index;

    slides[current].classList.add("active");
    dots[current].classList.add("active");

}

document.querySelector(".next").onclick = () => {

    showSlide((current + 1) % slides.length);

}

document.querySelector(".prev").onclick = () => {

    showSlide((current - 1 + slides.length) % slides.length);

}

setInterval(() => {

    showSlide((current + 1) % slides.length);

}, 5000);

// ===============================
// SLIDER / DOTS CAROUSEL - END
// ===============================


// ===============================
// INFINITE SMOOTH CAROUSEL - START
// ===============================

// This script makes the carousel scroll continuously
// and resets seamlessly without blank spaces.

const track = document.querySelector(".carousel-track");

let speed = 2; // control scrolling speed (higher = faster)

// Clone all carousel items so the scroll can loop infinitely
track.innerHTML += track.innerHTML;

let position = 0;

function animateCarousel() {
    position -= speed;

    // When half of the content has scrolled,
    // reset position back to start (because content is duplicated)
    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0; // instant reset without visible gap
    }

    // Apply movement using transform
    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animateCarousel);
}

// Start the animation loop
animateCarousel();

// ===============================
// INFINITE SMOOTH CAROUSEL - END
// ===============================


// ===============================
// COOKIE CONSENT - START
// ===============================
//
// COOKIE CONSENT SCRIPT
// This script handles Accept and Reject actions for the cookie banner.
// It also stores the user's choice in localStorage so the banner
// will not appear again after selection.
//

const cookieBox = document.querySelector(".cookie");
const acceptBtn = document.querySelector(".cookie button:first-child");
const rejectBtn = document.querySelector(".cookie button:last-child");

// Check if the user has already made a choice
if (localStorage.getItem("cookieConsent")) {
    cookieBox.style.display = "none";
}

// When user accepts cookies
acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBox.style.display = "none";
});

// When user rejects cookies
rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    cookieBox.style.display = "none";
});

//
// END OF COOKIE CONSENT SCRIPT
//
// ===============================
// COOKIE CONSENT - END
// ===============================


// This script adds a simple hover effect to blog cards.
// When the user moves the mouse over a card, the text inside it will glow in purple.
// When the mouse leaves the card, the glow effect is removed.

const cards = document.querySelectorAll(".blog-card");

cards.forEach(card => {
    const text = card.querySelector(".blog-content");

    card.addEventListener("mouseover", () => {
        text.style.textShadow = "0 0 10px purple, 0 0 20px purple";
    });

    card.addEventListener("mouseout", () => {
        text.style.textShadow = "";
    });
});



// ==========================================
// Featured Projects Title Color Animation
// This script changes the title to a random
// color every 500 milliseconds.
// ==========================================

const title = document.getElementById("featured-title");

// Function to generate a random color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
    const color = randomColor();

    title.style.color = color;
    title.style.textShadow = `0 0 10px ${color}`;
}, 500);

// ==========================================
// End of Featured Projects Title Animation
// ==========================================


// ==========================================
// Project Names Color Animation
// This script changes the color of all
// project names in the carousel.
// ==========================================

const projectTitles = document.querySelectorAll(".project-info h3");

// Generate a random color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
    const color = randomColor();

    projectTitles.forEach(title => {
        title.style.color = color;
        title.style.textShadow = `0 0 10px ${color}`;
    });
}, 500);

// ==========================================
// End of Project Names Color Animation
// ==========================================
