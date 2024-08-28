function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let ball1=document.querySelector(".debian");
let ball2=document.querySelector(".ubuntu");
let ball3=document.querySelector(".arch");
let ball4=document.querySelector(".mint");
let ball5=document.querySelector(".pop");
let ball6=document.querySelector(".fedora");
let ball7=document.querySelector(".manjaro");
let ball8=document.querySelector(".kde_plasma");
let ball9=document.querySelector(".opensuse");
let ball10=document.querySelector(".kali");
let ball11=document.querySelector(".mukti")

let main=document.getElementById("main");

setInterval(move_ball,100)

let w1 = Math.floor(Math.random()*(main.offsetWidth));
let h1 = Math.floor(Math.random()*(main.offsetHeight));
let s1 = getRndInteger(50,100);
let a1 = parseFloat(Math.random()*(2*Math.PI));

let w2 = Math.floor(Math.random()*(main.offsetWidth));
let h2 = Math.floor(Math.random()*(main.offsetHeight));
let s2 = getRndInteger(50,100);
let a2 = parseFloat(Math.random()*(2*Math.PI));

let w3 = Math.floor(Math.random()*(main.offsetWidth));
let h3 = Math.floor(Math.random()*(main.offsetHeight));
let s3 = getRndInteger(50,100);
let a3 = parseFloat(Math.random()*(2*Math.PI));

let w4 = Math.floor(Math.random()*(main.offsetWidth));
let h4 = Math.floor(Math.random()*(main.offsetHeight));
let s4 = getRndInteger(50,100);
let a4 = parseFloat(Math.random()*(2*Math.PI));

let w5 = Math.floor(Math.random()*(main.offsetWidth));
let h5 = Math.floor(Math.random()*(main.offsetHeight));
let s5 = getRndInteger(50,100);
let a5 = parseFloat(Math.random()*(2*Math.PI));

let w6 = Math.floor(Math.random()*(main.offsetWidth));
let h6 = Math.floor(Math.random()*(main.offsetHeight));
let s6 = getRndInteger(50,100);
let a6 = parseFloat(Math.random()*(2*Math.PI));

let w7 = Math.floor(Math.random()*(main.offsetWidth));
let h7 = Math.floor(Math.random()*(main.offsetHeight));
let s7 = getRndInteger(50,100);
let a7 = parseFloat(Math.random()*(2*Math.PI));

let w8 = Math.floor(Math.random()*(main.offsetWidth));
let h8 = Math.floor(Math.random()*(main.offsetHeight));
let s8 = getRndInteger(50,100);
let a8 = parseFloat(Math.random()*(2*Math.PI));

let w9 = Math.floor(Math.random()*(main.offsetWidth));
let h9 = Math.floor(Math.random()*(main.offsetHeight));
let s9 = getRndInteger(50,100);
let a9 = parseFloat(Math.random()*(2*Math.PI));

let w10 = Math.floor(Math.random()*(main.offsetWidth));
let h10 = Math.floor(Math.random()*(main.offsetHeight));
let s10 = getRndInteger(50,100);
let a10 = parseFloat(Math.random()*(2*Math.PI));

let w11 = Math.floor(Math.random()*(main.offsetWidth));
let h11 = Math.floor(Math.random()*(main.offsetHeight));
let s11 = getRndInteger(50,100);
let a11 = parseFloat(Math.random()*(2*Math.PI));


let radius = 50;


let width = main.offsetWidth-50;
let height = main.offsetHeight-50;

function mover(randwidth,randHeight,speed,angle){
    speed = speed + getRndInteger(-2,2)
    if (speed > 100){
        speed-=50
    }
    if(speed < 10){
        speed+=40
    }

    randwidth = parseInt(randwidth) + (Math.cos(angle) * speed);
    randHeight = parseInt(randHeight) + (Math.sin(angle) * speed);

    if(parseInt(randwidth) -radius< 0){
        randwidth = radius;
        angle = Math.PI - angle;
    }
    else if(parseInt(randwidth) +radius> parseInt(width)){
        randwidth = parseInt(width) - radius;
        angle = Math.PI - angle;
    }

    if(parseInt(randHeight)< radius){
        randHeight = radius;
        angle = (Math.PI * 2) - angle;
    }
    else if(parseInt(randHeight)+radius> parseInt(height)){
        randHeight = parseInt(height) - radius;
        angle = (Math.PI * 2) - angle;
    }
    if (true){
        angle = angle - (Math.random()*0.3)
    }
    return [randwidth,randHeight,speed,angle]
};

function move_ball(){
    let func_call1 = mover(w1,h1,s1,a1);
    w1 = func_call1[0];
    h1 = func_call1[1];
    s1 = func_call1[2];
    a1 = func_call1[3];
    ball1.style.left=`${w1}px`;
    ball1.style.top=`${h1}px`; 

    let func_call2 = mover(w2,h2,s2,a2);
    w2 = func_call2[0];
    h2 = func_call2[1];
    s2 = func_call2[2];
    a2 = func_call2[3];
    ball2.style.left=`${w2}px`;
    ball2.style.top=`${h2}px`;

    let func_call3 = mover(w3,h3,s3,a3);
    w3 = func_call3[0];
    h3 = func_call3[1];
    s3 = func_call3[2];
    a3 = func_call3[3];
    ball3.style.left=`${w3}px`;
    ball3.style.top=`${h3}px`;

    let func_call4 = mover(w4,h4,s4,a4);
    w4 = func_call4[0];
    h4 = func_call4[1];
    s4 = func_call4[2];
    a4 = func_call4[3];
    ball4.style.left=`${w4}px`;
    ball4.style.top=`${h4}px`;

    let func_call5 = mover(w5,h5,s5,a5);
    w5 = func_call5[0];
    h5 = func_call5[1];
    s5 = func_call5[2];
    a5 = func_call5[3];
    ball5.style.left=`${w5}px`;
    ball5.style.top=`${h5}px`;

    let func_call6 = mover(w6,h6,s6,a6);
    w6 = func_call6[0];
    h6 = func_call6[1];
    s6 = func_call6[2];
    a6 = func_call6[3];
    ball6.style.left=`${w6}px`;
    ball6.style.top=`${h6}px`;

    let func_call7 = mover(w7,h7,s7,a7);
    w7 = func_call7[0];
    h7 = func_call7[1];
    s7 = func_call7[2];
    a7 = func_call7[3];
    ball7.style.left=`${w7}px`;
    ball7.style.top=`${h7}px`;

    let func_call8 = mover(w8,h8,s8,a8);
    w8 = func_call8[0];
    h8 = func_call8[1];
    s8 = func_call8[2];
    a8 = func_call8[3];
    ball8.style.left=`${w8}px`;
    ball8.style.top=`${h8}px`;

    let func_call9 = mover(w9,h9,s9,a9);
    w9 = func_call9[0];
    h9 = func_call9[1];
    s9 = func_call9[2];
    a9 = func_call9[3];
    ball9.style.left=`${w9}px`;
    ball9.style.top=`${h9}px`;

    let func_call10 = mover(w10,h10,s10,a10);
    w10 = func_call10[0];
    h10 = func_call10[1];
    s10 = func_call10[2];
    a10 = func_call10[3];
    ball10.style.left=`${w10}px`;
    ball10.style.top=`${h10}px`;

    let func_call11 = mover(w11,h11,s11,a11);
    w11 = func_call11[0];
    h11 = func_call11[1];
    s11 = func_call11[2];
    a11 = func_call11[3];
    ball11.style.left=`${w11}px`;
    ball11.style.top=`${h11}px`;
    
}

