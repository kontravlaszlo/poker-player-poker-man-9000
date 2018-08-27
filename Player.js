class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(10);
    //console.log(gameState);
    console.log(gameState.players[4].name);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
