{
    const playGame = function (playerInput){
    clearMessages();

    const playerMove = getMoveName(playerInput),
        randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = getMoveName(randomNumber);

    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);
    
    const gameResult = displayResult(computerMove,playerMove);
    }
    
    const buttonRock = function (){
        playGame(1)
    }
    const buttonPaper = function (){
        playGame(2)
    }
    const buttonScissors = function (){
        playGame(3)
    }

    document.getElementById('play-rock').addEventListener('click', buttonRock);
    document.getElementById('play-paper').addEventListener('click', buttonPaper);
    document.getElementById('play-scissors').addEventListener('click', buttonScissors);
}