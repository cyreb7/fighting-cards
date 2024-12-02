import Game from "../Game";

export default abstract class Output {
  protected game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public abstract render(): void;
}
