{
    function playGame(playerInput){
    clearMessages();

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    console.log('Ruch komputera to : ' + computerMove);

    const gameResult = displayResult(computerMove,playerMove);
    }
    
    function buttonRock(){
        playGame(1)
        console.log('Player move- Rock');
    }

    function buttonPaper(){
        playGame(2)
        console.log('Player move- Paper');
    }

    function buttonScissors(){
        playGame(3)
        console.log('Player move- Scissors');
    }

    document.getElementById('play-rock').addEventListener('click', buttonRock);

    document.getElementById('play-paper').addEventListener('click', buttonPaper);

    document.getElementById('play-scissors').addEventListener('click', buttonScissors);

}