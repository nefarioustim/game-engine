(function(GENG){
    GENG.Character = function(ctx, w, h, baseFrames) {
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.states = {};
        this.currentState = 'base';
        this.newState(this.currentState, baseFrames, 0);
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
        render: function(x, y, nextState, instant) {
            var state = this.states[this.currentState],
                changeFrame = (this.frameDelta === state.speed);

            nextState = nextState || 'base';
            instant = instant || false;

            if (instant || this.currentFrame === state.frames.length) {
                this.currentState = nextState;
                this.currentFrame = 0;
            }
            state.frames[
                changeFrame ? this.currentFrame++ : this.currentFrame
            ].render(this.ctx, x, y);
            this.frameDelta = changeFrame ? 0 : this.frameDelta + 1;
        }
    };

    window.GENG = GENG;
})(window.GENG || {});