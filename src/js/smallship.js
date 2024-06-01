import { Actor, Keys, Vector } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";
import { Coin } from "./point";
import { Bullet } from "./bullet";

export class SmallShip extends Actor {
    constructor() {
        super({ width: 100, height: 100 })
    }


    onInitialize(engine) {
        this.graphics.use(Resources.ufo.toSprite())
        this.pos = new Vector(-80, 10)
        this.vel = new Vector(0, 0)
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.scale = new Vector(0.2, 0.2)

    }


}