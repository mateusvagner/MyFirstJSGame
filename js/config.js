function configuration() {
    var config = {
        type: Phaser.AUTO,
        width: 1024,
        height: 768,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 50
                }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    };
    return config
}