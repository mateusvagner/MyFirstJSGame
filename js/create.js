function create() {
    console.log("Create called.")

    //--Game--//
    mainBackground = this.add.image(400, 300, 'sky');
    pointer = this.input.mousePointer
    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //    spaceKey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    //--Hero--//
    hero = this.physics.add.image(400, 400, 'hero');
    hero.setBounce(0.5, 0.5); //colisao elastica
    hero.setCollideWorldBounds(true);
    addMyHero(hero);

    //--Emmitter--//
    particles = this.add.particles('fire');

    //--Weapons--//
    waterGun = this.add.group({
        classType: Weapon,
        maxSize: maxAmmo,
        runChildUpdate: true
    });

    //--Enemies--//


    //--Colliders--//
    //    collider = this.physics.add.collider(object1, object2);
}

