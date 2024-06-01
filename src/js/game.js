import '../css/style.css'
import { Actor, Engine, Vector, Label, Color, Font, Keys } from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Spaceship } from './spaceship.js'
import { Enemy } from './enemy.js'
import { Coin } from './point.js'
import { UI } from './ui.js';
import { Bullet } from './bullet.js';
import { gameOver } from './gameover.js';
import { Background } from './background.js';
import { Intro } from './intro.js';
import { Playing } from './playing.js';


export class Game extends Engine {

    changeScene() {
        this.add('start', new Playing())
        this.goToScene('start')
    }
    changeScene2() {
        this.add('gameover', new gameOver())
        this.goToScene('gameover')
    }

    changeScene3() {
        this.add('intro', new gameOver())
        this.goToScene('intro')
    }

    constructor() {
        super({ width: 1536, height: 725 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(engine) {
        this.add('intro', new Intro())
        this.goToScene('intro')
    }
}

new Game()
