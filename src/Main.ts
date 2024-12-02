import Game from "./Game";
import Terminal from "./outputs/Terminal";

const game1 = new Game();
game1.run();

const output = new Terminal(game1);
output.render();

console.log("Game ended");
