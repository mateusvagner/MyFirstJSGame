function update() {

    //Move Hero
    if (pointer.isDown) {
        hero.moveToTarget(pointer.x, pointer.y);
    }
    
    if (hero.isMoving) {
        hero.checkMovementCompleted();
    }
    
    //TODO ESPECIFICAR ÁREA DE ATUAÇÃO DO MOUSE. LEMBRAR DE FAZER UM CABEÇALHOONDE ALGUMAR ARMAS ESPECIAIS SERÃO HABILITADAS.,
    //chamar moveToTarget se tiver na área correta
        
}
