var canvas =document.getElementById('canvas')
    c = canvas.getContext('2d');
var innerWidth = 360,
    innerHeight = 620;

canvas.width = innerWidth;
canvas.height = innerHeight;
//player
var player = {},
    player_width = 100,
    player_height = 105,
    player_img = new Image();
    player_img.onload = function() {

        // At this point, the image is fully loaded
        // So do your thing!
    
    };
    player_img.src = './image/1.png';

// cerate player 
player = {
    width : player.width,
    height: player.height,
    x : innerWidth/2 - player_width/2,
    y : innerHeight - (player_height+10),
    power : 10,
    draw: function(){
        // console.log(player_img); 
        c.drawImage(player_img,this.x,this.y,this.width,this.height )
    }
};

//animation 
function animate(){
    // console.log("vaa")
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height)
    player.draw();
}

animate();
