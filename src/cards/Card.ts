import CardDefinition from "./CardDefinition";
import cardList from "./cardList.json";

interface CardList {
  [index: string]: CardDefinition;
}

export default class Card {
  private definition: CardDefinition;

  constructor(cardListId: string) {
    const list: CardList = cardList;
    this.definition = list[cardListId];
  }

  get name(): string {
    return this.definition.name;
  }
}
