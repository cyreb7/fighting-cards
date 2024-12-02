import Player from "./Player";

export default class Game {
  public player1: Player;
  public player2: Player;

  constructor() {
    this.player1 = new Player("Player One");
    this.player2 = new Player("Player Two");
  }

  run(): boolean {
    console.log("Game started");
    return true;
  }
}
