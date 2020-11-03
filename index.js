function enterName() {
    // inserting name of player
    var name = '';
    while((name == '') || (name.length < 3)) {
        name = prompt("Enter your name: ");
    }
    document.getElementById('first-player').innerHTML = name;
    document.getElementById('second-player').innerHTML = 'computer';
    //replacing with play button
    document.getElementById('enter-name').style.cssText = 'display: none';
    document.getElementById('play-again').style.cssText = 'display: block';
    document.getElementById('play').style.cssText = ' display: block';
}

function newName() {
    document.getElementById('first-player').innerHTML = 'Player1';
    document.getElementById('second-player').innerHTML = 'Player2';
    document.getElementById('winner').style.cssText = 'display: none';
    // removing all previous child class from id="first-dice"
    var diceOne = document.getElementById('first-dice');
    while(diceOne.hasChildNodes()) {
        diceOne.removeChild(diceOne.firstChild);
    }
    // removing all previous child class from id="second-dice"
    var diceTwo = document.getElementById('second-dice');
    while(diceTwo.hasChildNodes()) {
        diceTwo.removeChild(diceTwo.firstChild);
    }
    document.getElementById('first-dice').classList.remove('dice-active');
    document.getElementById('second-dice').classList.remove('dice-active');
    document.getElementById('play-again').style.cssText = 'display:none';
    document.getElementById('enter-name').style.cssText = 'display: block';
    document.getElementById('play').style.cssText = 'display:none';
}





function diceGame() {
    document.getElementById('first-dice').classList.remove('dice-active');
    document.getElementById('second-dice').classList.remove('dice-active');
    // creating random dice number like `dice${number}
    var player = `dice${Math.ceil(Math.random() * 6)}`;
    var bot = `dice${Math.ceil(Math.random() * 6)}`;
    // all circle css class here for dice
    const center = ' circle center';
    const bottomLeft = ' circle bottom-left';
    const bottomRight = ' circle bottom-right';
    const topRight = ' circle top-right';
    const topLeft = ' circle top-left';
    const middleLeft = ' circle middle-left';
    const middleRight = ' circle middle-right';
    // removing all previous child class from id="first-dice"
    var diceOne = document.getElementById('first-dice');
    while(diceOne.hasChildNodes()) {
        diceOne.removeChild(diceOne.firstChild);
    }
    // removing all previous child class from id="second-dice"
    var diceTwo = document.getElementById('second-dice');
    while(diceTwo.hasChildNodes()) {
        diceTwo.removeChild(diceTwo.firstChild);
    }
    // creating div element first, then appending children classes to it according to 
    // dice number for player
    if(player == 'dice1') {
        var node = document.createElement('div'); node.className += center;
        document.getElementById('first-dice').appendChild(node);
    }
    else if(player == 'dice2') {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        document.getElementById('first-dice').appendChild(node1);
        document.getElementById('first-dice').appendChild(node2);
    }
    else if(player == 'dice3') {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += center;
        document.getElementById('first-dice').appendChild(node1);
        document.getElementById('first-dice').appendChild(node2);
        document.getElementById('first-dice').appendChild(node3);
    }
    else if(player == 'dice4') {
        var node1 = document.createElement('div'); node1.className += topLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += bottomLeft;
        var node4 = document.createElement('div'); node4.className += bottomRight;
        document.getElementById('first-dice').appendChild(node1);
        document.getElementById('first-dice').appendChild(node2);
        document.getElementById('first-dice').appendChild(node3);
        document.getElementById('first-dice').appendChild(node4);
    }
    else if(player == 'dice5') {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += bottomRight;
        var node4 = document.createElement('div'); node4.className += topLeft;
        var node5 = document.createElement('div'); node5.className += center;
        document.getElementById('first-dice').appendChild(node1);
        document.getElementById('first-dice').appendChild(node2);
        document.getElementById('first-dice').appendChild(node3);
        document.getElementById('first-dice').appendChild(node4);
        document.getElementById('first-dice').appendChild(node5);
    }
    else {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += bottomRight;
        var node4 = document.createElement('div'); node4.className += topLeft;
        var node5 = document.createElement('div'); node5.className += middleLeft;
        var node6 = document.createElement('div'); node6.className += middleRight;
        document.getElementById('first-dice').appendChild(node1);
        document.getElementById('first-dice').appendChild(node2);
        document.getElementById('first-dice').appendChild(node3);
        document.getElementById('first-dice').appendChild(node4);
        document.getElementById('first-dice').appendChild(node5);
        document.getElementById('first-dice').appendChild(node6);
    }
    // creating div element first, then appending children classes to it according to 
    // dice number for bot
    if(bot == 'dice1') {
        var node = document.createElement('div'); node.className += center;
        document.getElementById('second-dice').appendChild(node);
    }
    else if(bot == 'dice2') {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        document.getElementById('second-dice').appendChild(node1);
        document.getElementById('second-dice').appendChild(node2);
    }
    else if(bot == 'dice3') {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += center;
        document.getElementById('second-dice').appendChild(node1);
        document.getElementById('second-dice').appendChild(node2);
        document.getElementById('second-dice').appendChild(node3);
    }
    else if(bot == 'dice4') {
        var node1 = document.createElement('div'); node1.className += topLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += bottomLeft;
        var node4 = document.createElement('div'); node4.className += bottomRight;
        document.getElementById('second-dice').appendChild(node1);
        document.getElementById('second-dice').appendChild(node2);
        document.getElementById('second-dice').appendChild(node3);
        document.getElementById('second-dice').appendChild(node4);
    }
    else if(bot == 'dice5') {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += bottomRight;
        var node4 = document.createElement('div'); node4.className += topLeft;
        var node5 = document.createElement('div'); node5.className += center;
        document.getElementById('second-dice').appendChild(node1);
        document.getElementById('second-dice').appendChild(node2);
        document.getElementById('second-dice').appendChild(node3);
        document.getElementById('second-dice').appendChild(node4);
        document.getElementById('second-dice').appendChild(node5);
    }
    else {
        var node1 = document.createElement('div'); node1.className += bottomLeft;
        var node2 = document.createElement('div'); node2.className += topRight;
        var node3 = document.createElement('div'); node3.className += bottomRight;
        var node4 = document.createElement('div'); node4.className += topLeft;
        var node5 = document.createElement('div'); node5.className += middleLeft;
        var node6 = document.createElement('div'); node6.className += middleRight;
        document.getElementById('second-dice').appendChild(node1);
        document.getElementById('second-dice').appendChild(node2);
        document.getElementById('second-dice').appendChild(node3);
        document.getElementById('second-dice').appendChild(node4);
        document.getElementById('second-dice').appendChild(node5);
        document.getElementById('second-dice').appendChild(node6);
    }

    if(player > bot) {
        document.getElementById('first-dice').className += ' dice-active';
        document.getElementById('winner-active').classList.remove('winner');
        document.getElementById('winner').innerHTML = 'congo! <br> you won!';
        document.getElementById('winner').style.cssText  = "background-color: transparent;font-size:2rem;color:rgb(0, 182, 0);";
    }
    else if(player < bot) {
        document.getElementById('second-dice').className += ' dice-active';
        document.getElementById('winner-active').classList.remove('winner');
        document.getElementById('winner').innerHTML = 'You lose <br> try again!';
        document.getElementById('winner').style.cssText  = "background-color: transparent;font-size:2rem;color:red;";
    }
    else {
        document.getElementById('winner-active').classList.remove('winner');
        document.getElementById('winner').innerHTML = ' Try Again!';
        document.getElementById('winner').style.cssText  = " background-color: transparent;font-size:2rem;color:rgb(49, 49, 255);";
    }
}