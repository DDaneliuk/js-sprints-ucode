class Creature{
    constructor(name, age, species, portrait){
        this.name = name;
        this.age = age;
        this.species = species;
        this._portrait = portrait;
    }
}
class Human extends Creature{
    constructor(name, age, species, portrait, job){
        super(name, age, species, portrait);
        this.job = job;
    }
}
class Dog extends Creature{
    constructor(name, age, species, portrait, color){
        super(name, age, species, portrait);
        this.color = color;
    }
}
class Vampire extends Human{
    constructor(name, age, species, portrait, job, title){
        super(name, age, species, portrait, job);
        this.title = title;
    }
}
class Werewolf extends Human{
    constructor(name, age, species, portrait, job){
        super(name,  age, species, portrait, job);
    }
    transform(){
        if(this._portrait == "assets/images/human.png"){
            this._portrait = "assets/images/werewolf.png";
            this.species = 'werewolf';
            let button = document.querySelector('.active');
            changeStatus(button);
            document.querySelector('#howl').style.display = 'inline-block';
        }else if(this._portrait == "assets/images/werewolf.png"){
            this._portrait = "assets/images/human.png"
            this.species = 'human';
            let button = document.querySelector('.active');
            changeStatus(button);
        }
    }
}
let HowlMixin = {
    Howl(){
        console.log("ARH-WOOOOOOOOOOOOOOOOOOOO");
    }
}
Object.assign(Werewolf.prototype, HowlMixin);

const magician = {
    _hat: './assets/images/hat.png',
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return'./assets/images/magician.png';
    },
    'do magic'(){
        console.log(`ABRACADABRAThe prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this));
    }
};

magician['say hello'] = function(){
    console.log(`Hello, my name is ${this.name}`);
}

function changeStatus(button){
    if(button){
        if(button.innerHTML.charAt(0) == 'h'){
            addProperties(human, button);
        }else if(button.innerHTML.charAt(0) == 'v'){
            addProperties(vampire, button);
        }else if(button.innerHTML.charAt(0) == 'd'){
            addProperties(dog, button);
        }else if(button.innerHTML.charAt(0) == 'w'){
            addProperties(werewolf, button);
        }else if(button.innerHTML.charAt(0) == 'n'){
            addProperties(Object.prototype, button);
        }
    }else{
        addProperties(Object.prototype, button);
    }
}

function addProperties(object, button){
    let properties = document.querySelector('#properties');
    Object.setPrototypeOf(magician, object);
    if(button){
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');
    }
    head = document.querySelector('#head').setAttribute('src', `${magician._getPortrait()}`);
    properties.innerHTML = `<button onclick="magician['do magic']()">DO MAGIC</button>`;
    if(button && button.innerHTML != 'no prototype'){
        properties.innerHTML += `<button onclick="magician['say hello'](this)">SAY HELLO</button>`;
    }
    if(button && button.innerHTML == 'werewolf prototype'){
        properties.innerHTML += `<button onclick="werewolf.transform()">transform</button>`;
    }
    if(object._portrait == "assets/images/werewolf.png"){
        properties.innerHTML += `<button id="howl" onclick="werewolf.Howl()">howl</button>`
    }
    for(const [key, value] of Object.entries(object)){
        if(key.charAt(0) != '_'){
            properties.innerHTML += `<div class="property">${key}:<span class="propValue"> ${value}</span></div>`;
        }
    }
}

let human = new Human('Linda', 22, 'human', 'assets/images/human.png', 'doctor');
let werewolf = new Werewolf('Linda', 20, 'human', 'assets/images/human.png', 'teacher');
let dog = new Dog('Fluffy', 3, 'dog', 'assets/images/dog.png', 'brown');
let vampire = new Vampire('Vlad', 915, 'vampire', 'assets/images/vampire.png', 'unemloyed', 'count');

changeStatus();