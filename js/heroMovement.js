function checkMovementCompleted(obj) {
    if (obj.x >= obj.target.x - 1 && obj.x <= obj.target.x + 1 && 
        obj.y >= obj.target.y - 1 && obj.y <= obj.target.y + 1) {
                        
        obj.setVelocity(0, 0);
        obj.isMoving = false;
        
        console.log("Movement completed.");
    }
}

function moveToTarget(pointer, obj) {

    obj.target.x = pointer.x;
    obj.target.y = pointer.y;
    
    const actualXPosition = obj.x;
    const actualYPosition = obj.y;
    
    const deltaX = obj.target.x - actualXPosition;
    const deltaY = obj.target.y - actualYPosition;

    const moveAngle = Math.atan2(deltaY, deltaX);

    const velocityX = obj.velocityAbs * Math.cos(moveAngle);
    const velocityY = obj.velocityAbs * Math.sin(moveAngle);

    obj.setVelocity(velocityX, velocityY);
    obj.isMoving = true;

    
    console.log("Move from (" + Math.round(actualXPosition) + ", " + Math.round(actualYPosition) + ")");
    console.log("To (" + Math.round(obj.target.x) + ", " + Math.round(obj.target.y) + ")");
    console.log("With velocity (" + Math.round(velocityX) + ", " + Math.round(velocityY) + ")")
}
