(function(GENG){
    GENG.Sprite = function(spriteMap, x, y, w, h) {
        this.spriteMap = spriteMap;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    };

    GENG.Sprite.prototype = {
        render: function(ctx, x, y) {
            ctx.drawImage(
                this.spriteMap,
                this.x,
                this.y,
                this.w,
                this.h,
                x,
                y,
                this.w,
                this.h
            );
        }
    };

    window.GENG = GENG;
})(window.GENG || {});
