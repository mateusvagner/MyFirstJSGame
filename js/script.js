(function () {

    var config = configuration();

    var game = new Phaser.Game(config);
    
/*    function preload() {
        this.load.setBaseURL('http://labs.phaser.io/');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
        this.load.image('yellow', 'assets/particles/yellow.png');
    }

    function create() {
        this.add.image(400, 300, 'sky');

        var logo = this.physics.add.image(400, 300, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        var particlesRed = this.add.particles('red');
        var particlesYellow = this.add.particles('yellow');

        var emitter = particlesYellow.createEmitter({
            speed: 100,
            scale: {
                start: 1,
                end: 0
            },
            blendMode: 'ADD'
        });

        emitter.startFollow(logo);
    }*/

}());