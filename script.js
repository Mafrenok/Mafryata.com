// ======================================
// MAFRYATA
// Main Script
// ======================================

// ===============================
// Mobile Menu
// ===============================

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}

// Закрытие меню после выбора пункта

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu").classList.remove("active");

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

// ===============================
// Animation Cards
// ===============================

const cards = document.querySelectorAll(".card,.news-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{

    threshold:.15

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".6s";

    observer.observe(card);

});

// ===============================
// Logo Effect
// ===============================

const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter",()=>{

    logo.style.transform="scale(1.08)";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.transform="scale(1)";

});

console.log("MAFRYATA Loaded");