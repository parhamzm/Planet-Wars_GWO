class Planet{
    constructor(planet_size, init_force = 5, force_type = "Blank", x=0, y=0, radius = 20, id = 1, value = 0){
        this.planet_size = planet_size;
        this.init_force = init_force;
        this.force_type = force_type;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.id = id;
        this.value = value;
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

    get_radius(){
        return this.radius;
    }

    get_type(){
        return this.force_type;
    }

    get_id(){
        return this.id;
    }

    get_value(){
        return this.value;
    }

    set_value(value1){
        this.value = value1;
    }

    calculate_value(){
        let temp_value = this.radius - this.init_force;
        this.set_value(temp_value);
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

var find_planet_by_id = (find_id)=>{
    for (let i = 0; i < 15; i++){
        if(planets[i].get_id() === find_id){
            return planets[i];
        }
    }
    return none;
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

var MoveForces_by_id = (id1, id2, plenty)=>{ // moving forces from planet1 -> planet2
    planet1 = find_planet_by_id(id1);
    if(planet1===none){
        console.log("Problem with id!");
    }
    planet2 = find_planet_by_id(id2);
    if(planet2===none){
        console.log("Problem with id!");
    }
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
            if (planets[i].planet_size === "S") {
                planets[i].init_force += 1;
            }
            if (planets[i].planet_size === "M") {
                planets[i].init_force += 3;
            }
            if (planets[i].planet_size === "L") {
                planets[i].init_force += 5;
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
    // alert(winner_player);
    for (let i=0;i<15;i++){

        if(planets[i].force_type === winner_player || planets[i].force_type === "Blank"){
            console.log("Hello");
        }else{
            console.log("No One Has won Yet!");
            winner_player = "None";
            // alert(planets[i].force_type);
            break;
        }
    }
    return winner_player;
};

var MinimumDistance = () =>{

};

var enemy_planets = [];
var find_enemy_planets = ()=>{
    enemy_planets = [];
    for(let i=0; i<15; i++){
        if (planets[i].force_type === "Green"){
            enemy_forces.push(planets[i]);
        }
    }
    return enemy_planets;
};

var enemy_planets_length = ()=>{
    let enemy_planet_temp = find_enemy_planets();
    return enemy_planet_temp.length;
};

var blank_planets = [];
var find_blank_planets = ()=>{
    blank_planets = [];
    for (let i; i<15; i++){
        if (planets[i].force_type === "Blank"){
            blank_planets.push(planets[i]);
        }
    }
    return blank_planets;
};

var blank_planets_length = ()=>{
    let blank_planets_temp = find_enemy_planets();
    return blank_planets_temp.length;
};

var friend_planets = [];
var find_friend_planets = ()=>{
    friend_planets = [];
    for (let i; i<15; i++){
        if (planets[i].force_type === "Red"){
            friend_planets.push(planets[i]);
        }
    }
    return friend_planets;
};

var friend_planets_length = ()=>{
    let friend_planets_temp = find_friend_planets();
    return friend_planets_temp.length;
};

var update_values = (temp_array)=>{
    for(let i=0; i<temp_array.length; i++){
        temp_array[i].calculate_value();
    }
};


var GrayWolfOpt = ()=>{
    if (enemy_planets_length() === 1){
        if (friend_planets_length() === 1){
            let friend_planets_temp = find_friend_planets();
            let blank_planets_temp = find_blank_planets();
            update_values(blank_planets_temp);
            blank_planets_temp.sort((a, b)=>{
                return b.value - a.value;
            });
            MoveForces_by_id(planets[friend_planets_temp[0].get_id()], planets[blank_planets_temp[0].get_id()],
                Math.floor(friend_planets_temp[0].forces()/2));
            //TODO  
            // hala bayad be kamtarin sayare Blank nirohasho befreste!!!

        }else if (friend_planets_length() >= 1) {
            //TODO
            // hala bayad biyaym va halghe mohasere ro be enemy tang konim
        }
        for (let i=0;i<15;i++){

        }
    }else if (enemy_planets_length() > 1){
        if (enemy_planets_length() > friend_planets_length()){
            //TODO
            // dar in sorat bayad nirohaye friend ro be sayareie az doshamn ke kamtarin tedade niro toshe enteghal bedim

        }
        else if(enemy_planets_length() < friend_planets_length()){
            //TODO
            // dar in sorat bayad dar har marhale nirohaye khodam
        }
    }
};