/**
 * Author: Joel Jonassi
 * nº 19698 ESIPL
 * March 2022
 */
//const scoreText = document.getElementById(".score");
/**const scorePlayer1 = document.querySelector(".score"){

}*/

const initialDice = "../assets/img/diceGame/dice-1.png";


let currentDice = document.getElementById("idDice1");

/*const dice3 = document.getElementById("idDice3");
const dice4 = document.getElementById("idDice4");
const dice5 = document.getElementById("idDice5");
const dice6 = document.getElementById("idDice6");*/


const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");
const roolDiceButton = document.querySelector(".btn--roll");



// Score total
let totalPlayer1 = document.querySelector("#score--0");
let totalPlayer2 = document.querySelector("#score--1");

//Current Score
let currentScore1 = document.querySelector("#current--0");
let currentScore2 = document.querySelector("#current--1");





let score = 0;
//onsole.log(totalPlayer1.textContent);
let controlPoints = 1;


resetGame();

// Reiniciar o Jogo
newGameButton.addEventListener("click", function() {
        resetGame();
})


//soma pontos no jogo  e mostra dados aleatórios.
roolDiceButton.addEventListener("click", function(){

    randomNumber = randomNumberDice();
    let roolVariavel = roolDice(randomNumber);
    controlPoints = swicthPlayerDice(roolVariavel);
    

    if(controlPoints != 2){
        if(roolVariavel != initialDice){
           score = sumarizePoint(score, randomNumber);
            currentScore1.textContent =score;
        }
        else{
           score = zeroPoint();
            currentScore1.textContent = score;
         }
        } else if(controlPoints != 1) {
       
        if(roolVariavel != initialDice){
            score = sumarizePoint(score, randomNumber);
            currentScore2.textContent = score;
        }
        else{
            score = zeroPoint();
            currentScore2.textContent = score;
         }
    }
})

 // Hold dos pontos
 holdButton.addEventListener("click", function(){
    if(currentScore1.textContent != 0 && controlPoints == 1){
        let aux = Number(totalPlayer1.textContent);
        aux  += Number(currentScore1.textContent);
        totalPlayer1.textContent = aux;
        console.log(aux );
        score = zeroPoint();
        currentScore1.textContent = zeroPoint();
        controlPoints = 2;
        winnnerPlayer();
        
    }
    else if(currentScore2.textContent != 0 && controlPoints == 2){
        aux = Number(totalPlayer2.textContent);
        aux += Number(currentScore2.textContent);
        totalPlayer2.textContent = aux;
        currentScore2.textContent = score;
        score  = zeroPoint(); 
        controlPoints = 1;
        winnnerPlayer();
    }

 })

/**
 * Função que soma pontos
 * @param {*} score 
 * @returns 
 */
function sumarizePoint(score, diceValue){
    return score += diceValue;
}

/**
 * Coloca os pontos a zeros
 * 
 * @param {*} score 
 * @returns 
 */
function zeroPoint(){
    return score = 0;
}


/**
 * Números aleatórios
 * @returns Dice
 */
function randomNumberDice(){
    var randomNumber = Math.floor(Math.random() * 6); 

    switch(randomNumber){
        case 0:
            return 1;
        case 1: 
            return 2;
        case 2: 
            return 3;
        case 3: 
            return 4;
        case 4: 
            return 5;
        case 5: 
            return 6;
    }    
}

/**
 * Imagens aleatórias
 * @param {*} randomNumber 
 * @returns 
 */
function roolDice(randomNumber){
    initialDice.src = "../assets/img/diceGame/dice-1.png";
    switch(randomNumber){
        case 1: return currentDice.src = "../assets/img/diceGame/dice-1.png";
        case 2: return currentDice.src = "../assets/img/diceGame/dice-2.png";
        case 3: return currentDice.src = "../assets/img/diceGame/dice-3.png";
        case 4: return currentDice.src = "../assets/img/diceGame/dice-4.png";
        case 5: return currentDice.src = "../assets/img/diceGame/dice-5.png";
        case 6: return currentDice.src = "../assets/img/diceGame/dice-6.png";

    }
}

/**
 * Muda de jogador
 * @param {Jogador 1} player1 
 * @param {Jogador 2} player2 
 * @returns 
 */
function swicthPlayerDice(dice){
    console.log(initialDice);
    console.log(dice);
    console.log(controlPoints) ;
    if (initialDice == dice && controlPoints == 1){
        changeColor(1, "#fff");
        changeColor(2, "#44058cb2");
        return 2;
    }
    else if(initialDice != dice && controlPoints == 1) {
        changeColor(1, "#44058cb2");
        changeColor(2, "#fff");
        return 1;
    }
    else if(initialDice == dice && controlPoints == 2){
        changeColor(1, "#44058cb2");
        changeColor(2, "#fff");
        return 1;
    }
    else if(initialDice != dice && controlPoints == 2){
        changeColor(1, "#fff");
        changeColor(2, "#44058cb2");
        return 2;
    }
    
}

function changeColor(id, color){
    document.getElementById(id).style.backgroundColor = color;
}
/**
 * Reinicia o jogo
 */
function resetGame(){
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    totalPlayer1.textContent = 0;
    totalPlayer2.textContent = 0;
    document.getElementById("name--0").textContent = "Player 1"
    document.getElementById("name--1").textContent = "Player 2";
}

/**
 * Função que Mostra o vencedor
 */
function winnnerPlayer(){
    if(Number(totalPlayer1.textContent) >= 100){
        document.getElementById("name--0").textContent = "Player 1 Wins";
        setTimeout(function(){
            resetGame();
       },1500);
    }
    else if(Number(totalPlayer2.textContent) >= 100){
        document.getElementById("name--1").textContent = "Player 2 Wins";
        setTimeout(function(){
            resetGame();
       },1500);

    }
}



