function update(time, delta) {
   
    //Move Hero
    if (pointer.isDown) {
        hero.targetX = pointer.x;
        hero.targetY = pointer.y;
//        hero.target.x = pointer.x;
//        hero.target.y = pointer.y;
        hero.moveToTarget();
    }

    if (hero.isMoving) {
        hero.stopIfOnTarget();
    }
    
    if (hero.velocityX < 0) {
        hero.flipX = false;
    } else {
        hero.flipX = true;
    }
    
    //Shoot
    if (spaceBar.isDown && time > lastFired) {
        var bullet = waterGun.get();
        if (bullet) {
            x = hero.x;
            y = hero.y;
            bullet.fire(x, y);

            lastFired = time + 50;
        }
    }
    
    //TODO ESPECIFICAR ÁREA DE ATUAÇÃO DO MOUSE. LEMBRAR DE FAZER UM CABEÇALHO ONDE ALGUMAR ARMAS ESPECIAIS SERÃO HABILITADAS.,
    //chamar moveToTarget se tiver na área correta
        
}
