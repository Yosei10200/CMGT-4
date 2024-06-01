import { Actor, Keys, Vector, Engine, Configurable } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";
import { Coin } from "./point";
import { Game } from "./game";
import { Bullet } from "./bullet";
import { SmallShip } from "./smallship";

export class Spaceship extends Actor {

    Hp

    constructor() {
        super({ width: 100, height: 100 })
    }


    onInitialize(engine) {

        console.log("spaceship created")
        this.graphics.use(Resources.fish.toSprite())
        this.pos = new Vector(100, 300)
        this.vel = new Vector(0, 0)
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("exitviewport", () => this.resetSpaceship())
        this.on('collisionstart', (event) => this.hitEnemy(event))
        this.on('collisionstart', (event2) => this.hitPoint(event2))

        const miniShip = new SmallShip()
        this.addChild(miniShip)

    }


    resetSpaceship() {
        this.pos = new Vector(500, 100)
    }
    hitEnemy(event) {
        if (event.other instanceof Enemy) {
            this.scene?.removeHp(1)
            event.other.kill()
            this.scene?.createEnemy()
        }
    }
    hitPoint(event2) {
        if (event2.other instanceof Coin) {
            this.scene?.addScore(1)
            event2.other.kill()
        }
    }
    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -200
        }
        if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 200;
        }
        if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -200
        }
        if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 200;
        }
        this.vel = new Vector(xspeed, yspeed);
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            const bullet = new Bullet(this.pos.x, this.pos.y);
            engine.add(bullet)
            console.log("shoot")
        }

    }

}