import Phaser from "./lib/phaser.js";
import Game  from "./scenes/game.js";

export default new Phaser.Game({
    type: Phaser.AUTO,
    with: 480,
    height: 640,
    scene: Game,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },

});