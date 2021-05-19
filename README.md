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
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};
```

The getter works when obj.propNAme is read, the setter - when it is assigned.
In class add get and set. In set add a check value
Add method which return keys and values

## Task01

Q: Create a "Tower" class that inherits from the Building class

A: To create a class inheritance, use the "extends" keyword.

```javascript
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
For use a few properties - super(a, b, c)

## Task02

### Prototypal inheritance

In JavaScript, object have a special hidden property [[Property]], thaht is either null or references another object. That object is called "a prototype"

The property [Propertype] is internal and hidden, but there are many ways to set it.
One of them is to use the special name **proto**, like this:

```javascript
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
```

There are only two limitations:

1. The references can't go in circles. JavaScript will throw an error if we try to assign **proto** in a circle.
2. The value of **proto** can be either an object or null. Other types are ignored.

### Writing doesn’t use prototype

The prototype is only used for reading properties.
Write/delete operations work directly with the object.

### F.prototype

```javascript
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert(rabbit.eats); // true
```

Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [Prototype] to animal".

### Default F.prototype, constructor property

Every function has the "prototype" property even if we don't supply it.
The default "prototype" is an object with the only properly constructor that points back to the function itself.

## Task 03

### Map

Map is collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
Methods and properties are:

1. new Map() - create the map
2. map.set(key, value) - stores the value by the key
3. map.get(key) - returns the value by the key, undefined if key doesn't exist in map.
4. map.has(key) - returns true if the key exist, false otherwise.
5. map.delete(key) - removes the value by the key.
6. map.clear() - removes everything from the map.
7. map.size - returns the current element count.

```javascript
let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'

alert(map.size); // 3
```

#### Iteration over Map

1. map.keys() - returns an iterable for keys.
2. map.value() - returns an iterable for values.
3. map.entries() - returns an iterable for entries [key, value], it's used by defauilt in for...of.

```javascript
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}
```

#### Object.entries: Map from Object

If we have a plain object, and we'd like to create a Map from it, then we can use built-in method Object.entries(obj)
that returns an array of key/value pairs for an object exactly in that format.

```javascript
let obj = {
  name: "John",
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get("name")); // John
```

#### Object.fromEntries: Object from Map

There's Object.fromEntries method that does the reverce: given an array of [key, value] pairs, it creates an object from them:

```javascript
let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

### Set

Is a special type collection - "set of values" (without keys), where each value may occur only once.

1. new Set(iterable) - creates the Set, and if an iterable object is provided (usually an array), copies values from it into the set
2. set.add(value) - adds a value, returns the set itself.
3. set.delete(value) - removes the value, returns true if value existed at the moment of the call, otherwise false.
4. set has(value) - returns true if the value exists in the set, otherwise false.
5. set.clear() - removes everything from the set.
6. set.size - is the elements count.

The main feauture is that repeated calls of st.add(value) with the same value don't do anything. That's the reason why each value appears in a Set only once.

For example, we have visitors coming, and we'd like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be "counted" only once.

```javascript
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the perfomance would be mush worse

#### Iteration over Set

We can loop over a set either with for..of or using forEach

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

## Task 04

### WeakMap

The first difference between Map and WeakMap is that keys must be object, not primitive values:

```javascript
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object
```

Now if we use an object as the key i it, and there are no other references to that object - it will be removed from memory (and from the map automatically).
WeakMap does not support iteration and method keys(), values(), entries(), so there's no way to get all keys or values from it.

1. weakMap.get(key)
2. weakMap.set(key, value)
3. weakMap.delete(key)
4. weakMap.has(key)

### Use case: additioanl data

The main area of aplication for WeakMap is an additional data storage that you can clean.
Another common example is caching. We can store ("cache") results from a function, so that future calls on the same object can reuse it.

### WeakSet

1. It is analogous to Set, but we may only add object to WeakSet
2. An object exists in the set while it is reachable from somewhere else.
3. Like Set, it supports add, has and delete, but not size, keys() and no iterations.

## Task05

### Modules

A module is just a file. One script is one module.
Modules can load each other and use special directives "export" and "import" to interchange functionality, call functions of one module from another one:

1. export keyword labels variables and functions that should be accessible from outside the current module.
2. import allow the import of functionality from other modules.

```javascript
// sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}`);
}

// main.js
import { sayHi } from "./sayHi.js";

alert(sayHi);
sayHi("John");
```

#### Always “use strict”

Modules always work in strict mode.

## Task06

### Proxy

A Proxy object wraps another object and intercepts operations, like reading/ writing properties and other,
optinally handling them on its own, or transparently allowing the object to handle them.

```javascript
let proxy = new Proxy(target, handler);
```

1. target - is an object to wrap, can be anything, including functions.
2. handler - proxy configuration: an object with "traps", methods that intercept operations. - e.g. get trap for reading a property of target, set trap for writing a property into target, and so on.

As a starting example, let's create a proxy without any traps:

```javascript
let target = {};
let proxy = new Proxy(target, {}); //empty handler

proxy.test = 5; // writing to proxy (1)
alert(target.test); // 5, the property appeared in target!

alert(proxy.test); //5, we can read it from proxy too (2);

for (let key in proxy) alert(key); // test, iteration works (3);
```

As there are no traps, all operations on proxy are forwarded to target.

1. A writing operation proxy.test = sets the value on target
2. A reading operation proxy.test returns the value from target.
3. Iteration over proxy returns values from target.
