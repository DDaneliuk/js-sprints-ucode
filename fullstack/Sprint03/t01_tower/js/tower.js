class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator}`,
            `Atr reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor Height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
};
class Tower extends Building{
    constructor(floors, material, address, hasElevator, arcCapacity, height){
        super(floors, material, address)
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }
        getFloorHeight(){
            return this.height / this.floors
    };
}

/*
  Task name: Tower
*/

const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());