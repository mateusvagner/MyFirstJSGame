//--Hero--//
var hero;
let makeHero = obj => {
    obj.velocityAbs = 50;

    obj.isMoving = false;

    obj.target = {
        x: 0,
        y: 0
    }
}

//--Enemies--//

//Physics and Movements Variables
var collider;


//Game
var config = configuration();
var game = new Phaser.Game(config);
var pointer;