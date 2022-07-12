import Phaser from "../src/lib/phaser.js";

export default class Card extends Phaser.Scene {

    constructor(scene) {
        super('game');
        this.render = (x, y, sprite) => {
            let card = scene.add.image(x, y, sprite).setScale(0.1).setInteractive();
            scene.input.setDraggable(card);
            return card;
        };
    }
}