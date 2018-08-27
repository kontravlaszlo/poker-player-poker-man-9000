class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(0);
    //console.log(gameState);
    console.log(gameState.Player);
    console.log(Player.name);
    console.log(Player.hole_cards.rank);
    console.log(Player.hole_cards.suit);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
