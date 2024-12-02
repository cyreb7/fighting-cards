import Card from "./cards/Card";

export default class Player {
  public deck: Array<Card>;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.deck = [new Card("1"), new Card("2")];
  }
}
