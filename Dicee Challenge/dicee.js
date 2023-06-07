var diceNumber1 = Math.floor((Math.random() * 6)) + 1;
var diceNumber2 = Math.floor((Math.random() * 6)) + 1;

var diceImg1 = "./images/dice" + diceNumber1 + ".png";
var diceImg2 = "./images/dice" + diceNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImg1);
document.querySelector(".img2").setAttribute("src", diceImg2);

var whoTheWinner = "";

function diceRoll() {
    if (diceNumber1 > diceNumber2) {
        whoTheWinner = "Player 1 win!";
    } else if (diceNumber1 < diceNumber2) {
        whoTheWinner = "Player 2 win!";
    } else {
        whoTheWinner = "Draw";
    }
    return whoTheWinner;
}

document.querySelector(".container h1").textContent = diceRoll();