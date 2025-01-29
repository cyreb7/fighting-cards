import Card from "./cards/Card";

export default class Player {
  public deck: Array<Card>;
  public cards: Array<Card>;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.deck = [new Card("1"), new Card("2")];
    this.cards = [];
  }

  drawCard(): undefined | Card {
    if (this.deck.length === 0) {
      console.warn("No cards left to draw.");
    }

    return this.deck.shift();
  }

  playCard(cardName: string): Card {
    const card = this.cards.find((card) => card.name === cardName);

    if (!card) {
      throw new Error(`Card ${cardName} not in player ${this.name}'s hand.`);
    }

    return card;
  }

  addCardToHand(card: Card): void {
    this.cards.push(card);
  }
}
