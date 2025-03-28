document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const closeBtn = document.getElementById("closeBtn");
    const navItems = document.querySelectorAll(".nav-item");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        const percentage = circle.getAttribute("data-percent");
        const progressCircle = circle.querySelector("circle:nth-child(2)");
        const strokeDashOffset = 220 - (percentage / 100) * 220;

        progressCircle.style.strokeDashoffset = strokeDashOffset;
    });
});
