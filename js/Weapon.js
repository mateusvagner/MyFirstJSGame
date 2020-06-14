var Weapon = new Phaser.Class({

    Extends: Phaser.Physics.Arcade.Image,

    initialize: function Weapon(scene) {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'waterGun');
    },

    fire: function (x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);

        this.velocityX = hero.velocityX * gunSpeedMultiplier;
        this.velocityY = hero.velocityY * gunSpeedMultiplier;
        this.setVelocity(this.velocityX, this.velocityY)
        console.log("Fire!!");
        
        var emitter = particles.createEmitter({
            speed: 10,
            scale: {
                start: 0.5,
                end: 0.1
            },
            blendMode: 'ADD'
        });

        emitter.startFollow(this);

    },

    update: function (time, delta) {
//        this.y -= this.velocityY * delta * -1 / 2000;
//        this.x += this.velocityX * delta / 2000;

        const isOutOfBound = this.y < -50 || this.x < -50 || this.y > 650 || this.x > 850

        if (isOutOfBound) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
});