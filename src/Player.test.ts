import assert from "node:assert/strict";
import { describe, it } from "node:test";

import Player from "./Player";

describe("Public methods", () => {
  it("Name", () => {
    const player = new Player("Test Name");

    assert.equal(player.name, "Test Name");
  });

  it("Deck", () => {
    const player = new Player("Test Name");
    const deck = player.deck;

    assert.equal(deck.length, 2);
    assert.equal(deck[0].definition.name, "First Card");
  });
});
