import Input from "./Inputs/Input";
import Player from "./Player";

export default class Game {
  public player1: Player;
  public player2: Player;
  public activePlayer: Player;
  private input: Input;

  constructor(input: Input) {
    this.player1 = new Player("Player One");
    this.player2 = new Player("Player Two");
    this.input = input;

    this.activePlayer = this.player1;
    this.playerDrawCard(this.player1);
    this.playerDrawCard(this.player2);
  }

  async run(): Promise<void> {
    this.playerDrawCard(this.activePlayer);
    await this.input.playCard(this.activePlayer);
    this.endTurn();
  }

  public gameOver(): boolean {
    return (
      this.player1.deck.length === 0 &&
      this.player2.deck.length === 0 &&
      this.player1.cards.length === 0 &&
      this.player2.cards.length === 0
    );
  }

  private endTurn(): void {
    console.log("***End turn***");
    this.activePlayer =
      this.activePlayer === this.player1 ? this.player2 : this.player1;
  }

  private playerDrawCard(player: Player): void {
    const card = player.drawCard();

    if (card) {
      player.addCardToHand(card);
    }
  }
}
