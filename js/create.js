function create() {
    console.log("Create called.")
    heroVelocity = 100;
    touchX = 0;
    touchY = 0;
    
    //Backgorund
    var mainBackground = this.add.image(400, 300, 'sky');
    
     //Emmitters
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
        speed: 50,
        scale: {
            start: 2,
            end: 0
        },
        blendMode: 'ADD'
    });


    logo = this.physics.add.image(400, 400, 'logo');
    logo.setBounce(0.5, 0.5); //colisao elastica
    logo.setCollideWorldBounds(true);   
  
    emitterRed.startFollow(logo);
    emitterYellow.startFollow(logo);
    
    logo2 = this.physics.add.image(400, 100, 'logo');
    logo2.setBounce(0.5, 0.5); //colisao elastica
    logo2.setCollideWorldBounds(true);
    logo2.setVelocity(0, 10);

    //Colliders
    collider = this.physics.add.collider(logo, logo2);

}