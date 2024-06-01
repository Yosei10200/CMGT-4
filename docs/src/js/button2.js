import { Actor, Color, Engine, Vector } from "excalibur";
import { Resources } from "./resources";
import { gameOver } from "./gameover";
import { Playing } from "./playing";

export class Button2 extends Actor {

    constructor() {
        super({ width: 200, height: 100 })
    }
    onInitialize() {
        this.graphics.use(Resources.start.toSprite())
        this.pos = new Vector(770, 400)
        this.scale = new Vector(1, 1)
        this.on("pointerup", () => this.scene?.engine.changeScene3())
    }

}
