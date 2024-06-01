import { Buttons, Color, Font, Keys, Label, Scene, Vector } from "excalibur";
import { Button } from "./button";

export class Intro extends Scene {
    onInitialize() {
        this.intro = new Label({
            text: 'Spaceshooter',
            pos: new Vector(590, 200),
            font: new Font({
                family: 'impact',
                size: 62,
                color: Color.White
            })
        });
        this.add(this.intro)

        const button = new Button()
        this.add(button)

    }

}