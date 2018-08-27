class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(0);
    console.log(gameState);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
