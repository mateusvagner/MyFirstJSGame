function create() {
    console.log("Create called.")
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
        speed: 100,
        scale: {
            start: 2,
            end: 0
        },
        blendMode: 'ADD'
    });


    logo = this.physics.add.image(400, 400, 'logo');
    logo.setBounce(0.5, 0.5); //colisao elastica
    logo.setCollideWorldBounds(true);
    //logo.setPosition(400, 300);    

    
    //Add movement to logo (moveTo Package)
    logo.moveTo = this.plugins.get('rexmovetoplugin').add(logo, {
        speed: 100,
        rotateToTarget: false
    })
    
  
    emitterRed.startFollow(logo);
    emitterYellow.startFollow(logo);
    
    logo2 = this.physics.add.image(400, 100, 'logo');
    logo2.setBounce(0.5, 0.5); //colisao elastica
    logo2.setCollideWorldBounds(true);
    logo2.setVelocity(0,100);
    
    this.physics.add.collider(logo, logo2);
    this.physics.add.collider(logo2, logo);

}