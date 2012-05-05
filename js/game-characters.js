(function(GENG){
    GENG.getGameCharacters = function(ctx) {
        var ships = new Image(),
            characters = {},
            spriteList = [],
            startx, starty;

        // Load dem sprites
        ships.src = "img/uridium-ships.gif";

        characters.player1 = new GENG.Character(
            ctx,
            32,
            32,
            [new GENG.Sprite(ships, 4, 56, 32, 32)]
        );

        startx = 4;
        starty = 56;
        for (i = 0; i < 16; i++) {
            spriteList.push(
                new GENG.Sprite(ships, startx + (36 * i), starty, 32, 32)
            );
        }
        characters.player1.newState('base', spriteList, 3);

        spriteList = [];
        startx = 544;
        starty = 246;
        for (i = 0; i < 16; i++) {
            spriteList.push(
                new GENG.Sprite(ships, startx - (36 * i), starty, 32, 32)
            );
        }
        characters.player1.newState('base-left', spriteList, 3);

        return characters;
    };

    window.GENG = GENG;
})(window.GENG || {});