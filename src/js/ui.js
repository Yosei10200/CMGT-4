import { Actor, Keys, Vector, Engine, Label, Font, Color } from "excalibur";

export class UI extends Actor {
    scoreLabel;
    hpLabel;

    /**
     * 
     * @param {number} score 
     */
    updateScore(score) {
        this.scoreLabel.text = `Score ${score}`;
    }
    updateHP(hp) {
        this.hpLabel.text = `hp ${hp}`
    }

    onInitialize(engine) {
        this.scoreLabel = new Label({
            text: 'Score 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.White
            })
        });

        engine.add(this.scoreLabel)

        this.hpLabel = new Label({
            text: 'Hp 5',
            pos: new Vector(100, 150),
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.White
            })
        });
        engine.add(this.hpLabel)



    }
}
