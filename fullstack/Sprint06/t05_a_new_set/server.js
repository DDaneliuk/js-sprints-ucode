  
const infoForm = document.querySelector('.info-form'),
{form} = document.forms;

function func1(event){
event.preventDefault();
let result = '';
const{name, mail, age, text, photo} = form;

const values = {
              name: name.value,
              email: mail.value,
              age: age.value,
              description: text.value,
              photo: photo.value
}
console.log(values)
Object.entries(values).map(name => {
   console.log(name)
   result += `\t[${name[0]}] => ${name[1]} <br>`
})
  infoForm.innerHTML = `Array<br>(<pre>${result}</pre>)`          
}
form.addEventListener('submit', func1)