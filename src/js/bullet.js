import { Actor, Keys, Vector, Engine } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";

export class Bullet extends Actor {
    constructor(x, y) {
        super({ width: 5, height: 3 })
        this.pos = new Vector(x, y)
    }

    onInitialize() {
        this.graphics.use(Resources.bullet.toSprite())
        this.vel = new Vector(300, 0)
        this.scale = new Vector(3, 2)
        this.on('collisionstart', (event) => this.hitEnemy(event))
    }
    hitEnemy(event) {
        if (event.other instanceof Enemy) {
            this.scene?.addScore(1)
            this.kill()
            event.other.kill()
            this.scene?.createEnemy()
        }
    }
}