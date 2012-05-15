(function(GENG){
    GENG.Character = function(ctx, w, h) {
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.direction = '';
        this.animations = {};
        this.animQueue = [];
        this.currentFrame = 0;
        this.frameDelta = 0;

        return this;
    };

    GENG.Character.prototype = {
        newAnim: function(name, frames, speed) {
            this.animations[name] = {
                'frames': frames,
                'speed': speed || 0
            };

            return this;
        },
        reset: function(anim) {
            this.animQueue = [];

            return this;
        },
        addAnimToQueue: function(anim) {
            this.animQueue.unshift.apply(
                this.animQueue,
                (anim instanceof Array ? anim.reverse() : [anim])
            );
            console.log(this.animQueue);

            return this;
        },
        setDirLeft: function() {
            this.direction = 'left';

            return this;
        },
        setDirRight: function() {
            this.direction = 'right';

            return this;
        },
        setDirUp: function() {
            this.direction = 'up';

            return this;
        },
        setDirDown: function() {
            this.direction = 'down';

            return this;
        },
        render: function(x, y) {
            if (this.animQueue.length > 0) {
                var currentAnim = this.animQueue[
                        this.animQueue.length - 1
                    ],
                    anim = this.animations[
                        currentAnim
                    ],
                    changeFrame = (this.frameDelta === anim.speed);

                if (changeFrame) {
                    this.frameDelta = 0;
                    this.currentFrame++;
                } else {
                    this.frameDelta++;
                }

                if (this.currentFrame === anim.frames.length) {
                    if (this.animQueue.length > 1) this.animQueue.pop();
                    this.currentFrame = 0;
                }

                anim.frames[
                    this.currentFrame
                ].render(this.ctx, x, y);
            }

            return this;
        }
    };

    window.GENG = GENG;
})(window.GENG || {});