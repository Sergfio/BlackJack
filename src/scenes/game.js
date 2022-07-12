import Phaser from "../lib/phaser.js";
import card from "../../game/card.js";

export default class Game extends Phaser.Scene
{

    constructor(){
        super('game');
    }

    card(){}

    player(){}

    dealCards(){}

    preload(){
        this.load.image('background', '/assets/background/background.png');
        this.load.image('cardDeck', '/assets/PNG/Cards/cardBack_blue2.png');
        this.load.image('card', ['/assets/images/1_of_clubs.png', '/assets/images/2_of_clubs.png', '/assets/images/3_of_clubs.png']);



    }

    create() {
        this.add.image(500, 320, 'background');
        this.add.image(500, 180, 'cardDeck').setScale(0.25).setAngle(15);
        this.add.image(495, 180, 'cardDeck').setScale(0.25).setAngle(25);
        this.add.image(485, 180, 'cardDeck').setScale(0.25).setAngle(35);

        // placeholder
        let self = this;

        this.card = this.add.image(450,400, 'card').setScale(0.1).setInteractive();
        this.input.setDraggable(this.card);


            this.dealCards = () => {
                for (let i = 0; i < 1; i++) {
                    let playerCard = new card(this);
                    playerCard.render(475 + (i * 100), 450, 'card');
                }
        };

        // create text
        this.dealText = this.add.text(275, 550, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#fff').setInteractive();

        this.dealText.on('pointerdown', function(){
            self.dealCards();
        });

        this.dealText.on('pointerover', function(){
            self.dealText.setColor('#ff69b4');
        });

        this.dealText.on('pointerout', function(){
            self.dealText.setColor('#00ffff');
        });

        this.input.on('drag', function(pointer, gameObject, dragX, dragY){
            gameObject.x = dragX;
            gameObject.y = dragY;
        });





        // create playingCards array
        const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        this.card = this.physics.add.staticGroup();
        // this.card = this.physics.add.staticGroup();

        // for(let i = 0; i < this.card.length; i++){
        //     if(window.onload == true){
        //         return this.card[i];
        //     }
        // }

        // function getCardDeck(arrayImg, path){
        //     path = path || '/assets/images/'; // default path of cards
        //     var num = Math.floor(Math.random() * arrayImg.length);
        //     var img = arrayImg[num];
        //     var imgStr = '<img src="' + path + img + '" alt = "">';
        //     write(imgStr);
        //     // document.close();
        // }

        // getCardDeck(arrayImg, '/assets/images/');



    }
    update(){}
}