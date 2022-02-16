const magician = {
    _hat:'./assets/images/hat.png',
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png';
    },
    'do magic'(){
        console.log(`ABRACADABRA
        The prototype of ${this.name} is`);
        console.log(Object.getPrototypeOf(this));
    }
};

const human = new Human("Linda", "22", "human", "./assets/images/human.png", "doctor")
const vampire = new Vampire("Vlad", "915", "vampire", "./assets/images/vampire.png", "unemployed", "count")
const dog = new Dog("Fluffy", "3", "dog","./assets/images/dog.png",  "brown")

function Human(name, age, species, _portrait, job){
    Creature.call(this, name, age, species, _portrait)
    this.job=job;
}
function Vampire(name, age, species, _portrait, job, title){
    Creature.call(this, name, age, species, _portrait)
    this.job=job;
    this.title = title;
}
function Dog(name, age, species, _portrait, color){
    Creature.call(this, name, age, species, _portrait)
    this.color = color;
}
function Creature(name, age, species, _portrait){
    this.name = name;
    this.age = age;
    this.species = species
    this._portrait = _portrait
}

magician['say hello'] = function(){
    console.log(`Hello me name id ${this.name}`)
}

function changeStatus(button){
    if(button){
        if(button.innerHTML == 'human prototype'){
            addProperties(human, button)
        }
        else if(button.innerHTML == 'vampire prototype'){
            addProperties(vampire, button)
        }
        else if(button.innerHTML == 'dog prototype'){
            addProperties(dog, button)
        }
        else if(button.innerHTML == 'no prototype'){
            addProperties(Object.prototype, button)
        }
    }
    else {
        addProperties(Object.prototype, button)
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

changeStatus()