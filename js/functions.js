function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} 
	else if(argMoveId == 2){
		return 'papier';
	}
	else if(argMoveId == 3){
		return 'nożyce';
	}
	else{
	  printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
	  return 'kamień';
	}
  }
  
function displayResult(argPlayerMove, argComputerMove){
	if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
		printMessage('Wygrywasz!');
	} 
	else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
		printMessage('Wygrywasz!');
	}
	else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
		printMessage('Wygrywasz!');
	}
	else if(argPlayerMove == argComputerMove){
		printMessage('Remis.');
	}
	else {
		printMessage('Przegrywasz :(');
	}

	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');
	const playerMove = argButtonName;
	 
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('wylosowana liczba to: ' + randomNumber);
	const computerMove = getMoveName(randomNumber);

	displayResult(playerMove, computerMove);
}
