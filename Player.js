class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    let i;
    let bet_number = 0;
    //console.log(gameState);
    console.log(gameState.players[5].name);

    var mycards = gameState.players[5].hole_cards;
    mycardsJson = JSON.stringify(mycards);
    console.log(mycardsJson);

    for (i = 0; i < gameState.players.length(); i++) {
      if (gameState.players[i].bet > bet && gameState.players[i] != gameState.players[5]) {
        bet_number = gameState.players[i].bet +1;
      }
    }
    bet(bet_number);
    if (mycards[0].rank === mycards[1].rank) {
      console.log('bbbbrrrrrreeeeeeeekkkkkkkooooookokokokokokokok');
    } else {
      console.log('exceptioooooooooooooooon');
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
