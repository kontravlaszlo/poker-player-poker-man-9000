class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(200);
    //console.log(gameState);
    console.log(gameState.players[5].name);

    var mycards = gameState.players[5].hole_cards
    mycards = JSON.stringify(mycards);
    console.log(mycards);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
