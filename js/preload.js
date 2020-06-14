function preload() {
    console.log("Preload called.")
    
    //Element Images
//    this.load.setBaseURL('http://labs.phaser.io/');

    this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
    
    //--Hero--//
    this.load.image('hero', '/assets/paulo_freire.png');

    //--Weapons--//
    this.load.image('waterGun', 'http://labs.phaser.io//assets/sprites/bullets/bullet7.png')

    //--Emmitter--//
    this.load.image('fire', 'http://labs.phaser.io/assets/particles/muzzleflash3.png');
}