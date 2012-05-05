(function(GENG){
    GENG.CanvasDirector = function(id, refreshRate) {
        var canvas = document.getElementById(id);

        if (canvas && canvas.tagName.toUpperCase() === 'CANVAS') {
            this.id = id;
            this.el = canvas;
            this.context = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
            this.left = canvas.offsetLeft;
            this.top = canvas.offsetTop;
            this.right = this.left + this.width;
            this.bottom = this.top + this.height;
            this.offsetx = 0;
            this.offsety = 0;
            this.refreshRate = refreshRate || 10;
            this.fill = GENG.lib.rgbaString(255, 255, 255, 1);

            return this;
        } else {
            throw 'ID supplied is not a CANVAS element.';
        }
    };

    GENG.CanvasDirector.prototype = {
        setFill: function(rgbaString) {
            this.fill = rgbaString;
            return this;
        },

        origin: function(x, y) {
            this.context.translate(x, y);
            this.offsetx = -x;
            this.offsety = -y;
            return this;
        },

        clear: function() {
            this.context.fillStyle = this.fill;
            this.context.fillRect(0 + this.offsetx, 0 + this.offsety, this.width, this.height);
            return this;
        },

        run: function(frameCallback, initCallback) {
            if (initCallback) initCallback();

            this.interval = setInterval(function(context, callback){
                context.clear();
                callback();
            }, this.refreshRate, this, frameCallback);

            return this;
        }
    };

    window.GENG = GENG;
})(window.GENG || {});
