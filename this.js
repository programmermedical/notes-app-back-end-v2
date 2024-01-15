/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class Game {
  constructor(name) {
    this._name = name;
  }

  loadingStuff() {
    console.log('Memuat komponen permainan ...');
    console.log(`Permainan ${this._name} akan segera dimulai!`);
  }
}

const gamePlayer = (game) => ({
  play: game.loadingStuff,
});

const runner = () => {
  const game = new Game('Catur');
  gamePlayer(game).play();
};

runner();
