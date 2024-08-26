const questions = [
    {
        question: "What Kind of System Are you using?",
        options: ["PC", "Laptop", "Server", "Enterprise System"]
    },
    {
        question: "What is the YOUR use case?",
        options: ["Daily Driver", "Server Sided", "Enterprise User", "For Your Grandparents"]
    },
    {
        question: "What is your Knowledge Level of linux?",
        options: ["Previously used linux before", " I've used linux a fair bit", "Not So Much", "What is linux"]
    },
    {
        question: "Preinstalled Requisites?",
        options: ["Out of the box Experience", "No I want full control", "Partial Downloads", "Dont care"]
    },
    {
        question: "Who Are You?",
        options: ["Student", "Working Professional", "Tinkerer", "Grandpa"]
    },
    {
        question: "What is the Age of your system?",
        options: ["Brand New - 2 (or) 3 Years old", "4 to 7 years Old", "7<= Years Old", "Dinosaur"]
    },
    {
        question: "What Operating System Did You Use Before?",
        options: ["Windows", "Linux", "MacOS", "Temple OS"]
    },
    {
        question: "What is your Systems CPU Architecture?",
        options: ["x86_64 / AMD64", "x32 / AMD32", "ARM64", "I HAVE NO IDEA WHAT THAT MEANS"]
    },
    {
        question: "How much RAM does Your System Have?",
        options: ["x1-4 Gigs", "8 Gigs", "16 Gigs or above", "I HAVE NO IDEA WHAT THAT MEANS"]
    },
    {
        question: "What is your computer knowledge level?",
        options: ["I know my stuff", "I know my fair bit", "I know enough to run my laptop", "I don't know much"]
    },
    {
        question: "Privacy Oriented?",
        options: ["Yes", "No", "Its good if its there, don't care much", "What's that?"]
    },
    {
        question: "Coding or other Intensive Processes?",
        options: ["Yes", "Not Really", "No", "For Checking Mails and Excel"]
    },
    {
        question: "Gaming?",
        options: ["Yes", "Light Gaming", "Indie Games", "No"]
    },
    {
        question: "Often Updates Required?",
        options: ["Yes", "Don't Care that much", "Nah", "Maybe?"]
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let chosen = 0;

let col = "#00ADB5";
let selcol = "#56DECA";

// let col = "#F2613F";
// let selcol = "#9B3922";

// let col = "#FF204E";
// let selcol = "#A0153E";

function displayQuestion() {
    const ques_cont = document.getElementById("question");
    ques_cont.innerHTML = questions[currentQuestionIndex].question;

    const op_cont1 = document.getElementById("op1");
    op_cont1.innerHTML = (questions[currentQuestionIndex].options)[0];

    const op_cont2 = document.getElementById("op2")
    op_cont2.innerHTML = (questions[currentQuestionIndex].options)[1]

    const op_cont3 = document.getElementById("op3")
    op_cont3.innerHTML = (questions[currentQuestionIndex].options)[2]

    const op_cont4 = document.getElementById("op4")
    op_cont4.innerHTML = (questions[currentQuestionIndex].options)[3]
}
option_1 = document.getElementById("op1");
option_1.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_1.style.backgroundColor = selcol;
    option_1.classList.add("selected");
    chosen+=1
});

option_2 = document.getElementById("op2");
option_2.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_2.style.backgroundColor = selcol;
    option_2.classList.add("selected");
    chosen+=1;
    console.log(chosen);
});

option_3 = document.getElementById("op3");
option_3.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_3.style.backgroundColor = selcol;
    option_3.classList.add("selected");
    chosen+=1;
});

option_4 = document.getElementById("op4");
option_4.addEventListener("click", function(){
    if (chosen===1){
        sel = document.getElementsByClassName("selected")[0]
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
    }
    option_4.style.backgroundColor = selcol;
    option_4.classList.add("selected");
    chosen+=1;
});
function nextQuestion() {
    sel = document.getElementsByClassName("selected")[0]
    if (sel) {
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
        userAnswers.push(sel.value);
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            // Handle end of questions
            displayResults();
        } else {
            displayQuestion();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function prevQuestion() {
    sel = document.getElementsByClassName("selected")[0]
    if(sel){
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        userAnswers.pop()
        chosen-=1;
    }
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function displayResults() {
    // What the fuck do i do after here
    // i gotchu bro

    // userAnswers

    let scores = {
        'ubuntu': 0,
        'debian': 0,
        'manjaro': 0,
        'pop': 0,
        'kde': 0,
        'fedora': 0,
        'mint': 0,
        'arch': 0,
        'opensuse':0,
        'kali':0,
        'mukthi':0
    };
// 10 - goated
// 5 - good
// 1 - helps
// 0 - neutral
// -1 - bad

/*
Arch Linux
Manjaro
Fedora
Linux Mint
POP OS!
Ubuntu
Debian
KDE Plasma
Kali Linux
openSUSE
MUKTI OS
*/

/* It is called the algorithm that takes human given weight and essentially after a
null level of operations and pre processing with vanilla compilers, with a very
well renowned data structure called hash set, this is known for fast operation times and look up times
just having O(n) (this was a joke lol)

trust me, no ML got hand on this on 14 questions (pls hire us we do good stuff)*/
    //Q1
    if(userAnswers[0] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 7;
        scores['ubuntu'] += 9;
        scores['kde'] += 10;
        scores['kali'] += 8;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[0] === 2){
        scores['arch'] += 5;
        scores['manjaro'] += 5;
        scores['fedora'] += 5;
        scores['mint'] += 4;
        scores['ubuntu'] += 4;
        scores['kde'] += 5;
        scores['kali'] += 4;
        scores['mukthi'] += 3;
        scores['debian'] += 5;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    else if(userAnswers[0] === 3){
        scores['arch'] += 6;
        scores['manjaro'] += 6;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 5;
    }
    else if(userAnswers[0] === 4){
        scores['arch'] += 0;
        scores['manjaro'] += 5;
        scores['fedora'] += 8;
        scores['mint'] += 8;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 6;
        scores['pop'] += 8;
    }
    console.log(scores);
    //Q2
    if(userAnswers[1] === 1){
        scores['arch'] += 6;
        scores['manjaro'] += 6;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 5;
    }
    else if(userAnswers[1] === 2){
        scores['arch'] += 5;
        scores['manjaro'] += 5;
        scores['fedora'] += 5;
        scores['mint'] += 4;
        scores['ubuntu'] += 4;
        scores['kde'] += 5;
        scores['kali'] += 4;
        scores['mukthi'] += 3;
        scores['debian'] += 5;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    else if(userAnswers[1] === 3){
        scores['arch'] += 0;
        scores['manjaro'] += 5;
        scores['fedora'] += 8;
        scores['mint'] += 8;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 6;
        scores['pop'] += 8;
    }
    else if(userAnswers[1] === 4){
        scores['arch'] += -1;
        scores['manjaro'] += 7;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 0;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    console.log(scores);
    //Q3
    if(userAnswers[2] === 1){
        scores['arch'] += 6;
        scores['manjaro'] += 6;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 4;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[2] === 2){
        scores['arch'] += 3;
        scores['manjaro'] += 6;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 4;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[2] === 3){
        scores['arch'] += 3;
        scores['manjaro'] += 3;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 5;
        scores['kali'] += 3;
        scores['mukthi'] += 2;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 10;
    }
    else if(userAnswers[2] === 4){
        scores['arch'] += -1;
        scores['manjaro'] += 7;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 0;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    console.log(scores);
    //Q4
    if(userAnswers[3] === 1){
        scores['arch'] += -5;
        scores['manjaro'] += 5;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 5;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    else if(userAnswers[3] === 2){
        scores['arch'] += 10;
        scores['manjaro'] += 7;
        scores['fedora'] += 6;
        scores['mint'] += 5;
        scores['ubuntu'] += 3;
        scores['kde'] += 7;
        scores['kali'] += 7;
        scores['mukthi'] += 3;
        scores['debian'] += 3;
        scores['opensuse'] += 6;
        scores['pop'] += 5;
    }
    else if(userAnswers[3] === 3){
        scores['arch'] += 2;
        scores['manjaro'] += 8;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 5;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    else if(userAnswers[3] === 4){
        scores['arch'] += 10;
        scores['manjaro'] += 7;
        scores['fedora'] += 6;
        scores['mint'] += 5;
        scores['ubuntu'] += 3;
        scores['kde'] += 7;
        scores['kali'] += 7;
        scores['mukthi'] += 3;
        scores['debian'] += 3;
        scores['opensuse'] += 6;
        scores['pop'] += 5;
    }
    console.log(scores);
    //Q5
    if(userAnswers[4] === 1){
        scores['arch'] += 2;
        scores['manjaro'] += 7;
        scores['fedora'] += 6;
        scores['mint'] += 5;
        scores['ubuntu'] += 3;
        scores['kde'] += 7;
        scores['kali'] += 7;
        scores['mukthi'] += Infinity;
        scores['debian'] += 3;
        scores['opensuse'] += 6;
        scores['pop'] += 5;
    }
    else if(userAnswers[4] === 2){
        scores['arch'] += 0;
        scores['manjaro'] += 5;
        scores['fedora'] += 8;
        scores['mint'] += 8;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 6;
        scores['pop'] += 8;
    }
    else if(userAnswers[4] === 3){
        scores['arch'] += 10;
        scores['manjaro'] += 5;
        scores['fedora'] += 6;
        scores['mint'] += 6;
        scores['ubuntu'] += 5;
        scores['kde'] += 7;
        scores['kali'] += 10;
        scores['mukthi'] += 0;
        scores['debian'] += 5;
        scores['opensuse'] += 6;
        scores['pop'] += 4;
    }
    else if(userAnswers[4] === 4){
        scores['arch'] += -1;
        scores['manjaro'] += 7;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 0;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    console.log(scores);
    //Q6
    if(userAnswers[5] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 7;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[5] === 2){
        scores['arch'] += 5;
        scores['manjaro'] += 8;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 5;
        scores['mukthi'] += 3;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 7;
    }
    else if(userAnswers[5] === 3){
        scores['arch'] += 2;
        scores['manjaro'] += 6;
        scores['fedora'] += 6;
        scores['mint'] += 8;
        scores['ubuntu'] += 7;
        scores['kde'] += 4;
        scores['kali'] += 2;
        scores['mukthi'] += 0;
        scores['debian'] += 8;
        scores['opensuse'] += 4;
        scores['pop'] += 4;
    }
    else if(userAnswers[5] === 4){
        scores['arch'] += -1;
        scores['manjaro'] += 3;
        scores['fedora'] += 4;
        scores['mint'] += 5;
        scores['ubuntu'] += 10;
        scores['kde'] += 3;
        scores['kali'] += -1;
        scores['mukthi'] += -1;
        scores['debian'] += 10;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    console.log(scores);
    //Q7
    if(userAnswers[6] === 1){
        scores['arch'] += -1;
        scores['manjaro'] += 3;
        scores['fedora'] += 5;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 5;
        scores['kali'] += 0;
        scores['mukthi'] += -1;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 8;
    }
    else if(userAnswers[6] === 2){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10; 
    }
    else if(userAnswers[6] === 3){
        scores['arch'] += -3;
        scores['manjaro'] += 5;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 5;
        scores['kali'] += 0;
        scores['mukthi'] += -1;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 8;
    }
    else if(userAnswers[6] === 4){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10; 
    }
    console.log(scores);
    //Q8
    if(userAnswers[7] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10; 
    }
    else if(userAnswers[7] === 2){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10; 
    }
    else if(userAnswers[7] === 3){
        scores['arch'] += 0;
        scores['manjaro'] += 0;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 0;
        scores['kali'] += 10;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 0; 
    }
    else if(userAnswers[7] === 4){
        scores['arch'] += 0;
        scores['manjaro'] += 8;
        scores['fedora'] += 7;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 6;
        scores['kali'] += 0;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 7;
    }
    console.log(scores);
    //Q9
    if(userAnswers[8] === 1){
        scores['arch'] += 5;
        scores['manjaro'] += 7;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 5;
        scores['kde'] += 10;
        scores['kali'] += 15;
        scores['mukthi'] += 3;
        scores['debian'] += 10;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    else if(userAnswers[8] === 2){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 7;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[8] === 3){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 7;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[8] === 4){
        scores['arch'] += -1;
        scores['manjaro'] += 7;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 7;
        scores['kde'] += 10;
        scores['kali'] += 15;
        scores['mukthi'] += 0;
        scores['debian'] += 7;
        scores['opensuse'] += 8;
        scores['pop'] += 5;
    }
    console.log(scores);
    //Q10
    if(userAnswers[9] === 1){
        scores['arch'] += 15;
        scores['manjaro'] += 7;
        scores['fedora'] += 7;
        scores['mint'] += 7;
        scores['ubuntu'] += 7;
        scores['kde'] += 7;
        scores['kali'] += 10;
        scores['mukthi'] += 0;
        scores['debian'] += 7;
        scores['opensuse'] += 7;
        scores['pop'] += 6; 
    }
    else if(userAnswers[9] === 2){
        scores['arch'] += 3;
        scores['manjaro'] += 8;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 3;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 7;
    }
    else if(userAnswers[9] === 3){
        scores['arch'] += 3;
        scores['manjaro'] += 8;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 3;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 7;
    }
    else if(userAnswers[9] === 4){
        scores['arch'] += 0;
        scores['manjaro'] += 3;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 3;
        scores['kali'] += 0;
        scores['mukthi'] += 3;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 7;
    }
    console.log(scores);
    //Q11
    if(userAnswers[10] === 1){
        scores['arch'] += 6;
        scores['manjaro'] += 7;
        scores['fedora'] += 7;
        scores['mint'] += 8;
        scores['ubuntu'] += 8;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 8;
        scores['opensuse'] += 8;
        scores['pop'] += 7;
    }
    else if(userAnswers[10] === 2){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[10] === 3){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 8;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[10] === 4){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    console.log(scores);
    //Q12
    if(userAnswers[11] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[11] === 2){
        scores['arch'] += 3;
        scores['manjaro'] += 8;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 7;
    }
    else if(userAnswers[11] === 3){
        scores['arch'] += 5;
        scores['manjaro'] += 8;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 7;
    }
    else if(userAnswers[11] === 4){
        scores['arch'] += 0;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    console.log(scores);
    //Q13
    if(userAnswers[12] === 1){
        scores['arch'] += 0;
        scores['manjaro'] += 7;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    else if(userAnswers[12] === 2){
        scores['arch'] += 0;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[12] === 3){
        scores['arch'] += 0;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[12] === 4){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    console.log(scores);
    //Q14
    if(userAnswers[13] === 1){
        scores['arch'] += 0;
        scores['manjaro'] += 4;
        scores['fedora'] += 4;
        scores['mint'] += 5;
        scores['ubuntu'] += 5;
        scores['kde'] += 5;
        scores['kali'] += 3;
        scores['mukthi'] += -1;
        scores['debian'] += 5;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    else if(userAnswers[13] === 2){
        scores['arch'] += 5;
        scores['manjaro'] += 5;
        scores['fedora'] += 5;
        scores['mint'] += 5;
        scores['ubuntu'] += 5;
        scores['kde'] += 5;
        scores['kali'] += 5;
        scores['mukthi'] += 0;
        scores['debian'] += 5;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    else if(userAnswers[13] === 3){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    else if(userAnswers[13] === 4){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    console.log(scores);
    console.log(userAnswers);
    let recommendedDistro = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    console.log(recommendedDistro);
    return recommendedDistro;

}

// Display the first question
displayQuestion();

// Attach event listeners to buttons
const prevQuestionButton = document.getElementById("prev-question");
const nextQuestionButton = document.getElementById("next-question");
prevQuestionButton.addEventListener("click", prevQuestion);
nextQuestionButton.addEventListener("click", nextQuestion);
/*HEYYYYYYY YOU ACTUALLY READ TILL THE END!!! */
/*Here's a fun joke for u ;) */
/*
My family poops big. Maybe it's genetic, maybe it's our diet, but everyone births giant logs of crap. If anyone has laid a mega-poop, you know that sometimes it won't flush. It lays across the hole in the bottom of the bowl and the vortex of draining water merely gives it a spin as it mocks you.
Growing up, this was a common enough occurrence that our family had a poop knife. It was an old rusty kitchen knife that hung on a nail in the laundry room, only to be used for that purpose. It was normal to walk through the hallway and have someone call out "hey, can you get me the poop knife"? I thought it was standard kit. You have your plunger, your toilet brush, and your poop knife. Fast forward to 22. It's been a day or two between poops and I'm over at my friend's house. My friend was the local dealer and always had 'guests' over, because you can't buy weed without sitting on your ass and sampling it for an hour. I excuse myself and lay a gigantic turd. I look down and see that it's a sideways one, so I crack the door and call out for my friend. He arrives and I ask him for his poop knife. "My what?" Your poop knife, I say. I need to use it. Please. "Wtf is a poop knife?" Obviously he has one, but maybe he calls it by a more delicate name. A fecal cleaver? A Dung divider? A guano glaive? I explain what it is I want and why I want it. He starts giggling. Then laughing. Then lots of people start laughing. It turns out, the music stopped and everyone heard my pleas through the door. It also turns out that none of them had poop knives, it was just my fucked up family with their fucked up bowels. FML. I told this to my wife last night, who was amused and horrified at the same time. It turns out that she did not know what a poop knife was and had been using the old rusty knife hanging in the utility closet as a basic utility knife. Thankfully she didn't cook with it, but used it to open Amazon boxes. She will be getting her own utility knife now
*/
