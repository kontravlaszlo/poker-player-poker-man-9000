class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(1000);
    //console.log(gameState);
    console.log(gameState.players.name);
    console.log(Player.name);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
