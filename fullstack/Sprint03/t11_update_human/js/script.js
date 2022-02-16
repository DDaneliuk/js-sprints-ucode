let feetState;
let idLife, idFeet;
class Human {
  feetState = false;
  idLife;
  idFeet;
  constructor(img, firstName, lastName, gender, age, calories) {
    this.img = img;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
  }
  sleepFor(value) {
    sleepAction.disabled = true;
    feetAction.disabled = true;
    clearInterval(idFeet);
    form_message.innerHTML = message.sleeping;
    setTimeout(() => {
      form_message.innerHTML = message.awake;
      sleepAction.disabled = false;
      feetAction.disabled = false;
    }, value * 1000);
  }

  feet() {
    if (human.calories > 500) {
      form_message.innerHTML = message.notHungry;
    } else {
      sleepAction.disabled = true;
      feetAction.disabled = true;
      form_message.innerHTML = message.eating;
      idFeet = setInterval(() => {
        this.calories += 200 / 100;
        caloriesState.innerHTML = Math.floor(this.calories);
      }, 100);

      setTimeout(() => {
        if (human.calories > 500) {
          form_message.innerHTML = message.notHungry;
        }
        clearInterval(idFeet);
        form_message.innerHTML = "";
        sleepAction.disabled = false;
        feetAction.disabled = false;
      }, 10000);
    }
    this.checkCalories();
  }

  checkCalories() {
    if (human.calories > 500) {
      form_message.innerHTML = "";
    } else if (human.calories == 0) {
      form_message.innerHTML = message.dead;
    } else {
      form_message.innerHTML = message.Hungry;
    }
  }

  startLife() {
    this.idLife = setInterval(() => {
      this.calories -= 200 / (100 * 60);
      caloriesState.innerHTML = Math.floor(this.calories);
    }, 10);
  }
  humanDead() {
    clearInterval(this.idLife);
    form_message.innerHTML = message.dead;
  }
}

const message = {
  eating: `Nom Nom Nom`,
  notHungry: `I'm not hungry`,
  Hungry: `I'm hungry`,
  sleeping: `I'm sleeping`,
  awake: `I'm awake now`,
  dead: `Dead ...`,
};

let human = new Human(
  "assets/images/human.png",
  "Ivan",
  "Smith",
  "male",
  "25",
  300
);

let htmlClass = `
<div class="photo-of-class">
<img src="${human.img}"></div>
<div class="information-of-class">
<h3>First name: ${human.firstName}</h3>
<h3>Last name: ${human.lastName}</h3>
<p>Gender: ${human.gender}</p>
<p>Age: ${human.age}</p>
</div>
<div class="input-parameter">
<h3 class="calories">Calories: ${human.calories}</h3>
<input id="sleepValue" type="number" placeholder="Type a patameter">
<input id="sleepAction" type="button" value="Sleep Time">
<input id="feet" type="button" value="Feet">
</div>
<div id="form_message"></div>`;

let box = document.querySelector(".form");
box.insertAdjacentHTML("afterbegin", htmlClass);

let caloriesState = document.querySelector(".calories");
let form_message = document.querySelector("#form_message");
let feetAction = document.querySelector("#feet");
feetAction.addEventListener("click", () => {
  human.feet();
});

let sleepAction = document.querySelector("#sleepAction");
sleepAction.addEventListener("click", () => {
  let sleepValue = document.querySelector("#sleepValue").value;
  human.sleepFor(sleepValue);
  sleepValue.value = "";
});

human.startLife();
setTimeout(() => {
  human.checkCalories();
}, 5000);

setInterval(() => {
  if (human.calories < 1) {
    human.humanDead();
  }
}, 100);
