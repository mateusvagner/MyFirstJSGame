function create() {
    console.log("Create called.")

    //--Game--//
    mainBackground = this.add.image(400, 300, 'sky');
    pointer = this.input.mousePointer
    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //--Hero--//
    hero = this.physics.add.group({
        classType: Hero,
        maxSize: 1,
        runChildUpdate: true
    });    
    hero = hero.get() //ideal é sem grupo
    hero.setBounce(0.5, 0.5)
    hero.setCollideWorldBounds(true);
     
    //--Weapons--//
    waterGun = this.physics.add.group({
        classType: Weapon,
        maxSize: maxAmmo,
        runChildUpdate: true
    });
    
    particles = this.add.particles('fire');

    //--Enemies--//


    //--Colliders--//
    //    collider = this.physics.add.collider(object1, object2);
}

