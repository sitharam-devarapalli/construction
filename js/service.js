const serviceData = {
    "residential-projects": {
        "title": "Residential Projects",
        "image": "assets/service-img-1.jpg",
        "description1": "Our residential projects are crafted to reflect modern living with timeless design. Whether you're building your dream villa or a sophisticated apartment, we bring expertise and creativity to every project. From space planning to premium finishing, we ensure the home aligns with your lifestyle, comfort, and functionality. Our commitment to excellence ensures a hassle-free experience from planning to handover.",
        "description2": "Including villas, apartments and gated communities with eco-friendly construction and interior design services that stand the test of time.",
        "services": [
            "Custom home design",
            "Luxury villa construction",
            "Eco-friendly materials",
            "Interior & exterior finishing"
        ],
        "steps": [
            {
                "title": "Planning",
                "img": "assets/service-1.png",
                "desc": "We begin with a comprehensive consultation, understanding your needs, preferences, and ensuring all permissions and approvals are in place."
            },
            {
                "title": "Design",
                "img": "assets/service-2.png",
                "desc": "Our team delivers realistic 3D layouts and visual presentations for both interiors and exteriors to bring your dream home to life."
            },
            {
                "title": "Execution",
                "img": "assets/service-3.png",
                "desc": "We manage construction with precision and quality assurance, delivering on time with attention to every detail."
            }
        ]
    },

    "institutional-projects": {
        "title": "Institutional Projects",
        "image": "assets/service-img-2.jpg",
        "description1": "At Digisphere, we specialize in constructing smart infrastructure for educational, healthcare, and government institutions. Our institutional projects are built to meet compliance, support community needs, and stand the test of time.",
        "description2": "From planning to execution, we ensure functional, sustainable, and accessible buildings. Whether it's a school, hospital, or public facility, our focus remains on future-readiness, safety, and public utility enhancement.",
        "services": [
            "Turnkey school buildings",
            "Healthcare facility construction",
            "Public utility works",
            "Auditoriums and campus planning"
        ],
        "steps": [
            {
                "title": "Planning",
                "img": "assets/service-1.png",
                "desc": "Government compliance and blueprints"
            },
            {
                "title": "Design",
                "img": "assets/service-2.png",
                "desc": "Adaptive layouts & accessibility"
            },
            {
                "title": "Delivery",
                "img": "assets/service-3.png",
                "desc": "Budget tracking & milestone handovers"
            }
        ]
    },

    "commercial-projects": {
        "title": "Commercial Projects",
        "image": "assets/service-img-3.jpg",
        "description1": "We specialize in developing high-functioning, visually appealing commercial spaces that support long-term business success. Our designs are tailored to align with operational objectives, optimizing space utility and overall efficiency.",
        "description2": "From conceptual planning to final delivery, we manage every stage of the commercial construction lifecycle. Whether it's office buildings, retail environments, or showrooms, we ensure scalable, sustainable, and future-ready outcomes with precision.",
        "services": [
            "Office and retail construction",
            "Shopping mall development",
            "Commercial interior fit-outs",
            "Parking and access planning"
        ],
        "steps": [
            {
                "title": "Concept",
                "img": "assets/service-1.png",
                "desc": "Business-aligned layout planning"
            },
            {
                "title": "Construction",
                "img": "assets/service-2.png",
                "desc": "Modern architecture & execution"
            },
            {
                "title": "Completion",
                "img": "assets/service-3.png",
                "desc": "Client walkthrough and handover"
            }
        ]
    },

    "pile-foundation-works": {
        "title": "Pile Foundation Works",
        "image": "assets/service-img-4.jpg",
        "description1": "We offer advanced pile foundation solutions designed to ensure structural stability and longevity for high-rise buildings, industrial complexes, and infrastructure projects. Our experienced team uses precision-based methodologies to deliver robust foundational systems that can withstand extreme loads and geotechnical conditions.",
        "description2": "Specializing in cast-in-situ, driven piles, and bored pile techniques, we provide tailor-made solutions based on soil characteristics and structural needs. Our services include end-to-end execution—right from soil testing, structural assessments, drilling, and pile installation to post-completion certification and quality assurance.",
        "services": [
            "Bored pile foundations using hydraulic rigs",
            "Driven piles with vibration or hammer techniques",
            "Static and dynamic load testing",
            "Geotechnical investigation and soil behavior analysis",
            "Pile integrity testing and cross-hole sonic logging",
            "On-site quality monitoring and reporting"
        ],
        "steps": [
            {
                "title": "Survey",
                "img": "assets/service-1.png",
                "desc": "Comprehensive geotechnical investigations, soil resistivity tests, and load-bearing capacity assessments to determine the right pile system for the project."
            },
            {
                "title": "Execution",
                "img": "assets/service-2.png",
                "desc": "Implementation of bored or driven pile techniques using advanced machinery with strict adherence to project specs, timelines, and safety protocols."
            },
            {
                "title": "Assurance",
                "img": "assets/service-3.png",
                "desc": "Post-execution validation including static load testing, pile integrity checks, and final compliance certification for structural approval and client handover."
            }
        ]
    },

    "interior-fit-outs": {
        "title": "Interior Fit-Outs",
        "image": "assets/service-img-1.jpg",
        "description1": "We specialize in turning raw spaces into refined environments that blend aesthetics, functionality, and brand identity seamlessly.",
        "description2": "From concept to completion, our interior fit-out solutions cover modular furniture, intelligent lighting, space optimization, and complete turnkey interior development tailored to both residential and commercial needs.",
        "services": [
            "False ceiling with LED ambient lighting",
            "Premium modular furniture setup",
            "Glass and wooden partitions, decorative cladding",
            "Luxury finishes, textures, and branding elements",
            "Custom cabinetry and wall units",
            "Acoustic treatments for noise control",
            "Smart home/office integration (IoT-enabled devices)",
            "Flooring solutions – hardwood, vinyl, carpet tiles",
            "MEP integration (Mechanical, Electrical, Plumbing)"
        ],
        "steps": [
            {
                "title": "Concept & Design",
                "img": "assets/service-1.png",
                "desc": "Understanding your vision through mood boards, 3D renders, and premium material selections to bring your space to life."
            },
            {
                "title": "Execution & Supervision",
                "img": "assets/service-2.png",
                "desc": "Meticulous fabrication and onsite installation under expert supervision, ensuring timelines and quality standards are met."
            },
            {
                "title": "Finishing & Handover",
                "img": "assets/service-3.png",
                "desc": "Final detailing, polish, deep cleaning, and client walkthrough with handover of a fully functional, ready-to-use interior."
            }
        ]
    }

};
function getServiceFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || 'residential-projects'; // Default
}

function renderServiceContent(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    const serviceSection = document.querySelector('.service-content');
    const serviceImage = document.querySelector('.service-image img');

    serviceSection.classList.add('fade-out');

    setTimeout(() => {
        serviceImage.src = data.image;
        serviceSection.querySelector('h2').textContent = data.title;
        serviceSection.querySelectorAll('p')[0].textContent = data.description1;
        serviceSection.querySelectorAll('p')[1].textContent = data.description2;

        // Service List
        const listContainer = document.querySelector('.service-list ul');
        listContainer.innerHTML = '';
        data.services.forEach(item => {
            listContainer.innerHTML += `
          <li class="col-md-6 mb-2">
            <i class="bi bi-check-circle-fill text-success me-2"></i> ${item}
          </li>`;
        });

        // Step Updates
        const steps = document.querySelectorAll('.service-step');
        data.steps.forEach((step, i) => {
            steps[i].querySelector('img').src = step.img;
            steps[i].querySelector('h6').textContent = step.title;
            steps[i].querySelector('p').textContent = step.desc;
        });

        // Animate In
        serviceSection.classList.remove('fade-out');
        serviceSection.classList.add('fade-in');

        // Reset animation class
        setTimeout(() => {
            serviceSection.classList.remove('fade-in');
        }, 300);
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
    renderServiceContent(getServiceFromURL());

    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const key = this.dataset.service;
            history.pushState({}, "", `?service=${key}`);
            renderServiceContent(key);
        });
    });
});