function update() {

    //Move Hero
    if (pointer.isDown) {
        moveToTarget(pointer, hero);
    }
    
    if (hero.isMoving) {
        checkMovementCompleted(hero);
    }
    
    //TODO ESPECIFICAR ÁREA DE ATUAÇÃO DO MOUSE. LEMBRAR DE FAZER UM CABEÇALHOONDE ALGUMAR ARMAS ESPECIAIS SERÃO HABILITADAS.,
    //chamar moveToTarget se tiver na área correta
        
}
