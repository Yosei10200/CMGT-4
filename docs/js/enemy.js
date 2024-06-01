import { Actor, Keys, Vector, Engine } from "excalibur";
import { Resources } from "./resources";

export class Enemy extends Actor {
    constructor() {
        super({ width: 70, height: 70 })
    }
    onInitialize() {
        console.log("Enemy created")
        this.graphics.use(Resources.enemy.toSprite())
        this.pos = new Vector(
            700 + Math.random() * 800,
            Math.random() * 800)
        this.vel = new Vector(Math.random() * -200, 0)
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", () => this.kill())
        this.on("exitviewport", () => this.resetFish())
    }
    resetFish() {
        this.scene?.createEnemy()
    }


}