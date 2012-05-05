(function(GENG){
    var k = new Kibo(),
        s = new Stats(),
        c = new GENG.CanvasDirector('game')
            .setFill(
                GENG.lib.rgbaString(0, 0, 0, 1)
            ),
        i, chars,
        anim = 'base',
        ctx = c.context,
        player1x = 0, player1y = 0,
        xspeed = 8, yspeed = 8,
        xboundary = 10, yboundary = 10,
        moveUp = false, moveRight = false, moveDown = false, moveLeft = false;

    // Get characters
    chars = GENG.getGameCharacters(ctx);

    // Trap keyboard events
    k.down('left', function() {
        moveLeft = true;
    }).up('left', function() {
        moveLeft = false;
    });
    k.down('right', function() {
        moveRight = true;
    }).up('right', function() {
        moveRight = false;
    });
    k.down('up', function() {
        moveUp = true;
    }).up('up', function() {
        moveUp = false;
    });
    k.down('down', function() {
        moveDown = true;
    }).up('down', function() {
        moveDown = false;
    });

    // Game loop
    c.run(function(){
        // Adjust position based on keyboard
        if (moveLeft) {
            player1x -= xspeed;
            anim = 'base-left';
        }
        if (moveRight) {
            player1x += xspeed;
            anim = 'base';
        }
        if (moveUp) player1y -= yspeed;
        if (moveDown) player1y += yspeed;
        // Adjust position for boundaries
        if (player1x < xboundary) player1x = xboundary;
        if (player1x + chars.player1.w > c.width - xboundary)
            player1x = c.width - chars.player1.w - xboundary;
        if (player1y < yboundary) player1y = yboundary;
        if (player1y + chars.player1.h > c.height - yboundary)
            player1y = c.height - chars.player1.h - yboundary;

        chars.player1.render(player1x, player1y, anim);
    });

    if (s) {
        // Align top-left
        s.getDomElement().style.position = 'absolute';
        s.getDomElement().style.left = '0px';
        s.getDomElement().style.top = '0px';

        document.body.appendChild(s.getDomElement());

        setInterval(s.update, 1000 / 60);
    }
})(window.GENG);
