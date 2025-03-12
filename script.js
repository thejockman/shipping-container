/* document.addEventListener("DOMContentLoaded", function() {
    let hero = document.querySelector(".hero");
    if (!hero) {
        console.error("Hero section not found! Check your HTML.");
        return;
    }

    // Parallax scrolling effect for hero section
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = `${offset * 0.5}px`;
    });

    // ✅ Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            let isValid = true;
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (name.value.trim() === "") {
                alert("Please enter your name.");
                isValid = false;
            }
            if (!email.value.includes("@") || !email.value.includes(".")) {
                alert("Please enter a valid email.");
                isValid = false;
            }
            if (message.value.trim() === "") {
                alert("Please enter your message.");
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevents form submission if invalid
            }
        });
    } else {
        console.error("Form not found! Check your HTML.");
    }

    // ✅ Section Fade-in Animation
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    revealSections(); // Run on page load
    window.addEventListener("scroll", revealSections);
});

console.log("JavaScript is working!");
*/