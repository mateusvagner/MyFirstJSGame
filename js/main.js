//--Hero--//
var hero;
var initialHeroVelocity = 50;

//--Emitter--//
var particles;

//--Weapons--//
var waterGun;
var gunSpeedMultiplier = 3;
var maxAmmo = 5;
var lastFired = 0;

//--Enemies--//


//--Physics and Movements Variables--//
var collider;


//--Game--//
var config = configuration();
var game = new Phaser.Game(config);

var mainBackground;
var pointer;
var spaceBar;