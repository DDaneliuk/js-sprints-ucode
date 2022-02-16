let message = document.getElementById('message');
class Human{
    constructor(firstName, lastName, gender, age, calories, portrait){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
        this._portrait = portrait;
        this._flag = 0;
    }
    sleepFor(){
        if(this._flag == 0){
            this._flag = 1;
            if(message.innerHTML == "I'm sleeping"){
                return;
            }else{
                let sec = Number(prompt('Enter seconds pls', ''));
                message.innerHTML = "I'm sleeping";
                function awake(){
                    message.innerHTML = "I'm awake now";
                    human._flag = 0;
                }
                setTimeout(awake, sec*1000);
            }
        }
        else return;
    }
    feed(){
        if(this._flag == 0){
            this._flag = 1;
            if(message.innerHTML == "I'm sleeping"){
                return;
            }else if(this.calories >= 500){
                message.innerHTML = "I'm not hungry";
                this._flag = 0;
            }else{
                this.calories += 200;
                message.innerHTML = "Nom Nom Nom";
                properties.lastChild.lastChild.innerHTML = this.calories;
                function stHungry(){
                    message.innerHTML = "I'm steel hungry";
                    console.log(human._flag);
                    human._flag = 0;
                    console.log(human._flag);
                    }
                function nothungry(){
                    message.innerHTML = "I'm not hungry";
                    human._flag = 0;
                }
                if(this.calories < 500){
                    setTimeout(stHungry, 10000);
                }
                else{
                    setTimeout(nothungry, 10000);
                }
            }
        }else return;
    }
    autoFeed(){
        if(this.calories >=200){
            this.calories -= 200;
        }else this.calories = 0;
        properties.lastChild.lastChild.innerHTML = this.calories;
    }
}

class superhero extends Human{
    fly(){
        if(this._flag == 0){
            this._flag = 1;
            message.innerHTML = "I'm flying!";
            function endFlying(){
                message.innerHTML = "...";
                human._flag = 0;
            }
            setTimeout(endFlying, 10000);
        }else return;
    }
    fightWithEvil(){
        if(this._flag == 0){
            this._flag = 1;
            function disp1(){
                message.innerHTML = "Khhhh-chh...";
            }
            function disp2(){
                message.innerHTML = "Bang-g-g-g...";
            }
            function disp3(){
                message.innerHTML =  "Evil is defeated!";
                human._flag = 0;
            }
            disp1();
            setTimeout(disp2, 2000);
            setTimeout(disp3, 4000);
        }else return;
    }
}

setTimeout(() => {
    setTimeout(function run() {
      human.autoFeed();
      setTimeout(run, 60000);
    });
  }, 65000);

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

function turnToSuperhero(){
    if(human._flag == 0){
        human._flag = 1;
        if(human.calories < 500){
            message.innerHTML = "I'm steel hungry";
            human._flag = 0;
        }
        else {
            human = new superhero('Linda', 'Tinda', 'superhero', 222, 600, 'assets/images/vampire.png');
            addProperties(human); 
            let hero1 = document.querySelector("#hero1");
            let hero2 = document.querySelector("#hero2");
            hero1.style.display = "inline-block";
            hero2.style.display = "inline-block";                
        }
    }else return;
}

let properties = document.querySelector('#properties');


function addProperties(object){
    properties.innerHTML = `<button onclick="turnToSuperhero()">Turn to Superhero</button>`;
    properties.innerHTML += `<button onclick="human.sleepFor()">SLEEP</button>`;
    properties.innerHTML += `<button onclick="human.feed()">FEED</button><br>`;
    properties.innerHTML += `<button id="hero1" class="superhero" onclick="human.fly()">FLY</button>`;
    properties.innerHTML += `<button id="hero2" class="superhero" onclick="human.fightWithEvil()">FIGHT</button>`;
    Object.setPrototypeOf(magician, object);
    head = document.querySelector('#head').setAttribute('src', `${magician._getPortrait()}`);
    //properties.innerHTML = `<button onclick="magician['do magic']()">DO MAGIC</button>`;
    for(const [key, value] of Object.entries(object)){
        if(key.charAt(0) != '_'){
            properties.innerHTML += `<div class="property">${key}:<span class="propValue"> ${value}</span></div>`;
        }
    }
}

/*Human.prototype = Object.create(Creature.prototype);
Vampire.prototype = Object.create(Creature.prototype);
Dog.prototype = Object.create(Creature.prototype);

Human.prototype.constructor = Human;
Vampire.prototype.constructor = Vampire;
Dog.prototype.constructor = Dog;*/

let human = new Human('Linda', 'Tinda', 'human', 22, 0, 'assets/images/magician.png');


addProperties(human);