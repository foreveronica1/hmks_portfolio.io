// ==============================
// Active Navigation Highlight
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});




// ==============================
// Scroll Reveal Animation
// ==============================

const revealElements = document.querySelectorAll(
    "section, .feature-card, .experience-card, .project-card, .contact-grid div"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


function revealOnScroll() {

    revealElements.forEach(element => {

        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;


        if (elementPosition < screenHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();




// ==============================
// Hero Loading Animation
// ==============================

window.addEventListener("load", () => {

    const heroItems = document.querySelectorAll(
        ".hero-title, .hero-image, .hero-text"
    );


    heroItems.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";


        setTimeout(() => {

            item.style.transition = "1s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, 300 + index * 200);

    });

});




// ==============================
// Profile Image Movement Effect
// ==============================

const profileImage = document.querySelector(".hero-image img");


if (profileImage) {

    document.addEventListener("mousemove", event => {

        const moveX =
            (window.innerWidth / 2 - event.clientX) / 70;


        const moveY =
            (window.innerHeight / 2 - event.clientY) / 70;


        profileImage.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });

}




// ==============================
// Button Hover Animation
// ==============================

const buttons = document.querySelectorAll(
    ".black-btn, .text-btn"
);


buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.letterSpacing = "2px";

    });


    button.addEventListener("mouseleave", () => {

        button.style.letterSpacing = "normal";

    });

});




// ==============================
// Scroll To Top Button
// ==============================

const topButton = document.createElement("button");

topButton.className = "top-button";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);



window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});



topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




// ==============================
// Additional Button Styling
// ==============================

const buttonStyle = document.createElement("style");


buttonStyle.innerHTML = `

.nav-links a.active {
    color: #777;
    border-bottom: 1px solid #111;
    padding-bottom: 5px;
}


.top-button {

    position: fixed;

    right: 30px;

    bottom: 30px;

    width: 50px;

    height: 50px;

    border-radius: 50%;

    border: none;

    background: #111;

    color: white;

    font-size: 22px;

    cursor: pointer;

    opacity: 0;

    transform: translateY(20px);

    transition: 0.4s;

    z-index: 999;

}


.top-button.show {

    opacity: 1;

    transform: translateY(0);

}


.top-button:hover {

    background: #333;

}


.reveal {

    opacity: 0;

    transform: translateY(40px);

    transition: 1s ease;

}


.reveal.show {

    opacity: 1;

    transform: translateY(0);

}

`;

document.head.appendChild(buttonStyle);