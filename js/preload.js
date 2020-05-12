function preload() {
    console.log("Preload called.")
    
    //Element Images
    this.load.setBaseURL('http://labs.phaser.io/');

    this.load.image('sky', 'assets/skies/space3.png');
        
    this.load.image('hero', '/assets/sprites/poo.png');

//    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//    this.load.image('red', 'assets/particles/red.png');
//    this.load.image('yellow', 'assets/particles/yellow.png');
}