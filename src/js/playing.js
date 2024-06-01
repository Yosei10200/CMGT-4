import { Scene } from "excalibur";
import { Spaceship } from "./spaceship";
import { Enemy } from "./enemy";
import { Coin } from "./point";
import { UI } from "./ui";
import { Background } from "./background";
import { gameOver } from "./gameover";

export class Playing extends Scene {
    score = 0;
    hitPoint = 5;
    ui;

    addScore(points) {
        this.score += points
        this.ui.updateScore(this.score)
    }
    removeHp(hp) {
        this.hitPoint -= hp
        this.ui.updateHP(this.hitPoint)
        if (this.hitPoint <= 0) {
            this.engine.changeScene2()
        }
    }
    createEnemy() {
        const enemy = new Enemy();
        this.add(enemy);
    }
    onInitialize() {
        this.ui = new UI()
        this.add(this.ui)
        const back = new Background()
        this.add(back)

        for (let i = 0; i < 1; i++) {
            const player = new Spaceship();
            this.add(player);
        }
        for (let a = 0; a < 10; a++) {
            const enemy = new Enemy();
            this.add(enemy);
        }
        for (let b = 0; b < 10; b++) {
            const coin = new Coin();
            this.add(coin)
        }

    }

}