import Game from "../Game";

export default abstract class Output {
  public abstract render(game: Game): void;
}
