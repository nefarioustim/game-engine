(function(GENG){
    GENG.getGameMaps = function(ctx) {
        var lvl1Tiles = new Image(),
            maps = {};

        lvl1Tiles.src = "img/lvl1.gif";

        maps.level1 = new GENG.Map(ctx);
        maps.level1.loadTiles(lvl1Tiles);
    };

    window.GENG = GENG;
})(window.GENG || {});