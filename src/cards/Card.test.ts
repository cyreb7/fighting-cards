import assert from "node:assert/strict";
import { describe, it } from "node:test";

import Card from "./Card";

describe("Public methods", () => {
  it("Name", () => {
    const card = new Card("1");
    assert.equal(card.definition.name, "First Card");
  });
});
