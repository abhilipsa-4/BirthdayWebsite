const exploreButton = document.getElementById("exploreButton");
const skyScreen = document.getElementById("skyScreen");

const welcomeScreen = document.getElementById("welcomeScreen");
const introScreen = document.getElementById("introScreen");

const startButton = document.getElementById("startButton");

const clickSound = document.getElementById("clickSound");

let openedStars = 0;
const totalStars = 10;

let finaleReady = false;

const terminalText = `> Booting relationship.exe...

Loading shared memories...
████████████████ 100%

Checking compatibility...
✓ Best friends
✓ Partners
✓ Still choosing each other

Running diagnostics...

Known Bugs:
• Misses you too much
• Needs hugs to function
• Long-distance latency unresolved

Status:
Running perfectly.

Compiled with ❤️ by Abhilipsa`;

function typeTerminal(text, element, speed = 30){

    let i = 0;

    element.textContent = "";

    function type(){

        if(i < text.length){

            element.textContent += text.charAt(i);

            i++;

            setTimeout(type, speed);

        }else{

            document.getElementById("continueBtn").style.display = "block";

        }

    }

    type();

}

function playClick() {

    clickSound.currentTime = 0;
    clickSound.play();

}

startButton.onclick = function(){

    playClick();

    welcomeScreen.classList.add("fadeOut");

    setTimeout(function(){

        welcomeScreen.style.display = "none";

        introScreen.classList.remove("hidden");
        introScreen.classList.add("fadeIn");

    },600);

}

exploreButton.onclick = function(){

    playClick();

    introScreen.classList.add("fadeOut");

    setTimeout(function(){

        introScreen.style.display="none";

        skyScreen.classList.remove("hidden");
        skyScreen.classList.add("fadeIn");

    },600);

}

function showQuiz() {

    const question = document.getElementById("quizQuestion");
    const options = document.getElementById("quizOptions");
    const feedback = document.getElementById("quizFeedback");

    feedback.innerText = "";
    options.innerHTML = "";

    question.innerText =
        `Question ${currentQuestion + 1} of ${quizData.length}

${quizData[currentQuestion].question}`;

    quizData[currentQuestion].options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "quizOption";
        button.innerText = option;

        button.onclick = function () {

            playClick();

            if (index === quizData[currentQuestion].answer) {

                feedback.innerText = "✅ Correct!";
                quizScore++;

            } else {

                feedback.innerText = "❌ Wrong!";

            }

            setTimeout(() => {

                currentQuestion++;

                if (currentQuestion < quizData.length) {

                    showQuiz();

                } else {

                    question.innerText = "🎉 Quiz Complete!";

                    options.innerHTML = "";

                    feedback.innerHTML =
                        `You scored <b>${quizScore}/${quizData.length}</b> ❤️`;

                }

            }, 1000);

        };

        options.appendChild(button);

    });

}


const skyContainer = document.getElementById("skyContainer");
const popup = document.getElementById("memoryPopup");
const closePopup = document.getElementById("closePopup");

const starData = [

{
    type: "message",

    title: "The First Star ⭐",

    text: `Every universe has to begin somewhere.

            I guess ours began in the CV universe.

            I'm really glad it did. ❤️`,

    x: 18,

    y: 18
},

{
    type: "photo",

    title: "📚 The First Study Date",

    text: "",

    image: "study-date.jpg",

    x: 34,

    y: 62
},

{
    type: "terminal",

    title: "",

    text: `> Running gallery_analysis.exe...

Scanning image database...

████████████████████ 100%

Analysis Complete.

Advisor Photos ████████████ 82%

Boyfriend Photos ██ 18%

Error Code:
MEMORY_404

Cause:
Insufficient Couple Photos

Suggested Fix:
Schedule immediate reunion.`,

    x: 72,
    y: 22
},

{
    type: "quiz",

    title: "🧠 How Well Do You Know Your Girlfriend?",

    x: 58,

    y: 75
},

{
    type: "photo",

    title: "🎨 My Favorite Artist",

    text: `Breaking News!<br>

Apparently, I was important enough to become someone's artwork.<br>

10/10 artist.<br>

10/10 subject.<br>

(I might be a tiny bit biased.) 😌❤️`,

    image: "mermaid.jpg",

    x: 80,

    y: 52
},

{
    type: "photo",

    title: "👨‍👩‍👧‍👦 Our Family",

    image: "family.jpg",

    text: 'Authors of <i> Acceleration of Total Focusing Method using Single FPGA Hardware and Sparse Array Imaging </i>',

    x: 52,

    y: 23
},

{
    type: "letter",

    title: "💌 Open When You Miss Me",

    text: `Dear Pranav,

If you're reading this because you're missing me...
First of all...
Mission accomplished. 😌❤️
But really...
I know there will be days when the distance feels unfair.
Days when a video call doesn't feel like enough.
On those days, I hope you remember this:
There is someone, somewhere, who is endlessly proud of you.
Someone who wants to hear about your day, celebrate your wins, comfort you after the bad ones, and laugh at your terrible jokes.
No matter how far apart we are...
I'm still on your team.
Now go drink some water, eat something, and then come tell me about your day.

Love,
Abhilipsa❤️`,

    x: 42,
    y: 20
},

{
    type: "photo",

    title: "My Cute Bubu 🐻",

    image: "Cute Bubu .png",

    text: "",

    x: 83,

    y: 26

},

{
    type: "photo",

    title: "This is Pranav Joshi",

    image: "Pranav Joshi.png",

    text: "",

    x: 28,

    y: 35

},

{
    type: "photo",

    title: "Us ❤️",

    image: "Us ❤️.png",

    text: "",

    x: 50,

    y: 50

},



];


const quizData = [

    {
        question: "What is the one thing I never get tired of eating?",

        options: [
            "Fries 🍟",
            "Ice cream 🍦",
            "Biryani 🍗",
            "Chocolate 🍫"
        ],

        answer: 0
    },

    {
        question: "What is my favourite colour?",

        options: [
            "Lavender",
            "Coral",
            "Fuchsia pink",
            "Lilac"
        ],

        answer: 1
    },

    {
        question: "What am I?",

        options: [
            "Bubu",
            "Batak",
            "Mogu Mogu",
            "All of the above"
        ],

        answer: 3
    }

];

let currentQuestion = 0;
let quizScore = 0;


for(let i = 0; i < starData.length; i++){

    const star = document.createElement("div");

    star.dataset.index = i;

    star.classList.add("star");

    star.style.left = starData[i].x + "%";
    star.style.top = starData[i].y + "%";

    star.onclick = function(){

    playClick();

    const data = starData[star.dataset.index];

    document.querySelector("#memoryPopup h2").innerText = data.title;

    const popupText = document.getElementById("popupText");
    const terminal = document.getElementById("terminalText");

    const quiz = document.getElementById("quizContainer");

    const letter = document.getElementById("letterContainer");
    const envelope = document.getElementById("envelope");
    const paper = document.getElementById("letterPaper");
    const letterText = document.getElementById("letterText");

if (data.type === "terminal") {

    popupText.style.display = "none";
    terminal.style.display = "block";
    quiz.style.display = "none";

    terminal.textContent = data.text;

}
else if (data.type === "quiz") {

    popupText.style.display = "none";
    terminal.style.display = "none";
    quiz.style.display = "block";

    document.getElementById("popupImage").style.display = "none";

    currentQuestion = 0;
    quizScore = 0;

    showQuiz();

}
else if(data.type === "letter"){

    popupText.style.display = "none";
    terminal.style.display = "none";
    quiz.style.display = "none";

    document.getElementById("popupImage").style.display = "none";

    letter.style.display = "block";

    envelope.style.display = "block";
    paper.style.display = "none";

    letterText.innerHTML = data.text;

    envelope.onclick = function(){

    playClick();

    envelope.style.display = "none";

    paper.style.display = "block";
    paper.style.opacity = "0";
    paper.style.transform = "translateY(30px) scale(0.95)";

    setTimeout(() => {
        paper.style.transition = "0.5s";
        paper.style.opacity = "1";
        paper.style.transform = "translateY(0) scale(1)";
    }, 50);

};

}

else {

    terminal.style.display = "none";
    quiz.style.display = "none";

    popupText.style.display = "block";

    popupText.innerHTML = data.text;

}
    const img = document.getElementById("popupImage");

    if(data.image){

        img.src = data.image;
        img.style.display = "block";

    }else{

        img.style.display = "none";

    }

    popup.classList.remove("hidden");

    if(!star.dataset.opened){

    star.dataset.opened = "true";

    openedStars++;

}

    star.style.background = "#FFD700";
    star.style.boxShadow = "0 0 25px gold";

    if(openedStars === totalStars){

    finaleReady = true;

}

}

    skyContainer.appendChild(star);

}

closePopup.onclick = function(){

    playClick();

    popup.classList.add("hidden");

    if(finaleReady){

    finaleReady = false;

    setTimeout(() => {

        const overlay = document.getElementById("finalOverlay");

        overlay.classList.remove("hidden");

        setTimeout(() => {

        overlay.classList.add("hidden");

        const terminalPage = document.getElementById("terminalPage");
        const terminal = document.getElementById("relationshipTerminal");

        terminalPage.classList.remove("hidden");

        typeTerminal(terminalText, terminal);

}, 3500);

    }, 500);

}

    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("terminalText").style.display = "none";
    document.getElementById("popupText").style.display = "block";
    document.getElementById("letterContainer").style.display = "none";
    document.getElementById("envelope").style.display = "block";
    document.getElementById("letterPaper").style.display = "none";

    

}

// const img = document.getElementById("popupImage");

// if(data.image){

//     img.src = data.image;

//     img.style.display = "block";

// }
// else{

//     img.style.display = "none";

// }

// document.getElementById("continueBtn").onclick = function(){

//     playClick();

//     document.getElementById("terminalPage").classList.add("hidden");

//     document.getElementById("birthdayPage").classList.remove("hidden");

// };

document.getElementById("continueBtn").onclick = function(){

    playClick();

    document.getElementById("terminalPage").classList.add("hidden");

    document.getElementById("birthdayPage").classList.remove("hidden");

};

