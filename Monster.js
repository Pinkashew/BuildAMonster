class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
        this.leftHandX = this.bodyX - 110;
        this.lefthandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 95;
        this.rightHandY = this.bodyY + 20;

        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 150;

        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 150;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 20;

        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 50;

        this.accOneX = this.bodyX + 60;
        this.accOneY = this.bodyY - 70;

        this.accTwoX = this.bodyX - 50;
        this.accTwoY = this.bodyY - 95;

        this.fangX = this.bodyX;
        this.fangY = this.bodyY + 50;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.lefthandY, "monsterParts", "arm_blueA.png");
        my.sprite.leftHand.flipX = true;
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.rightHandY, "monsterParts", "arm_blueB.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenA.png");
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_red.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.accOne = this.add.sprite(this.accOneX, this.accOneY, "monsterParts", "detail_dark_ear.png");
        my.sprite.accTwo = this.add.sprite(this.accTwoX, this.accTwoY, "monsterParts", "detail_dark_antenna_small.png");
        my.sprite.accTwo.flipX = true;
        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouth_closed_teeth.png");
        my.sprite.fang.visible = false;
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        let aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        if (fKey.isDown) {
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        }
        if (sKey.isDown) {
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        }

        if (aKey.isDown) {
            this.bodyX -= 1;
            my.sprite.body.x = this.bodyX;
            my.sprite.leftHand.x = this.bodyX - 110;
            my.sprite.rightHand.x = this.bodyX + 95;
            my.sprite.leftLeg.x = this.bodyX - 50;
            my.sprite.rightLeg.x = this.bodyX + 50;
            my.sprite.eye.x = this.bodyX;
            my.sprite.mouth.x = this.bodyX;
            my.sprite.accOne.x = this.bodyX + 60;
            my.sprite.accTwo.x = this.bodyX - 50;
            my.sprite.fang.x = this.bodyX;
        }

        if (dKey.isDown) {
            this.bodyX += 1;
            my.sprite.body.x = this.bodyX;
            my.sprite.leftHand.x = this.bodyX - 110;
            my.sprite.rightHand.x = this.bodyX + 95;
            my.sprite.leftLeg.x = this.bodyX - 50;
            my.sprite.rightLeg.x = this.bodyX + 50;
            my.sprite.eye.x = this.bodyX;
            my.sprite.mouth.x = this.bodyX;
            my.sprite.accOne.x = this.bodyX + 60;
            my.sprite.accTwo.x = this.bodyX - 50;
            my.sprite.fang.x = this.bodyX;
        }
       
    }

}