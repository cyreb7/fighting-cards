import Game from "../Game";
import Player from "../Player";
import Output from "./Output";

export default class Terminal extends Output {
  constructor(game: Game) {
    super(game);
  }

  public render(): void {
    this.renderPlayer(this.game.player1);
    console.log();
    this.renderPlayer(this.game.player2);
  }

  private renderPlayer(player: Player): void {
    const deck = player.deck;
    console.group("Player:");
    console.log(player.name);
    console.groupEnd();

    console.group("Deck:");
    for (const card of deck) {
      console.log(`* ${card.definition.name}`);
    }
    console.groupEnd();
  }
}
