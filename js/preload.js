function preload() {
    console.log("Preload called.")
    //Imagens dos Elementos
    this.load.setBaseURL('http://labs.phaser.io/');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('yellow', 'assets/particles/yellow.png');
    
    //moveTo Package
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexmovetoplugin.min.js';
    
    this.load.plugin('rexmovetoplugin', url, true); //moveTo
}