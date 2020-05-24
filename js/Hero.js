//Object Extensions

//--Movement Click and Move--//

let addMyHero = obj => {
    
    obj.movementVelocity = 50;

    obj.velocityX = 0;
    obj.velocityY = 0;

    obj.isMoving = false;
    
    obj.target = {
        x: 0,
        y: 0
    }

    obj.angleToTarget = () => {

        const actualXPosition = obj.x;
        const actualYPosition = obj.y;

        const deltaX = obj.target.x - actualXPosition;
        const deltaY = obj.target.y - actualYPosition;

        const angle = Math.atan2(deltaY, deltaX);

        return angle;
    }
    
    obj.moveToTarget = () => {

        obj.velocityX = obj.movementVelocity * Math.cos(obj.angleToTarget());
        obj.velocityY = obj.movementVelocity * Math.sin(obj.angleToTarget());
        
        obj.setVelocity(obj.velocityX, obj.velocityY);
        obj.isMoving = true;

        console.log("Move from (" + Math.round(obj.x) + ", " + Math.round(obj.y) + ")");
        console.log("To (" + Math.round(obj.target.x) + ", " + Math.round(obj.target.y) + ")");
        console.log("With velocity (" + Math.round(obj.velocityX) + ", " + Math.round(obj.velocityY) + ")")
    }
    
    obj.stopIfOnTarget = () => {
        
        if (obj.x >= obj.target.x - 1 && obj.x <= obj.target.x + 1 &&
            obj.y >= obj.target.y - 1 && obj.y <= obj.target.y + 1) {

            obj.setVelocity(0, 0);
            obj.isMoving = false;

            console.log("Movement completed.");
        }
    }

}