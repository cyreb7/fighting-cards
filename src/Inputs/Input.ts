import Card from "../cards/Card";
import Player from "../Player";

export default abstract class Input {
  public abstract playCard(player: Player): Promise<Card>;
}
