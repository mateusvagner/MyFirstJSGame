function preload() {
    console.log("Preload called.")
    
    //Element Images
    this.load.setBaseURL('http://labs.phaser.io/');

    this.load.image('sky', 'assets/skies/space3.png');
    
    //--Hero--//
    this.load.image('hero', '/assets/sprites/poo.png');

    //--Weapons--//
    this.load.image('waterGun', '/assets/sprites/bullets/bullet7.png')

    //--Emmitter--//
    this.load.image('fire', 'assets/particles/muzzleflash3.png');
}