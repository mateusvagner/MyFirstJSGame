function update() {

    //Click and Move
    var pointer = this.input.mousePointer
    if (pointer.isDown) {
        var touchX = pointer.x;
        var touchY = pointer.y;
        logo.moveTo.moveTo(touchX, touchY);
    }
    
    if (logo.y === logo2.y) {
        console.log(logo.y);
        console.log(logo2.y);
    }


    //    this.input.on('pointerdown', function (pointer) {
    //        var touchX = pointer.x;
    //        var touchY = pointer.y;
    //        logo.moveTo.moveTo(touchX, touchY);
    //        //TODO - adicionar parar movimento caso haja colisão
    //    });
}
