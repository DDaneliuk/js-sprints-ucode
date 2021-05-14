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