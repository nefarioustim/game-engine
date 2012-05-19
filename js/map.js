(function(GENG){
    GENG.Map = function(ctx) {
        this.ctx = ctx;
        this.tiles = [];
        return this;
    };

    GENG.Map.prototype = {
        loadTiles: function(tileImg) {

        }
    };

    window.GENG = GENG;
})(window.GENG || {});