console.log("hello");
let playerImg = document.getElementById("playerImage");
console.log(playerImg.src);
// http://127.0.0.1:5500/assets/paper.png
let computerImg = document.getElementById("computerImage");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let section = document.getElementsByTagName("section")[0];
let body = document.getElementsByTagName("body")[0];



scissors.addEventListener("click", scissorsImg);
rock.addEventListener("click", rockImg);
paper.addEventListener("click", paperImg);

let c = 0;
let p = 0;
let x =0;
let y= 0;

function scissorsImg() {
    playerImg.src = "assets/scissors.png";
    rand(1);
}
function rockImg() {
    playerImg.src = "assets/rock.png";
    rand(2);
}
function paperImg() {
    playerImg.src = "assets/paper.png";
    rand(3);
}

function rand(n) {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum == 1) {
        computerImg.src = "assets/scissors.png"
    }
    else if (randomNum == 2) {
        computerImg.src = "assets/rock.png"
    }
    else {
        computerImg.src = "assets/paper.png"
    }
    // console.log(n);
    calculate(n, randomNum);
    // console.log(n, randomNum)
}
function calculate(x, y) {
    if (x == 1 && (y == 3)) {
        p = p + 1;
        // console.log(x,y);
    }
    else if (x == 2 && (y == 1)) {
        p = p + 1;
        // console.log(x, y);
    }
    else if (x == 3 && (y == 2)) {
        p = p + 1;
        // // console.log(x, y);
    }
    else if (x == 1 && (y ==2)) {
        c = c + 1;
        // console.log(x, y);
    }
    else if (x == 2 && (y ==3)) {
        c = c + 1;
        // console.log(x, y);
    }
    else if (x == 3 && (y ==1)) {
        c = c + 1;
        // console.log(x, y);
    }
    else {
        p = p + 0;
        c = c + 0;
        // console.log(x, y);
    }
    // console.log(x,y);
    if (c == 10 || p == 10){
        section.classList.add("remove");
        if (Math.max(p,c) == p){
            body.innerHTML = `<div class="winner"><h1>You won!</h1></div>`;
        }
        else{
            body.innerHTML = `<div class="winner"><h1>Sorry, Computer won!</h1></div>`;
        }
    }
    console.log("computer code: " + y + " computer: " + c);
    console.log("player code: " + x + " player: " + p);
    computerScore.innerHTML = `<h3>Computer</h3>
    <p>${c}</p>`
    playerScore.innerHTML = `<h3>Player</h3>
    <p>${p}</p>`

}
