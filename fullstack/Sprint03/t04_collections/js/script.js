let guestList = new WeakMap();

let denys = {},
    alex = {},
    max = {};
    amanda = {},
    dora = {};

guestList.set(denys)
guestList.set(alex)
guestList.set(max)
guestList.set(amanda)
guestList.set(dora)

console.log(guestList.has(denys))
console.log(guestList.size)
console.log(guestList.delete(dora))

let menu = new Map();

menu.set("burger", "$15");
menu.set("chips", "$7");
menu.set("pizza", "$5");
menu.set("salat", "$12");
menu.set("pasta", "$17");

let bankVault = new WeakSet();

let box00 = {},
    box01 = {},
    box02 = {},
    box03 = {},
    box04 = {};

bankVault.add(box00, "USD");
bankVault.add(box01, "UAH");
bankVault.add(box02, "EUR");
bankVault.add(box03, "PLN");
bankVault.add(box04, "RUB");

let coinCollection = new Set();

coinCollection.add(1)
coinCollection.add(2)
coinCollection.add(5)
coinCollection.add(10)
coinCollection.add(25)

