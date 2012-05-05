(function(GENG){
    var k = new Kibo(),
        c = new GENG.CanvasDirector('game'),
        ships = new Image(),
        stats = new Stats(),
        ctx = c.context,
        player1x = 10,
        player1y = 10,
        xspeed = 8,
        yspeed = 8,
        xboundary = 10,
        yboundary = 10,
        moveUp = false,
        moveRight = false,
        moveDown = false,
        moveLeft = false;

    c.setFill(
        GENG.lib.rgbaString(0, 0, 0, 1)
    );

    // Load dem sprites
    ships.src = "img/uridium-ships.gif";
    player1 = new GENG.Sprite(ships, 4, 56, 32, 32);

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
        if (moveLeft) player1x -= xspeed;
        if (moveRight) player1x += xspeed;
        if (moveUp) player1y -= yspeed;
        if (moveDown) player1y += yspeed;
        // Adjust position for boundaries
        if (player1x < xboundary) player1x = xboundary;
        if (player1x + player1.w > c.width - xboundary) player1x = c.width - player1.w - xboundary;
        if (player1y < yboundary) player1y = yboundary;
        if (player1y + player1.h > c.height - yboundary) player1y = c.height - player1.h - yboundary;

        player1.render(ctx, player1x, player1y);
    });

    // Align top-left
    stats.getDomElement().style.position = 'absolute';
    stats.getDomElement().style.left = '0px';
    stats.getDomElement().style.top = '0px';

    document.body.appendChild(stats.getDomElement());

    setInterval(stats.update, 1000 / 60);
})(window.GENG);
