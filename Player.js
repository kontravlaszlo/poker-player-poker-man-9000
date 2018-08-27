class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    let i;
    let bet_number = 801;
    //console.log(gameState);
    console.log(gameState.players[5].name);

    var mycards = gameState.players[5].hole_cards;
    var mycardsJson = JSON.stringify(mycards);
    var communityCards = gameState.community_cards;
    var stack = gameState.players[5].stack;
    
    console.log(mycardsJson);
    console.log(communityCards);
    console.log(stack);

    for (i = 0; i < gameState.players.size; i++) {
      if (gameState.players[i].bet > bet && gameState.players[i] != gameState.players[5]) {
        bet_number = gameState.players[i].bet +1;
      }
    }
    bet(bet_number);

    console.log(bet_number);
    if (mycards[0].rank === mycards[1].rank) {
      console.log('bbbbrrrrrreeeeeeeekkkkkkkooooookokokokokokokok');
    } else {
      console.log('exceptioooooooooooooooon');
    }

    /*var communityObject = JSON.parse(communityCards);

    var cardsHandTableList = [];
    for(i=0; i<mycards.size; i++) {
      cardsHandTableList.push(mycards[i].rank);
    }  
    for(i=0; i<communityObject.size; i++) {
    cardsHandTableList.push(communityObject[i].rank);
    }
    console.log(cardsHandTableList);*/
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
