import assert from "node:assert/strict";
import { describe, it } from "node:test";

import Game from "./Game.ts";

describe("run()", () => {
  it("Returns true", () => {
    const game1 = new Game();
    assert.equal(game1.run(), true);
  });
});
