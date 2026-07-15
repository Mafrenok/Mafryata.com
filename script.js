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

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

console.log("MAFRYATA loaded successfully.");