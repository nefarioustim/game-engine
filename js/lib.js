(function(GENG){
    GENG.lib = {
        rgbaString: function(r, g, b, a) {
            return "rgba(" + ~~r + "," + ~~g + "," + ~~b + "," + parseFloat(a) + ")";
        }
    };

    window.GENG = GENG;
})(window.GENG || {});
