import { Actor, Keys, Vector, Engine, Configurable, Scene, Label, Font, Color } from "excalibur";
import { Button2 } from "./button2";

export class gameOver extends Scene {
    onInitialize() {
        this.gameover = new Label({
            text: 'Game over',
            pos: new Vector(590, 200),
            font: new Font({
                family: 'impact',
                size: 62,
                color: Color.White
            })
        });
        this.add(this.gameover)

        const button = new Button2()
        this.add(button)
    }
}