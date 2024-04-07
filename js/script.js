{
    function playGame(playerInput){
    clearMessages();

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    const gameResult = displayResult(computerMove,playerMove);
    }
    
    function buttonRock(){
        playGame(1)
    }
    function buttonPaper(){
        playGame(2)
    }
    function buttonScissors(){
        playGame(3)
    }

    document.getElementById('play-rock').addEventListener('click', buttonRock);
    document.getElementById('play-paper').addEventListener('click', buttonPaper);
    document.getElementById('play-scissors').addEventListener('click', buttonScissors);
}