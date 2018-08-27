class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    let i;
    let bet_number = 1;
    let mycards = gameState.players[5].hole_cards;
    let mycardsJson = JSON.stringify(mycards);
    let communityCards = gameState.community_cards;
    let stack = gameState.players[5].stack;
    
    console.log(gameState.players[5].name);
    console.log(mycardsJson);
    console.log(communityCards);
    console.log('My money: ' + stack);

    for (let i = 0; i < 6; i++) {
      console.log("player name" + gameState.players[i].name)
      console.log("player i bet:" + gameState.players[i].bet)
      console.log("envok-e: " + gameState.players[i])
      console.log("nagyobb-e: " + gameState.players[i].bet > 0)
      if (gameState.players[i].bet > bet_number && gameState.players[i] != gameState.players[5] && gameState.players[i].bet > 0) {
        bet_number = gameState.players[i].bet +1;
        
      }
      console.log('Object tipus: ' + typeof gameState.players[i].bet);
    }

    bet(801);

    console.log("bet number: " + bet_number);
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
