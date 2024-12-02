import Card from "./Card";

export default class Player {
  public deck: Array<Card>;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.deck = [new Card("Test Card")];
  }
}
