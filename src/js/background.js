import { Actor, Vector } from "excalibur"
import { Resources } from "./resources"

let backX = 0

export class Background extends Actor {


    constructor() {
        super({ width: 1536, height: 730, anchor: Vector.Zero, pos: new Vector(0, 0) })
    }
    onInitialize() {
        this.graphics.use(Resources.background.toSprite())
        this.scale = new Vector(1, 1)

    }
    onPostUpdate() {
        this.pos.x -= 1;
        backX += 1;
        if (backX >= 1000) {
            this.pos.x += backX
            backX = 0
        }
    }

}
