# Sprint03Full

## Task00
Q: Create a class with properties(a, b, c). b and c mustn't be able to take values outside of the following ranges:
1 <= b < 100
100 <= c < 100000
And add method which return all properties.

A: For this you must use Property "getters" and "setters"
Second type of properties is - "accessor properties" - They are essentially functions that execute on getting and setting a value

### Getters and setters
Accessor properties are represented by "getter" and "setter" methods
```javascript
let obj = {
    get propName(){
        // getter, the code executed on getting obj.propName
    },

    set propName(value){
        // setter, the code executed on setting obj.propName = value
    }
}
```
The getter works when obj.propNAme is read, the setter - when it is assigned.
In class add get and set. In set add a check value 
Add method which return keys and values

## Task01
Q: Create a "Tower" class that inherits from the Building class

A: To create a class inheritance, use the "extends" keyword.
``` javascript
class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }
class Tower extends Building{
    constructor(floors, material, address, hasElevator, arcCapacity, height){
        super(floors, material, address)
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }
}
```
For use parents constructor and get's access to the parent's properties - super().
For  use a few properties - super(a, b, c)