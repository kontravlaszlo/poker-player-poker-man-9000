class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(0);
<<<<<<< HEAD
    console.log(gameState.Player);
=======
    console.log(gameState);
    console.log(Player.name);
>>>>>>> a0ab3dd01d0d3a099add1e7e5cba66922ed3b02e
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
