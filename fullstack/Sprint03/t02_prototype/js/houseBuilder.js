function houseBuilder(address, description, owner, size, roomCount, building_speed){
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this.building_speed = 0.5;

}

let houseBlueprint = {
    address: this.address,
    date:{
        toString(){
            return new Date;
        }
    },
    description: this.description,
    owner: this.owner,
    size: this.size,
    getDaysToBuild(){
        return this.size / this.building_speed
    }
}

houseBuilder.prototype = houseBlueprint;

const house= new houseBuilder('88 Crescent Avenue','Spacious town house with wood flooring, 2-car garage, and a back patio.','J. Smith',110,5);
console.log(house.address);
console.log(house. description);
console.log(house.size);
console.log(house.date.toString())
console.log(house.owner)
console.log(house.building_speed)
console.log(house.getDaysToBuild())
console.log(house.roomCount)
