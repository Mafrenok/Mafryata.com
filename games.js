// ===============================
// MAFRYATA QUIZ ENGINE
// ===============================

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

const games = {

gta: shuffle([
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
]),

minecraft: shuffle([
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
]),

cs2: shuffle([
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
])

};

let currentGame = null;
let currentQuestion = 0;
let score = 0;

function startGame(game){

currentGame = game;
currentQuestion = 0;
score = 0;

document.querySelector(".games-section").style.display="none";
document.getElementById("quizScreen").style.display="block";

document.getElementById("gameTitle").innerHTML =
game==="gta" ? "🚗 GTA V" :
game==="minecraft" ? "⛏ Minecraft" :
"🔫 Counter-Strike 2";

loadQuestion();

}

function loadQuestion(){

const q = games[currentGame][currentQuestion];

document.getElementById("quizImage").src = q.image;

document.getElementById("questionText").innerHTML = q.question;

document.getElementById("questionCounter").innerHTML =
`Вопрос ${currentQuestion+1} из ${games[currentGame].length}`;

document.getElementById("progressFill").style.width =
((currentQuestion+1)/games[currentGame].length*100)+"%";

const answers = document.getElementById("answers");

answers.innerHTML="";

q.answers.forEach((answer,index)=>{

const button=document.createElement("button");

button.innerHTML=answer;

button.onclick=()=>checkAnswer(index);

answers.appendChild(button);

});

document.getElementById("nextButton").style.display="none";

}

function checkAnswer(index){

const q=games[currentGame][currentQuestion];

const buttons=document.querySelectorAll("#answers button");

buttons.forEach(button=>button.disabled=true);

if(index===q.correct){

score++;

buttons[index].style.background="#19c37d";

}else{

buttons[index].style.background="#ff4d4f";

buttons[q.correct].style.background="#19c37d";

}

document.getElementById("nextButton").style.display="inline-block";

}

document.getElementById("nextButton").onclick=function(){

currentQuestion++;

if(currentQuestion>=games[currentGame].length){

document.getElementById("quizScreen").style.display="none";

document.getElementById("finishScreen").style.display="block";

document.getElementById("finalScore").innerHTML=
score+" / "+games[currentGame].length;
return;

}

loadQuestion();

}
function restartGame() {

    games[currentGame] = shuffle(games[currentGame]);

    currentQuestion = 0;
    score = 0;

    document.getElementById("finishScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";

    loadQuestion();

}
function backToMenu() {

    document.getElementById("finishScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "none";

    document.querySelector(".games-section").style.display = "block";

    currentGame = null;
    currentQuestion = 0;
    score = 0;

}