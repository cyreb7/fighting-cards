import Card from "../cards/Card";
import Player from "../Player";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import Input from "./Input";

export default class TerminalIn extends Input {
  protected output: NodeJS.WriteStream;
  protected readline: readline.Interface;

  constructor() {
    super();

    this.readline = readline.createInterface({ input, output });
    this.output = output;
  }

  public playCard(player: Player): Promise<Card> {
    return this.pickCard(player.cards);
  }

  private async pickCard(cards: Card[]): Promise<Card> {
    while (true) {
      const pickedCard: string = await this.readline.question("Pick a card: ");
      const card = cards.find((c) => c.name === pickedCard);

      if (card) {
        return card;
      } else {
        output.write(`Invalid card ${pickedCard}, please try again.\n`);
      }
    }
  }
}
