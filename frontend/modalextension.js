// =======================
// Open Extension Modal
// =======================

let slideshowInterval;

function openModalExtension() {
    const modal = document.getElementById("modalextension");
    const title = document.getElementById("modalextensionTitle");
    const desc = document.getElementById("modalextensionDescription");
    const spinner = document.getElementById("spinner");

    // Create spinner style only once
    if (!document.getElementById("spinner-style")) {
        const style = document.createElement("style");
        style.id = "spinner-style";
        style.innerHTML = `
            .spinner {
                width: 14px;
                height: 14px;
                margin-left: 8px;
                border: 2px solid #ccc;
                border-top: 2px solid #000;
                border-radius: 50%;
                display: inline-block;
                animation: spin 0.8s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    spinner.style.display = "inline-block";
    title.innerText = "";
    title.style.textAlign = "center";
    title.style.width = "100%";

    // Project list
    const items = [
        {
            img: "actual1.png",
            title: "Residential Studio Unit",
            desc: `Experience a renovated modern studio with a clean,
                  minimalist design and bright open layout. It features
                  smooth walls, white cabinetry, black countertops, and
                  a clutter-free space. Natural light fills the room, creating
                  a warm and inviting atmosphere perfect for modern living
                  and designed for comfort and style.`
        },
        {
            img: "actual2.jpg",
            title: "Design and Execution of Modern Office Interior Space",
            desc: `This residential studio unit is designed to maximize
                   functionality and comfort within a compact space.
                   The open-plan layout integrates the kitchen and living area,
                   creating an efficient and visually spacious environment.
                   Clean lines, neutral finishes, and natural lighting enhance
                   the interior, providing a modern, practical, and welcoming
                   living space suitable for contemporary urban lifestyles.`
        },
        {
            img: "actual3.png",
            title: "Modern Multi-Storey Commercial Building",
            desc: `A modern multi-storey commercial building
                   designed with clean architectural lines, functional
                   layouts, and contemporary aesthetics. The project emphasizes
                   durability, accessibility, and efficient space planning while
                   creating a professional environment for business operations.
                   Its balanced façade, open circulation, and refined exterior
                   reflect practical design solutions for today's commercial developments.`
        },
        {
            img: "actual4.jpg",
            title: "Modern Residential Interior Fit-Out",
            desc: `This completed residential interior fit-out project
                   demonstrates our commitment to quality craftsmanship,
                   functional design, and modern aesthetics. Carefully
                   executed with custom-built cabinetry, premium finishes, and efficient
                   space planning, the project delivers a refined and practical living environment
                   tailored to meet the client's vision and lifestyle.`
        },
        {
            img: "actual5.png",
            title: "Contemporary Interior Space",
            desc: `Designed with a focus on clean lines, balanced proportions,
                   and functional elegance, this contemporary interior showcases
                   a seamless blend of modern architecture and refined craftsmanship.
                   Bright, open spaces, premium finishes, and minimalist aesthetics
                   create a welcoming environment that enhances comfort, efficiency,
                   and timeless visual appeal for both residential and commercial applications.`
        },
        {
            img: "actual6.jpg",
            title: "Sustainable Container Architecture",
            desc: `integrates innovative construction methods with environmentally conscious design
                   to create durable, efficient, and adaptable spaces. By maximizing structural performance,
                   optimizing resource utilization, and supporting long-term sustainability, it delivers
                   modern architectural solutions that balance functionality, resilience, and aesthetic
                   appeal for diverse community and institutional applications.`
        }
    ];

    let index = 0;

    // Display two projects at a time
    function renderBatch() {
        const batch = items.slice(index, index + 2);

        desc.innerHTML = `
            <div class="planning-grid">
                ${batch.map(item => `
                    <div class="planning-item">
                        <img src="${item.img}" alt="">
                        <h4>${item.title}</h4>
                        ${item.desc ? `<p>${item.desc}</p>` : ""}
                    </div>
                `).join("")}
            </div>
        `;

        index += 2;

        // Restart from the beginning after the last project
        if (index >= items.length) {
            index = 0;
        }
    }

    setTimeout(() => {
        spinner.style.display = "none";
        modal.style.display = "block";

        renderBatch();

        // Prevent multiple intervals when reopening the modal
        clearInterval(slideshowInterval);

        // Change projects every 5 seconds
        slideshowInterval = setInterval(renderBatch, 5000);

    }, 5000);
}

// =======================
// Close Extension Modal
// =======================

function closeModalExtension() {
    document.getElementById("modalextension").style.display = "none";

    // Stop the slideshow
    clearInterval(slideshowInterval);
}

// =======================
// End of Extension Modal
// =======================