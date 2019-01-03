(function () {

    // Star Numbers
    var starsNumber = 500,
        canvas = document.getElementById('divCanvas'),
        context = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        x = 100,
        y = 100,
        i = 0,
        t = 0,
        stars = [],
        colors = [
            '#e7fcff', // Sirius        (Canis Major)
            '#217cee', // Rigel         (Orion)
            '#eef310', // Sun & Capella (Auriga)
            '#fe8028', // Albedaran     (Taurus)
            '#87f903'  // Betelgeuse    (Orion)
        ];

    function Star() {

        // Random Position
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        // Location Starting
        this.speed = 0;

        // Colors
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Size Limits
        this.size = Math.random();
    }

    function draw() {

        // Colors
        var star;

        // Canvas Size
        canvas.width = width;
        canvas.height = height;

        for (t = 0; t < stars.length; t += 1) {

            // Getting Star
            star = stars[t];
            
            // Building
            context.beginPath();
            context.fillStyle = star.color;
            context.arc(star.x, star.y, star.size, Math.PI * 2, false);
            context.fill();

            // Animation
            star.x -= star.speed;

            // Keeping Stars on canvas
            if (star.x < -star.size) {
                star.x = width + star.size;
            }

            if (star.size < 5) {
                star.speed = 1;
            }

            if (star.size < 4) {
                star.speed = 0.5;
            }

            if (star.size < 3) {
                star.speed = 0.25;
            }
        }
    }

    for (i = 0; i < starsNumber; i += 1) {
        stars.push(new Star());
    }

    setInterval(draw, 20);

}());


class Planet{
    constructor(size, init_force, force_type, x, y){
        this.size = size;
        this.init_force = init_force;
        this.force_type = force_type;
        this.x = x;
        this.y = y;
    }


}


function MoveForces() {
    
}

var AddForce = ()=>{
    var planet;
    planet.getElementById();
    console.log("Hello farid");
    return "Hello";
};

var ForcesGrowth = ()=>{

}
