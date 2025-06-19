

const clicker = document.getElementById("btn")

const scoretext =document.getElementById("scorer")
const scoretextone =document.getElementById("scorerone")

const gameclicker = document.getElementById("resetscore")
const prevgame = document.getElementById("prev")

let change =0
let changeone= 0

let oldscore = 0

function newscr(){
    oldscore = scoretext.innerText + " | " + scoretextone.innerText;
    prevgame.innerText=oldscore
    scoretext.innerText=0
    scoretextone.innerText=0
    
}



function incone(){
    
    change+=1
    scoretext.innerText=change
}

function inctwo(){
    change+=2
    scoretext.innerText=change
}

function incthree(){
    change+=3
    scoretext.innerText=change
}
function inconeo(){
    
    changeone+=1
    scoretextone.innerText=changeone
}

function inctwoo(){
    changeone+=2
    scoretextone.innerText=changeone
}

function incthreeo(){
    changeone+=3
    scoretextone.innerText=changeone
}