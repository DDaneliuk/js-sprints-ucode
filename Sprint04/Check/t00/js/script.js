function Human(name, age, species, portrait, job){
    Creature.call(this, name, age, species, portrait);
    this.job = job;
}
function Dog(name, age, species, portrait, color){
    Creature.call(this, name, age, species, portrait);
    this.color = color;
}
function Vampire(name, age, species, portrait, job, title){
    Human.call(this, name, age, species, portrait, job);
    this.title = title;
}

function Creature(name, age, species, portrait){
    this.name = name;
    this.age = age;
    this.species = species;
    this._portrait = portrait;
    
}

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
    for(const [key, value] of Object.entries(object)){
        if(key.charAt(0) != '_'){
            properties.innerHTML += `<div class="property">${key}:<span class="propValue"> ${value}</span></div>`;
        }
    }
}

Human.prototype = Object.create(Creature.prototype);
Vampire.prototype = Object.create(Creature.prototype);
Dog.prototype = Object.create(Creature.prototype);

Human.prototype.constructor = Human;
Vampire.prototype.constructor = Vampire;
Dog.prototype.constructor = Dog;

let human = new Human('Linda', 22, 'human', 'assets/images/human.png', 'doctor');
let dog = new Dog('Fluffy', 3, 'dog', 'assets/images/dog.png', 'brown');
let vampire = new Vampire('Vlad', 915, 'vampire', 'assets/images/vampire.png', 'unemloyed', 'count');

changeStatus();