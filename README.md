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

## Task02
### Prototypal inheritance
In JavaScript, object have a special hidden property [[Property]], thaht is either null or references another object. That object is called "a prototype"

The property  [Propertype] is internal and hidden, but there are many ways to set it.
One of them is to use the special name __proto__, like this:
```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
```
There are only two limitations:
1. The references can't go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
2. The value of __proto__ can be either an object or null. Other types are ignored.
### Writing doesn’t use prototype
The prototype is only used for reading properties.
Write/delete operations work directly with the object.

### F.prototype
```javascript
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```
Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [Prototype] to animal".

### Default F.prototype, constructor property
Every function has the "prototype" property even if we don't supply it.
The default "prototype" is an object with the only properly constructor that points back to the function itself.

## Task 03
