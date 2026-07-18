// ================================
// MAFRYATA
// by Mordirka
// ================================

// Плавное появление карточек

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>{

    observer.observe(card);

});

// Небольшой эффект логотипа

const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter",()=>{

    logo.style.transform="scale(1.08)";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.transform="scale(1)";

});

// Плавная прокрутка меню

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

console.log("MAFRYATA loaded successfully.");
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}