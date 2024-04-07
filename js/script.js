{
    function playGame(playerInput){
    clearMessages();

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier , 3: nożyce')
    console.log('Gracz wpisał: ' + playerInput);*/

    /*if(playerInput == '1'){
        playerMove = 'kamień';
    } else if(playerInput == '2'){
        playerMove = 'papier';
    } else if(playerInput == '3'){
        playerMove = 'nożyce';
    } else {
        playerMove = 'nieznany ruch';
    }*/
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    /*if(randomNumber == 1){
    computerMove = 'kamień';
    } else if(randomNumber == 2){
    computerMove = 'papier';
    } else if(randomNumber == 3){
    computerMove = 'nożyce';
    }*/

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    console.log('Ruch komputera to : ' + computerMove);

    /* if( computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Remis!');
    } else if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Remis!');
    } else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
        printMessage('Remis!');
    } else if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
    } else if( computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
    } else if( computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if( computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if( computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Komputer wygrywa!');
    } */

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