// ======================================
// MAFRYATA Games Engine
// ======================================

// ---------- GTA V ----------

const quizzes = {

gta:{

title:"🚗 GTA V",

questions:[

{

image:"images/gta1.webp",

question:"Как называется эта машина?",

answers:[

"Adder",

"Zentorno",

"T20"

],

correct:1

},

{

image:"images/gta2.webp",

question:"Как зовут этого персонажа?",

answers:[

"Trevor",

"Franklin",

"Michael"

],

correct:0

},

{

image:"images/gta3.webp",

question:"Как называется этот район?",

answers:[

"Vinewood",

"Sandy Shores",

"Paleto Bay"

],

correct:0

}

]

},

// ---------- Minecraft ----------

minecraft:{

title:"⛏ Minecraft",

questions:[

{

image:"images/mc1.webp",

question:"Кто изображён на картинке?",

answers:[

"Крипер",

"Зомби",

"Скелет"

],

correct:0

},

{

image:"images/mc2.webp",

question:"Как называется этот блок?",

answers:[

"Алмазная руда",

"Изумрудная руда",

"Железная руда"

],

correct:1

},

{

image:"images/mc3.webp",

question:"Что это за моб?",

answers:[

"Эндермен",

"Ведьма",

"Разбойник"

],

correct:0

}

]

},

// ---------- CS2 ----------

cs2:{

title:"🔫 Counter-Strike 2",

questions:[

{

image:"images/cs1.webp",

question:"Что изображено на картинке?",

answers:[

"AK-47",

"M4A4",

"Famas"

],

correct:0

},

{

image:"images/cs2.webp",

question:"Как называется карта?",

answers:[

"Dust II",

"Mirage",

"Inferno"

],

correct:1

},

{

image:"images/cs3.webp",

question:"Что это за пистолет?",

answers:[

"USP-S",

"Glock-18",

"P250"

],

correct:0

}

]

}

};
// ======================================
// Game Variables
// ======================================

let currentGame = "";
let currentQuestion = 0;
let score = 0;

// ======================================
// Open Quiz
// ======================================

function openQuiz(game){

    currentGame = game;
    currentQuestion = 0;
    score = 0;

    document.querySelector(".games-grid").style.display = "none";

    document.getElementById("finishScreen").style.display = "none";

    document.getElementById("quizScreen").style.display = "block";

    document.getElementById("quizTitle").textContent =
        quizzes[game].title;

    document.getElementById("finishTotal").textContent =
        quizzes[game].questions.length;

    loadQuestion();

}

// ======================================
// Load Question
// ======================================

function loadQuestion(){

    const quiz = quizzes[currentGame];

    const question = quiz.questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("totalQuestions").textContent =
        quiz.questions.length;

    document.getElementById("quizImage").src =
        question.image;

    document.getElementById("questionTitle").textContent =
        question.question;

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    question.answers.forEach((answer,index)=>{

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.onclick = ()=>checkAnswer(index);

        answers.appendChild(button);

    });

    document.getElementById("result").textContent = "";

    document.getElementById("nextButton").style.display =
        "none";

    updateProgress();

}
// ======================================
// Check Answer
// ======================================

function checkAnswer(answerIndex){

    const quiz = quizzes[currentGame];

    const question = quiz.questions[currentQuestion];

    const buttons = document.querySelectorAll("#answers button");

    buttons.forEach(button=>{

        button.disabled = true;

    });

    if(answerIndex === question.correct){

        buttons[answerIndex].classList.add("correct");

        document.getElementById("result").textContent =
            "✅ Правильный ответ!";

        score++;

    }else{

        buttons[answerIndex].classList.add("wrong");

        buttons[question.correct].classList.add("correct");

        document.getElementById("result").textContent =
            "❌ Неправильный ответ.";

    }

    document.getElementById("nextButton").style.display =
        "inline-block";

}

// ======================================
// Next Question
// ======================================

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion >= quizzes[currentGame].questions.length){

        finishQuiz();

        return;

    }

    loadQuestion();

}

// ======================================
// Progress Bar
// ======================================

function updateProgress(){

    const total = quizzes[currentGame].questions.length;

    const percent = ((currentQuestion + 1) / total) * 100;

    document.getElementById("progressFill").style.width =
        percent + "%";

}
// ======================================
// Finish Quiz
// ======================================

function finishQuiz(){

    document.getElementById("quizScreen").style.display = "none";

    document.getElementById("finishScreen").style.display = "block";

    document.getElementById("score").textContent = score;

    document.getElementById("finishTotal").textContent =
        quizzes[currentGame].questions.length;

}

// ======================================
// Restart Quiz
// ======================================

function restartQuiz(){

    currentQuestion = 0;

    score = 0;

    document.getElementById("finishScreen").style.display = "none";

    document.getElementById("quizScreen").style.display = "block";

    loadQuestion();

}

// ======================================
// Back To Games
// ======================================

function backToGames(){

    document.getElementById("quizScreen").style.display = "none";

    document.getElementById("finishScreen").style.display = "none";

    document.querySelector(".games-grid").style.display = "grid";

}

// ======================================
// Mobile Menu
// ======================================

function toggleMenu(){

    const menu = document.getElementById("navMenu");

    if(menu){

        menu.classList.toggle("active");

    }

}

document.querySelectorAll("#navMenu a").forEach(link=>{

    link.addEventListener("click",()=>{

        const menu = document.getElementById("navMenu");

        if(menu){

            menu.classList.remove("active");

        }

    });

});

// ======================================
// Animation
// ======================================

const gameCards = document.querySelectorAll(".game-card");

const gameObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});

gameCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".5s";

    gameObserver.observe(card);

});

// ======================================

console.log("MAFRYATA Games Loaded Successfully");

// ======================================