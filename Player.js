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
    //var mycardsJson = JSON.stringify(mycards);
    var communityCards = gameState.community_cards;
    var stack = gameState.players[5].stack;
    
    console.log(mycards);
    console.log(communityCards);
    console.log(stack);

    for (i = 0; i < gameState.players.size; i++) {
      if (gameState.players[i].bet > bet && gameState.players[i] != gameState.players[5] && gameState.players[i].bet > 0) {
        bet_number = gameState.players[i].bet +1;
      }
    }

    // TRY-CATCH for just testing
    try {
      let limit = gameState.players[5].stack;
      console.log(limit);
    }
    catch(error) {
      console.log('ERROR: ' + error);
    }


    bet(bet_number);

    console.log(bet_number);
    if (mycards[0].rank === mycards[1].rank) {
      console.log('bbbbrrrrrreeeeeeeekkkkkkkooooookokokokokokokok');
    } else {
      console.log('exceptioooooooooooooooon');
    }

    console.log(typeof communityCards);

    try {
      if (communityCards.size != 0) {
        //var communityObject = JSON.parse(communityCards);
        console.log('Ezzzzzzzzzzzzzzz: ' + communityCards);
      }


      /*var cardsHandTableList = [];
      for(i=0; i<mycards.size; i++) {
        cardsHandTableList.push(mycards[i].rank);
      }  
      for(i=0; i<communityObject.size; i++) {
      cardsHandTableList.push(communityObject[i].rank);
      }
      console.log(cardsHandTableList);*/
    } catch(err) {
      console.log(err);
    }
  }

  static showdown(gameState) {
  }

}

module.exports = Player;
