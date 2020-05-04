function update() {

    //Click and Move Hero
    var pointer = this.input.mousePointer

    //TODO ESPECIFICAR ÁREA DE ATUAÇÃO DO MOUSE. LEMBRAR DE FAZER UM CABEÇALHOONDE ALGUMAR ARMAS ESPECIAIS SERÃO HABILITADAS.
    if (pointer.isDown) {
        touchX = pointer.x;
        touchY = pointer.y;
        console.log("Move to (" + touchX + ", " + touchY + ")");

        var actualXPosition = logo.x;
        var actualYPosition = logo.y;
        var deltaX = touchX - actualXPosition;
        var deltaY = touchY - actualYPosition;
        
        console.log("From (" + actualXPosition + ", " + actualYPosition + ")");

        var moveAngle = Math.atan2(deltaY, deltaX);

        var heroVelocityX = heroVelocity * Math.cos(moveAngle);
        var heroVelocityY = heroVelocity * Math.sin(moveAngle);
    
        console.log("With velocity (" + heroVelocityX + ", " + heroVelocityY + ")")

        logo.setVelocity(heroVelocityX, heroVelocityY);
    }
    
    if (logo.x >= touchX - 0.5 && logo.x <= touchX + 0.5  && logo.y >= touchY - 0.5 && logo.y <= touchY + 0.5) {
        console.log("Movement complete.");        
        logo.setVelocity(0, 0);
    }
    
    
}
