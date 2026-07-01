// ===============================
// Modal 2 Functions - Open, Close, Outside Click,
// and Auto Shuffle Every 5 Seconds
// This script opens Modal 2, displays the planning
// items, automatically shuffles their positions
// every 5 seconds, and stops when the modal closes.
// ===============================

let shuffleInterval;

// Shuffle all planning items randomly
function shufflePlanningItems() {
    const grid = document.querySelector(".planning-grid");

    if (!grid) return;

    const items = Array.from(grid.children);

    // Fisher-Yates Shuffle Algorithm
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    // Re-append items in their new order
    items.forEach(item => grid.appendChild(item));
}

function openModal2() {
    const modal = document.getElementById("modal2");
    const title = document.getElementById("modal2Title");
    const desc = document.getElementById("modal2Description");

    modal.style.display = "block";
    title.innerText = "";

    desc.innerHTML = `
        <div class="planning-grid">

            <div class="planning-item">
                <img src="blueprint1.png" alt="Concept Development">
                <h4>Concept Development</h4>
                <p>Initial ideas and architectural concept formation.</p>
            </div>

            <div class="planning-item">
                <img src="blueprint2.png" alt="Site Analysis">
                <h4>Site Analysis</h4>
                <p>Studying land, orientation, and environmental factors.</p>
            </div>

            <div class="planning-item">
                <img src="blueprint3.png" alt="Space Planning">
                <h4>Space Planning</h4>
                <p>Organizing rooms and functional layout efficiently.</p>
            </div>

            <div class="planning-item">
                <img src="blueprint4.png" alt="Design Proposal">
                <h4>Design Proposal</h4>
                <p>Final architectural design presentation.</p>
            </div>

            <div class="planning-item">
                <img src="blueprint5.png" alt="3D Visualization">
                <h4>3D Visualization</h4>
                <p>Realistic rendering of the project design.</p>
            </div>

            <div class="planning-item">
                <img src="blueprint6.png" alt="Project Approval">
                <h4>Project Approval</h4>
                <p>Final review and client approval stage.</p>
            </div>

        </div>
    `;

    // Prevent multiple intervals from running
    clearInterval(shuffleInterval);

    // Shuffle items every 5 seconds
    shuffleInterval = setInterval(shufflePlanningItems, 5000);
}

function closeModal2() {
    document.getElementById("modal2").style.display = "none";

    // Stop shuffling when modal is closed
    clearInterval(shuffleInterval);
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal2");

    if (event.target === modal) {
        modal.style.display = "none";

        // Stop shuffling when clicking outside the modal
        clearInterval(shuffleInterval);
    }
});

// ===============================
// End of Modal 2 Auto Shuffle Script
// ===============================