var Hero = new Phaser.Class({
    
    Extends: Phaser.Physics.Arcade.Image,
    
    initialize: function Hero(scene) {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'hero');
        console.log("Hero Initialized")
        
        this.setPosition(400, 400);
        this.setActive(true);
        this.setVisible(true);
        
        this.movementVelocity = initialHeroVelocity;
        this.velocityX = 0;
        this.velocityY = 0;
        
        this.isMoving = false;
        
        this.targetX = 0;
        this.targetY = 0;
        
        this.angleToTarget = () => {

            const actualXPosition = this.x;
            const actualYPosition = this.y;

            const deltaX = this.targetX - actualXPosition;
            const deltaY = this.targetY - actualYPosition;

            const angle = Math.atan2(deltaY, deltaX);

            return angle;
        }
    },
    
    moveToTarget: function () {
        this.velocityX = this.movementVelocity * Math.cos(this.angleToTarget());
        this.velocityY = this.movementVelocity * Math.sin(this.angleToTarget());
        this.setVelocity(this.velocityX, this.velocityY);
        
        this.isMoving = true;
        console.log("I'm moving!!")
    },
    
    stopIfOnTarget: function () {
        
        const isOnTarget = this.x >= this.targetX - 1 && this.x <= this.targetX + 1 && this.y >= this.targetY - 1 && this.y <= this.targetY + 1
        
        if (isOnTarget) {
            this.setVelocity(0, 0)
            this.isMoving = false;

            console.log("Movement completed.");
        }
    },
    
    update: function (time, delta) {
//        this.y -= this.velocityY * delta * -1 / 2000;
//        this.x += this.velocityX * delta / 2000;
    } 
});