import Card from "../cards/Card";
import Game from "../Game";
import Player from "../Player";
import Output from "./Output";

export default class TerminalOut extends Output {
  public render(game: Game): void {
    console.log(`***It's this player's turn: ${game.activePlayer.name}***`);
    this.renderPlayer(game.player1);
    console.log();
    this.renderPlayer(game.player2);
  }

  private renderPlayer(player: Player): void {
    console.group("Player:");
    console.log(player.name);
    console.groupEnd();

    this.renderHand(player.cards);
    this.renderDeck(player.deck);
  }

  private renderHand(hand: Array<Card>): void {
    console.group("Hand:");
    for (const card of hand) {
      console.log(`* ${card.name}`);
    }
    console.groupEnd();
  }

  private renderDeck(deck: Array<Card>): void {
    console.group("Deck:");
    for (const card of deck) {
      console.log(`* ${card.name}`);
    }
    console.groupEnd();
  }
}
