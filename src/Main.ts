import Game from "./Game";
import TerminalIn from "./Inputs/TerminalIn";
import TerminalOut from "./outputs/TerminalOut";

const input = new TerminalIn();
const output = new TerminalOut();
const game1 = new Game(input);

console.log("Starting...");

while (!game1.gameOver()) {
  output.render(game1);
  await game1.run();
}

console.log("Shutting down...");
