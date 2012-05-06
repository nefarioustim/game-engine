(function(GENG){
    GENG.Character = function(ctx, w, h) {
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.states = {};
        this.currentState = '';
        this.currentFrame = 0;
        this.frameDelta = 0;

        return this;
    };

    GENG.Character.prototype = {
        newState: function(name, frames, speed) {
            this.states[name] = {
                'frames': frames,
                'speed': speed || 0
            };

            return this;
        },
        render: function(x, y) {
            var state = this.states[this.currentState],
                changeFrame = (this.frameDelta === state.speed);

            if (this.currentFrame === state.frames.length) {
                this.currentFrame = 0;
            }
            state.frames[
                changeFrame ? this.currentFrame++ : this.currentFrame
            ].render(this.ctx, x, y);

            if (changeFrame) {
                this.frameDelta = 0;
            } else {
                this.frameDelta += 1;
            }
        }
    };

    window.GENG = GENG;
})(window.GENG || {});