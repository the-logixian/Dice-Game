



document.querySelector("button").onclick = function() {gameWinner()};

function gameWinner() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;


    var dice1 = "images/dice" + randomNumber1 + ".png";
    var dice2 = "images/dice" + randomNumber2 + ".png";

    var newImage1 = document.querySelector(".img1").setAttribute("src", dice1);
    var newImage2 = document.querySelector(".img2").setAttribute("src", dice2);

    var title = document.querySelector("h1");

    if (dice1 > dice2) {
        title.textContent = " Player 1 Win!";
    } else if (dice1 < dice2) {
        title.textContent = "Player 2 Wins!"
    } else {
        title.textContent = "Draw!"
    }

    
}
