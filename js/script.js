
const text = "Data Analyst | Power BI Developer | SQL Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener("load", () => {
    typeWriter();
});
// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
// ===== Mobile Menu =====

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ===== Test Theme Button =====

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

/* =========================================================
   SKILL PROGRESS ANIMATION
========================================================= */


const progressBars =
document.querySelectorAll(
    ".progress-bar"
);



const progressObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const width =
            entry.target.dataset.width;



            entry.target.style.width =
            width;



            progressObserver.unobserve(
                entry.target
            );


        }


    });


},
{

    threshold:.5

});





progressBars.forEach(bar=>{


    progressObserver.observe(
        bar
    );


});
