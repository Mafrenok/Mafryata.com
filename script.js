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
// =======================
// GTA QUIZ
// =======================

const gtaQuestions = [
{
image:"images/gta1.jpg",
question:"Как называется эта машина?",
answers:["Zentorno","Adder","Turismo R"],
correct:1
},
{
image:"images/gta2.jpg",
question:"Как называется этот транспорт?",
answers:["Deluxo","Oppressor Mk II","Sparrow"],
correct:1
},
{
image:"images/gta3.jpg",
question:"Как называется эта машина?",
answers:["Sultan RS","Kuruma (Бронированная)","Buffalo STX"],
correct:1
},
{
image:"images/gta4.jpg",
question:"Как называется эта машина?",
answers:["Vigilante","Scramjet","Toreador"],
correct:1
},
{
image:"images/gta5.jpg",
question:"Как называется эта машина?",
answers:["Stromberg","Toreador","Deluxo"],
correct:1
}
];

let gtaIndex = 0;
let gtaScore = 0;

function shuffle(array){

for(let i=array.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

}

shuffle(gtaQuestions);

loadGTA();

function loadGTA(){

document.getElementById("questionNumber").innerHTML=gtaIndex+1;

document.getElementById("gtaImage").src=gtaQuestions[gtaIndex].image;

document.getElementById("questionTitle").innerHTML=gtaQuestions[gtaIndex].question;

let buttons=document.getElementsByClassName("answer");

for(let i=0;i<3;i++){

buttons[i].innerHTML=gtaQuestions[gtaIndex].answers[i];

buttons[i].disabled=false;

}

document.getElementById("result").innerHTML="";

document.getElementById("nextButton").style.display="none";

}
function answer(index){

    let buttons=document.getElementsByClassName("answer");

    for(let i=0;i<buttons.length;i++){
        buttons[i].disabled=true;
    }

    if(index===gtaQuestions[gtaIndex].correct){

        gtaScore++;

        document.getElementById("result").innerHTML="✅ Правильно!";
        document.getElementById("result").style.color="#00ff99";

    }else{

        document.getElementById("result").innerHTML=
        "❌ Неверно! Правильный ответ: "+
        gtaQuestions[gtaIndex].answers[gtaQuestions[gtaIndex].correct];

        document.getElementById("result").style.color="#ff5555";

    }

    document.getElementById("nextButton").style.display="block";

}

function nextQuestion(){

    gtaIndex++;

    if(gtaIndex>=gtaQuestions.length){

        document.querySelector(".quiz").style.display="none";

        document.getElementById("finish").style.display="block";

        document.getElementById("score").innerHTML=gtaScore;

        return;

    }

    loadGTA();

}

function restartGame(){

    gtaIndex=0;

    gtaScore=0;

    shuffle(gtaQuestions);

    document.querySelector(".quiz").style.display="block";

    document.getElementById("finish").style.display="none";

    loadGTA();

}
// =======================
// MINECRAFT QUIZ
// =======================

const mcQuestions=[

{
image:"images/mc1.jpg",
question:"Кто изображён на картинке?",
answers:["Тихоня","Векс","Фея"],
correct:0
},

{
image:"images/mc2.jpg",
question:"Что это за блок?",
answers:["Катализатор скалка","Скалк-сенсор","Крикун скалка"],
correct:0
},

{
image:"images/mc3.jpg",
question:"Что это за предмет?",
answers:["Яйцо призыва Нюхача","Яйцо призыва Верблюда","Яйцо призыва Черепахи"],
correct:0
},

{
image:"images/mc4.jpg",
question:"Что это за биом?",
answers:["Внешние острова Края","Крайние земли","Малые острова Края"],
correct:1
},

{
image:"images/mc5.jpg",
question:"Сколько песка душ нужно для призыва Иссушителя?",
answers:["3","4","5"],
correct:1
}

];

let mcIndex=0;

let mcScore=0;

shuffle(mcQuestions);

loadMC();

function loadMC(){

document.getElementById("mcQuestionNumber").innerHTML=mcIndex+1;

document.getElementById("mcImage").src=mcQuestions[mcIndex].image;

document.getElementById("mcQuestionTitle").innerHTML=mcQuestions[mcIndex].question;

let buttons=document.getElementsByClassName("mcAnswer");

for(let i=0;i<3;i++){

buttons[i].innerHTML=mcQuestions[mcIndex].answers[i];

buttons[i].disabled=false;

}

document.getElementById("mcResult").innerHTML="";

document.getElementById("mcNextButton").style.display="none";

}

function mcAnswer(index){

let buttons=document.getElementsByClassName("mcAnswer");

for(let i=0;i<buttons.length;i++){

buttons[i].disabled=true;

}

if(index==mcQuestions[mcIndex].correct){

mcScore++;

document.getElementById("mcResult").innerHTML="✅ Правильно!";

document.getElementById("mcResult").style.color="#00ff88";

}else{

document.getElementById("mcResult").innerHTML="❌ Неверно!";

document.getElementById("mcResult").style.color="#ff4444";

}

document.getElementById("mcNextButton").style.display="block";

}

function mcNextQuestion(){

mcIndex++;

if(mcIndex>=mcQuestions.length){

document.querySelector(".quizMC").style.display="none";

document.getElementById("mcFinish").style.display="block";

document.getElementById("mcScore").innerHTML=mcScore;

return;

}

loadMC();

}

function mcRestartGame(){

mcIndex=0;

mcScore=0;

shuffle(mcQuestions);

document.querySelector(".quizMC").style.display="block";

document.getElementById("mcFinish").style.display="none";

loadMC();

}
// =======================
// CS2 QUIZ
// =======================

const csQuestions=[

{
image:"images/cs1.jpg",
question:"Что изображено на картинке?",
answers:["AK-47","M4A1-S","Galil AR"],
correct:0
},

{
image:"images/cs2.jpg",
question:"Что изображено на картинке?",
answers:["SSG 08","AWP","SCAR-20"],
correct:1
},

{
image:"images/cs3.jpg",
question:"Что изображено на картинке?",
answers:["M4A4","M4A1-S","FAMAS"],
correct:1
},

{
image:"images/cs4.jpg",
question:"Какая это карта?",
answers:["Mirage","Dust II","Inferno"],
correct:1
},

{
image:"images/cs5.jpg",
question:"Какая это карта?",
answers:["Ancient","Nuke","Mirage"],
correct:2
}

];

let csIndex=0;

let csScore=0;

shuffle(csQuestions);

loadCS();

function loadCS(){

document.getElementById("csQuestionNumber").innerHTML=csIndex+1;

document.getElementById("csImage").src=csQuestions[csIndex].image;

document.getElementById("csQuestionTitle").innerHTML=csQuestions[csIndex].question;

let buttons=document.getElementsByClassName("csAnswer");

for(let i=0;i<3;i++){

buttons[i].innerHTML=csQuestions[csIndex].answers[i];

buttons[i].disabled=false;

}

document.getElementById("csResult").innerHTML="";

document.getElementById("csNextButton").style.display="none";

}

function csAnswer(index){

let buttons=document.getElementsByClassName("csAnswer");

for(let i=0;i<buttons.length;i++){

buttons[i].disabled=true;

}

if(index==csQuestions[csIndex].correct){

csScore++;

document.getElementById("csResult").innerHTML="✅ Правильно!";

document.getElementById("csResult").style.color="#00ff88";

}else{

document.getElementById("csResult").innerHTML="❌ Неверно!";

document.getElementById("csResult").style.color="#ff4444";

}

document.getElementById("csNextButton").style.display="block";

}

function csNextQuestion(){

csIndex++;

if(csIndex>=csQuestions.length){

document.querySelector(".quizCS").style.display="none";

document.getElementById("csFinish").style.display="block";

document.getElementById("csScore").innerHTML=csScore;

return;

}

loadCS();

}

function csRestartGame(){

csIndex=0;

csScore=0;

shuffle(csQuestions);

document.querySelector(".quizCS").style.display="block";

document.getElementById("csFinish").style.display="none";

loadCS();

}
