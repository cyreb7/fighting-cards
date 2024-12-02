import assert from "node:assert/strict";
import { describe, it } from "node:test";

import Card from "./Card";

describe("Public methods", () => {
  it("Name", () => {
    const card = new Card("Test Card");
    assert.equal(card.name, "Test Card");
  });
});
