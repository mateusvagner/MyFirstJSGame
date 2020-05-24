//--Hero--//
var hero;
const initialHeroVelocity = 25;

//--Emitter--//
var particles;

//--Weapons--//
var waterGun;
var gunSpeed = initialHeroVelocity * 1.1;
var maxAmmo = 15;
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