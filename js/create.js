function create() {
    console.log("Create called.")
    
    //Game
    
    mainBackground = this.add.image(400, 300, 'sky');
    pointer = this.input.mousePointer
    
   //Hero 
    hero = this.physics.add.image(400, 400, 'hero');
    hero.setBounce(0.5, 0.5); //colisao elastica
    hero.setCollideWorldBounds(true); 
    addMovementFeature(hero);

    //Colliders
//    collider = this.physics.add.collider(object1, object2);

}