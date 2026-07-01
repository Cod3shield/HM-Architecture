// =====================================
// MODAL FUNCTIONS
// Handles opening, closing, and content
// switching for the modal window
// =====================================

function openModal(type) {

    const modal = document.getElementById("modal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");

    // ABOUT SECTION
    if (type === "about") {
        title.textContent = "";

        // Uses innerHTML because it contains image + HTML structure
        description.innerHTML = `
            <div class="about-box">
                <img src="harf.png" alt="Architect" class="about-img">
                <h3 style="color: purple;">Harrold H. Macas</h3>
               <p>
                   A Registered and Licensed Architect and Licensed Master Plumber
                   with solid experience in architectural design, interior space planning,
                   and plumbing system coordination. After passing the Architect Licensure
                   Examination in 2017, professional practice focused on designing safe, functional,
                   and efficient building spaces. In 2022, the Master Plumber Licensure Examination
                   was successfully passed, further strengthening expertise in plumbing system design,
                   installation coordination, and compliance with national building and plumbing codes.
                   With dual licensure, architectural and plumbing systems are seamlessly integrated to
                   improve project coordination, minimize conflicts, and deliver practical, code-compliant,
                   and well-designed solutions while remaining open to international collaborations.
                </p>
            </div>
        `;
    }


    // DESIGN PROCESS SECTION
    else if (type === "process") {
        title.textContent = "Design Process";

        description.textContent =
            "Our design process begins with a personal consultation where we discuss your ideas, preferences, budget, and project goals. We then develop a design concept including layouts, color palettes, furniture selections, and material recommendations. After approval, we refine details, finalize plans, and proceed with full project implementation.";
    }

    // CONSULTATION SECTION
    else if (type === "consultation") {
        title.textContent = "Project Consultation";

        description.textContent =
            "Our project consultation service allows clients to discuss ideas directly with our designers. We assess your space, understand your style, and provide practical design solutions tailored to your budget and timeline. This helps ensure your project starts with a clear direction and realistic expectations.";
    }

    // PRIVACY POLICY SECTION
    else if (type === "privacy") {
        title.textContent = "Privacy Policy";

        description.textContent =
            "We respect your privacy and are committed to protecting your personal information. We do not sell, trade, or share your data without your consent, except when required by law. All information collected is used only to improve our services and user experience.";
    }

    // TERMS OF SERVICE SECTION
    else if (type === "terms") {
        title.textContent = "Terms of Service";

        description.textContent =
            "By using our website, you agree to our terms and conditions. All content, designs, and materials displayed are owned by our studio unless otherwise stated. Users must not copy, distribute, or misuse any content without prior written permission from the owner.";
    }
    // SHOW MODAL
    modal.style.display = "block";
}

// =====================================
// CLOSE MODAL FUNCTION
// Hides the modal window
// =====================================
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// =====================================
// CLICK OUTSIDE MODAL TO CLOSE
// If user clicks outside modal content,
// the modal will close automatically
// =====================================
window.onclick = function (event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        closeModal();
    }
};

// ===============================
// End of Modal Functions
// ===============================