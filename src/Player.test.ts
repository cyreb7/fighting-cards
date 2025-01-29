import assert from "node:assert/strict";
import { describe, it } from "node:test";

import Player from "./Player";
import Card from "./cards/Card";

describe("Public methods", () => {
  it("Name", () => {
    const player = new Player("Test Name");

    assert.equal(player.name, "Test Name");
  });

  it("Has a deck", () => {
    const player = new Player("Test Name");
    const deck = player.deck;

    assert.equal(deck.length, 2);
    assert.equal(deck[0].name, "First Card");
  });

  it("Draws cards", () => {
    const player = new Player("Test Name");

    assert.equal(player.drawCard()?.name, "First Card");

    const deck = player.deck;
    assert.equal(deck.length, 1);
    assert.equal(deck[0].name, "Second Card");

    assert.equal(player.drawCard()?.name, "Second Card");

    assert.equal(deck.length, 0);
    assert.equal(player.drawCard(), undefined);
  });

  it("Adds card to hand", () => {
    const card = new Card("1");
    const player = new Player("Test Name");

    player.addCardToHand(card);
    assert.equal(player.cards.length, 1);
    assert.equal(player.cards[0].name, "First Card");
  });
});
