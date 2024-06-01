import { Actor, Keys, Vector, Engine } from "excalibur";
import { Resources } from "./resources";

export let point = 0;

export class Coin extends Actor {

    constructor() {
        super({ width: 100, height: 100 })
    }
    onInitialize() {
        console.log("Coin created")
        this.graphics.use(Resources.coin.toSprite())
        this.pos = new Vector(
            Math.random() * 800,
            Math.random() * 800)
        this.scale = new Vector(0.1, 0.1)

    }
}