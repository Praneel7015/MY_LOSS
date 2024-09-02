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
        options: ["x86_64 / AMD64", "x32 / AMD32", "ARM64", "WHAT'S THAT?"]
    },
    {
        question: "How much RAM does Your System Have?",
        options: ["x1-4 Gigs", "8 Gigs", "16 Gigs or above", "WHAT'S THAT"]
    },
    {
        question: "What is your computer knowledge level?",
        options: ["I know my stuff", "I know my fair bit", "I know enough to run my laptop", "I don't know much"]
    },
    {
        question: "Privacy Oriented?",
        options: ["Yes", "No", "Its good if its there, don't care much", "WHAT'S THAT?"]
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

const features = {
        "arch":["Frequent Updates","Full Access","Lightweight"],
        "manjaro":["Compatability","User Experience","Flexible"],
        "fedora":["Hardware support","Own App Store","Out of the Box"],
        "mint":["Out of the Box","Compatability","Frequent Updates"],
        "pop":["for STEM","Driver support","Regular Updates"],
        "ubuntu":["Compatability","Out of the Box","Great Support"],
        "debian":["Live CD option","Regular Updates","Out of the Box"],
        "kde_plasma":["Architecture compatability","Great Support","Frequent Updates"],
        "kali":["Cyber profs.","Stable Downloads","Out of the Box"],
        "opensuse":["Stable Release","Driver support","Accessible to all"],
        "mukthi":["for Students","Stable Downloads","Compatability"]
}

let currentQuestionIndex = 0;
let userAnswers = [];
let chosen = 0;

// let col = "#00ADB5";
// let selcol = "#56DECA";

// let col = "#F2613F";
// let selcol = "#9B3922";

// let col = "#FF204E";
// let selcol = "#A0153E";

// let col = "#59A8B3";
// let selcol = "#317B91";
let col = "#911104";
// let selcol = "#730C02";
let selcol = "#560602";

let lose = ["cry-emo","melt-emo","sad-emo","angry-emo"];
let win = ["party-emo","yawn-emo","smirk-emo","flex-emo"];


winning = document.getElementById("mukthi_win");
second = document.getElementById("arch_lose");
winning.classList.add("top-pod");
second.classList.add("top-pod");


const inter1 = setInterval(openWin,12000)
const inter2 = setInterval(openSec,8000)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function openWin(){
    let popup = document.getElementById("cloud_win");
    let emo = document.getElementById(win[0]);
    popup.classList.add('open_cloud');
    await sleep(200);
    emo.classList.add('appear');
    await sleep(5000);
    emo.classList.remove('appear');
    await sleep(200);
    popup.classList.remove('open_cloud');
    const elementToMove = win.splice(0, 1)[0]; 
    win.splice(3, 0, elementToMove); 

}

async function openSec(){
    let popup = document.getElementById("cloud_sec");
    let emo = document.getElementById(lose[0]);
    popup.classList.add('open_cloud_sec');
    await sleep(200);
    emo.classList.add('appear');
    await sleep(5000);
    emo.classList.remove('appear');
    await sleep(200);
    popup.classList.remove('open_cloud_sec');
    const elementToMove = lose.splice(0, 1)[0]; 
    lose.splice(3, 0, elementToMove); 
}


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
    sel = document.getElementsByClassName("selected")[0];
    
    if (sel) {
        sel.style.backgroundColor = col;
        sel.classList.remove("selected");
        chosen-=1;
        userAnswers.push(sel.value);
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            // Handle end of questions
           console.log("ok")
        } else {
            displayQuestion();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
    res = displayResults(currentQuestionIndex);
    console.dir(res);
    winning_distro = Object.keys(res).reduce((a, b) => res[a] > res[b] ? a : b);
    res[winning_distro]=0;
    second_distro = Object.keys(res).reduce((a, b) => res[a] > res[b] ? a : b);
    res[second_distro]=0;
    third_distro = Object.keys(res).reduce((a, b) => res[a] > res[b] ? a : b);
    winning.classList.remove("top-pod");
    second.classList.remove("top-pod");

    console.log(winning_distro)
    winning = document.getElementById(`${winning_distro}_win`);
    second = document.getElementById(`${second_distro}_lose`);
    third = document.getElementById(`${third_distro}_third`);
    console.log(winning);
    winning.classList.add("top-pod");
    second.classList.add("top-pod");

    if (currentQuestionIndex >= questions.length) {
        // Handle end of questions
        winning.classList.remove("top-pod");
        second.classList.remove("top-pod");
        clearInterval(inter1);
        clearInterval(inter2);
        
        moveImagesToPodium(winning_distro,second_distro,third_distro)
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

function displayResults(index) {
    // What the fuck do i do after here
    // i gotchu bro

    // userAnswers

    let scores = {
        'ubuntu': 0,
        'debian': 0,
        'manjaro': 0,
        'pop': 0,
        'kde_plasma': 0,
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
kde Plasma
Kali Linux
openSUSE
MUKTI OS
*/

/* It is called the algorithm that takes human given weight and essentially after a
null level of operations and pre processing with vanilla compilers, with a very
well renowned data structure called hash map, that is known for fast operation times and look up times
just having O(n) (this was a joke lol)

trust me, no ML got hand on this on 14 questions (pls hire us we do good stuff)*/
    

    //Q1
    if(userAnswers[0] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 7;
        scores['ubuntu'] += 9;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 7;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 6;
        scores['pop'] += 8;
    }
    if (index==1){
        return scores;
    }
    //Q2
    if(userAnswers[1] === 1){
        scores['arch'] += 6;
        scores['manjaro'] += 6;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
        scores['kali'] += 0;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    if (index==2){
        return scores;
    }
    //Q3
    if(userAnswers[2] === 1){
        scores['arch'] += 6;
        scores['manjaro'] += 6;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 7;
        scores['kali'] += 0;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    
    if (index==3){
        return scores;
    }
    //Q4
    if(userAnswers[3] === 1){
        scores['arch'] += -5;
        scores['manjaro'] += 5;
        scores['fedora'] += 8;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 7;
        scores['kali'] += 7;
        scores['mukthi'] += 3;
        scores['debian'] += 3;
        scores['opensuse'] += 6;
        scores['pop'] += 5;
    }
    
    if (index==4){
        return scores;
    }
    //Q5
    if(userAnswers[4] === 1){
        scores['arch'] += 2;
        scores['manjaro'] += 7;
        scores['fedora'] += 6;
        scores['mint'] += 5;
        scores['ubuntu'] += 3;
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
        scores['kali'] += 0;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 10;
    }
    if (index==5){
        return scores;
    }
    //Q6
    if(userAnswers[5] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 4;
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
        scores['kde_plasma'] += 3;
        scores['kali'] += -1;
        scores['mukthi'] += -1;
        scores['debian'] += 10;
        scores['opensuse'] += 5;
        scores['pop'] += 5;
    }
    if (index==6){
        return scores;
    }
    //Q7
    if(userAnswers[6] === 1){
        scores['arch'] += -1;
        scores['manjaro'] += 3;
        scores['fedora'] += 5;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10; 
    }
    if (index==7){
        return scores;
    }
    //Q8
    if(userAnswers[7] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 0;
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
        scores['kde_plasma'] += 6;
        scores['kali'] += 0;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 8;
        scores['pop'] += 7;
    }
    if (index==8){
        return scores;
    }
    //Q9
    if(userAnswers[8] === 1){
        scores['arch'] += 5;
        scores['manjaro'] += 7;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 5;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
        scores['kali'] += 15;
        scores['mukthi'] += 0;
        scores['debian'] += 7;
        scores['opensuse'] += 8;
        scores['pop'] += 5;
    }
    if (index==9){
        return scores;
    }
    //Q10
    if(userAnswers[9] === 1){
        scores['arch'] += 15;
        scores['manjaro'] += 7;
        scores['fedora'] += 7;
        scores['mint'] += 7;
        scores['ubuntu'] += 7;
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 3;
        scores['kali'] += 0;
        scores['mukthi'] += 3;
        scores['debian'] += 10;
        scores['opensuse'] += 7;
        scores['pop'] += 7;
    }
    if (index==10){
        return scores;
    }
    //Q11
    if(userAnswers[10] === 1){
        scores['arch'] += 6;
        scores['manjaro'] += 7;
        scores['fedora'] += 7;
        scores['mint'] += 8;
        scores['ubuntu'] += 8;
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    if (index==11){
        return scores;
    }
    //Q12
    if(userAnswers[11] === 1){
        scores['arch'] += 10;
        scores['manjaro'] += 10;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 10;
        scores['kali'] += 3;
        scores['mukthi'] += 0;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    if (index==12){
        return scores;
    }
    //Q13
    if(userAnswers[12] === 1){
        scores['arch'] += 0;
        scores['manjaro'] += 7;
        scores['fedora'] += 10;
        scores['mint'] += 10;
        scores['ubuntu'] += 10;
        scores['kde_plasma'] += 7;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 10;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }
    if (index==13){
        return scores;
    }
    //Q14
    if(userAnswers[13] === 1){
        scores['arch'] += 0;
        scores['manjaro'] += 4;
        scores['fedora'] += 4;
        scores['mint'] += 5;
        scores['ubuntu'] += 5;
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 5;
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
        scores['kde_plasma'] += 10;
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
        scores['kde_plasma'] += 10;
        scores['kali'] += 10;
        scores['mukthi'] += 5;
        scores['debian'] += 10;
        scores['opensuse'] += 10;
        scores['pop'] += 10;
    }

    return scores;

}

// Display the first question
displayQuestion();

// Attach event listeners to buttons
const prevQuestionButton = document.getElementById("prev-question");
const nextQuestionButton = document.getElementById("next-question");
prevQuestionButton.addEventListener("click", prevQuestion);
nextQuestionButton.addEventListener("click", nextQuestion);


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function moveImagesToPodium(winning,second,third) {
    const image1 = document.getElementById(`${winning}_use`);
    const image2 = document.getElementById(`${second}_use`);
    const image3 = document.getElementById(`${third}_use`);

    const quizContainer = document.getElementById('main');
    const podiumContainer = document.getElementById('podium-container');
    const podium = document.getElementById('podium');
    const pod1 = document.getElementById("first-podium");
    const pod2 = document.getElementById("second-podium");
    const pod3 = document.getElementById("third-podium");

    document.getElementById("winspot").innerHTML = capitalize(`${winning}`)
    document.getElementById("secspot").innerHTML = capitalize(`${second}`)
    document.getElementById("lastspot").innerHTML = capitalize(`${third}`)
    pod1.classList.add("podgrowclass1");
    pod2.classList.add("podgrowclass2");
    pod3.classList.add("podgrowclass3");

    image1.style.visibility="visible";
    image2.style.visibility="visible";
    image3.style.visibility="visible";

    pod1pos = pod1.getBoundingClientRect();
    pod2pos = pod2.getBoundingClientRect();
    pod3pos = pod3.getBoundingClientRect();
    console.log(pod1pos)
    console.log(pod2pos)
    console.log(pod3pos)
    image1.classList.add('transitioning');
    image2.classList.add('transitioning');
    image3.classList.add('transitioning');
    image1Rect = image1.getBoundingClientRect();
    image2Rect = image2.getBoundingClientRect();
    image3Rect = image3.getBoundingClientRect();

    quizContainer.style.visibility = 'hidden';
    podiumContainer.style.visibility = 'visible';
    image1.style.transform = `translate(${pod1pos.left-image1Rect.left+pod1pos.width/2-5}px, ${pod1pos.top-image1Rect.top-50}px)`;
    image1.style.zIndex = 5;
    image1.style.height = "80px";
    image1.style.width = "80px";

    image2.style.transform = `translate(${pod2pos.left-image2Rect.left+pod2pos.width/2-5}px, ${pod2pos.top-image2Rect.top-10}px)`;
    image2.style.zIndex = 5;
    image2.style.height = "80px";
    image2.style.width = "80px";
  
    image3.style.transform = `translate(${pod3pos.left-image3Rect.left+pod3pos.width/2-5}px, ${pod3pos.top-image3Rect.top+25}px)`;
    image3.style.zIndex = 5;
    image3.style.height = "80px";
    image3.style.width = "80px";

    document.getElementsByClassName("linehold")[0].classList.add("linegrow1")
    document.getElementsByClassName("linehold")[1].classList.add("linegrow2")
    document.getElementsByClassName("linehold")[2].classList.add("linegrow3")
    document.getElementsByClassName("linehold")[3].classList.add("linegrow1")
    document.getElementsByClassName("linehold")[4].classList.add("linegrow2")
    document.getElementsByClassName("linehold")[5].classList.add("linegrow3")
    document.getElementsByClassName("linehold")[6].classList.add("linegrow1")
    document.getElementsByClassName("linehold")[7].classList.add("linegrow2")
    document.getElementsByClassName("linehold")[8].classList.add("linegrow3")

    document.getElementsByClassName("description")[0].classList.add("desc_anim")
    document.getElementsByClassName("description")[1].classList.add("desc_anim")
    document.getElementsByClassName("description")[2].classList.add("desc_anim")
    document.getElementsByClassName("description")[3].classList.add("desc_anim")
    document.getElementsByClassName("description")[4].classList.add("desc_anim")
    document.getElementsByClassName("description")[5].classList.add("desc_anim")
    document.getElementsByClassName("description")[6].classList.add("desc_anim")
    document.getElementsByClassName("description")[7].classList.add("desc_anim")
    document.getElementsByClassName("description")[8].classList.add("desc_anim")

    document.getElementsByClassName("line1")[0].classList.add("line1_anim")
    document.getElementsByClassName("line2")[0].classList.add("line2_anim")
    document.getElementsByClassName("line3")[0].classList.add("line3_anim")
    document.getElementsByClassName("line4")[0].classList.add("line4_anim")
    document.getElementsByClassName("line5")[0].classList.add("line5_anim")
    document.getElementsByClassName("line6")[0].classList.add("line6_anim")
    document.getElementsByClassName("line7")[0].classList.add("line7_anim")
    document.getElementsByClassName("line8")[0].classList.add("line8_anim")
    document.getElementsByClassName("line9")[0].classList.add("line9_anim")

    document.getElementById("des1").innerHTML = features[`${winning}`][0]
    document.getElementById("des2").innerHTML = features[`${winning}`][1]
    document.getElementById("des3").innerHTML = features[`${winning}`][2]
    document.getElementById("des4").innerHTML = features[`${second}`][0]
    document.getElementById("des5").innerHTML = features[`${second}`][1]
    document.getElementById("des6").innerHTML = features[`${second}`][2]
    document.getElementById("des7").innerHTML = features[`${third}`][0]
    document.getElementById("des8").innerHTML = features[`${third}`][1]
    document.getElementById("des9").innerHTML = features[`${third}`][2]


  }
  

  
