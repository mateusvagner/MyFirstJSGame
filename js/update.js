function update(time, delta) {
   
    //Move Hero
    if (pointer.isDown) {
        hero.target.x = pointer.x;
        hero.target.y = pointer.y;
        hero.moveToTarget();
    }

    if (hero.isMoving) {
        hero.stopIfOnTarget();
    }
    
    //Shoot
    if (spaceBar.isDown && time > lastFired) {
        var bullet = waterGun.get();
        console.log(time)
        if (bullet) {
            x = hero.x;
            y = hero.y;
            bullet.fire(x, y);

            lastFired = time + 50;
        }
    }
    //TODO ESPECIFICAR ÁREA DE ATUAÇÃO DO MOUSE. LEMBRAR DE FAZER UM CABEÇALHOONDE ALGUMAR ARMAS ESPECIAIS SERÃO HABILITADAS.,
    //chamar moveToTarget se tiver na área correta
        
}
