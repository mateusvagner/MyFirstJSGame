function update() {
    
    //  only move when you click
    if (this.input.mousePointer.isDown) {
        //  400 is the speed it will move towards the mouse
        console.log("mousePointer isDown");
        logo.setVelocity(100, 0);

//        //  if it's overlapping the mouse, don't move any more
//        if (Phaser.Rectangle.contains(logo.body, this.input.x, this.input.y)) {
//            logo.setVelocity(0, 0);
//        }
    } else {
        logo.setVelocity(0, 0);
    }
    
}