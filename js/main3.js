class Planet{
    constructor(planet_size, init_force = 5, force_type = "Blank", x=0, y=0){
        this.planet_size = planet_size;
        this.init_force = init_force;
        this.force_type = force_type;
        this.x = x;
        this.y = y;
    }

    size(){
        return this.planet_size;
    }

    forces(){
        return this.init_force;
    }

    x_cord(){
        return this.x;
    }

    y_cord(){
        return this.y;
    }

    minus_forces(plenty){
        this.init_force = this.init_force - plenty;
    }

    add_forces(plenty){
        this.init_force = this.init_force + plenty;
    }

}

var planets = [];

var MakePlanet = ()=>{
    let temp_planet;
    for(let i = 0;i < 5; i++){
        temp_planet = new Planet("S", 5, "Blank");
        planets.push(temp_planet);
    }
    for(let i = 0;i < 5; i++){
        temp_planet = new Planet("M", 7, "Blank");
        planets.push(temp_planet);
    }
    for(let i = 0;i < 3; i++){
        temp_planet = new Planet("L", 10, "Blank");
        planets.push(temp_planet);
    }
    temp_planet = new Planet("L", 50, "Red");
    planets.push(temp_planet);
    temp_planet = new Planet("L", 50, "Green");
    planets.push(temp_planet);
};


var MoveForces = (planet1, planet2, plenty)=>{ // moving forces from planet1 -> planet2
    if (planet1.force_type === planet2.force_type){
        planet2.add_forces(plenty);
        planet1.minus_forces(plenty);
    }else{
        if (planet2.init_force > plenty) {
            planet1.minus_forces(plenty);
            planet2.minus_forces(plenty);
        }else{
            planet1.minus_forces(plenty);
            planet2.force_type = planet1.force_type;
            temp_forces = Math.abs(plenty - planet2.init_force);
            planet2.init_force = temp_forces;
        }
    }
};

var AddForce = ()=>{
    var planet;
    planet.getElementById();
    console.log("Hello farid");
    return "Hello";
};

var ForcesGrowth = ()=>{
    for(let i=0; i<15; i++) {
        if (planets[i].force_type === "Red" || planets[i].force_type === "Green") {
            if (planet1.planet_size === "S") {
                planet1.init_force += 1;
            }
            if (planet1.planet_size === "M") {
                planet1.init_force += 3;
            }
            if (planet1.planet_size === "L") {
                planet1.init_force += 5;
            }
        }
    }
};

var Winner = () => {
    let winner_player = "G";
    for(let i=0;i<15;i++){
        if(planets[i].force_type === "Red"){
            winner_player = "Red";
            break;
        }
        else if(planets[i].force_type === "Green"){
            winner_player = "Green";
            break;
        }
    }
    for (let i=0;i<15;i++){
        if(planets[i].force_type === winner_player || planets[i].force_type === "Blank"){

        }else{
            console.log("No One Has won Yet!");
        }
    }
};

var MinimumDistance = () =>{

};

var GrayWolfOpt = ()=>{
    let enemy_forces = [];
    for (let i=0; i<15;i++){
        if(planets[i].force_type === "Green"){
            enemy_forces[i] = 1;
        }else{
            enemy_forces[i] = 0;
        }
    }
};