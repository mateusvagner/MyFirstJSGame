function create() {
    console.log("Create called.")
    
    //Backgorund
    var mainBackground = this.add.image(400, 300, 'sky');
    
    //Hero Variables Assignments
    hero = this.physics.add.image(400, 400, 'logo');
    
    
    
      
     //Emmitters
//    var particlesRed = this.add.particles('red');
//    var particlesYellow = this.add.particles('yellow');
//
//    var emitterRed = particlesRed.createEmitter({
//        speed: 250,
//        scale: {
//            start: 1,
//            end: 0
//        },
//        blendMode: 'ADD'
//    });
//
//    var emitterYellow = particlesYellow.createEmitter({
//        speed: 50,
//        scale: {
//            start: 2,
//            end: 0
//        },
//        blendMode: 'ADD'
//    });

    
    //hero = this.physics.add.image(400, 400, 'logo');
    hero.setBounce(0.5, 0.5); //colisao elastica
    hero.setCollideWorldBounds(true); 
    makeHero(hero);
  
//    emitterRed.startFollow(logo);
//    emitterYellow.startFollow(logo);

    //Colliders
//    collider = this.physics.add.collider(object1, object2);

}