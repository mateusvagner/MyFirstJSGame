function create() {
    this.add.image(400, 300, 'sky');

    var particlesRed = this.add.particles('red');
    var particlesYellow = this.add.particles('yellow');

    var emitterRed = particlesRed.createEmitter({
        speed: 250,
        scale: {
            start: 1,
            end: 0
        },
        blendMode: 'ADD'
    });

    var emitterYellow = particlesYellow.createEmitter({
        speed: 100,
        scale: {
            start: 2,
            end: 0
        },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 300, 'logo');

    logo.setVelocity(100, 100);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);


    emitterRed.startFollow(logo);
    emitterYellow.startFollow(logo);



}