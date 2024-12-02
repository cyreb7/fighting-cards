import CardDefinition from "./CardDefinition";
import cardList from "./cardList.json";

interface CardList {
  [index: string]: CardDefinition;
}

export default class Card {
  public definition: CardDefinition;

  constructor(cardListId: string) {
    const list: CardList = cardList;
    this.definition = list[cardListId];
  }
}
