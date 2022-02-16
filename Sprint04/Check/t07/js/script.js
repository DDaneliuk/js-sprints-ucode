let user = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value
};

// Don't edit above this line
let tempUser = user;
user = new Proxy(user, {
    set(target, prop, value){
        if(prop == 'name'){
            target[prop] = value
                .replace(/\s+/g, ' ')
                .trim()
                .split(/\s+/)
                .map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
        }
        else if(prop == 'age'){
            if(!isNaN(value)){
                if(value.trim().match(/^[1-9][0-9]{0,2}$/)){
                    target[prop] = value.trim();
                    return true;
                }else{
                    throw new Error ('Invalid value of age');
                }
            }else{
                throw new Error ('Invalid value of age');
            }
        }
        else if(prop == 'email'){
            if(value.trim().match(/\S+@\S+\.\S+/)){
                target[prop] = value.trim();
            }
            else{
                throw new Error ('Invalid email');
            }
        }
    }
})

// Don't edit below this line

function edit(btn) {
    btn.innerHTML = 'save';
    btn.setAttribute('onclick', 'save(this)');
    const input = document.getElementById(btn.previousElementSibling.id);
    input.removeAttribute('disabled');
}
function save(btn) {
    btn.innerHTML = 'edit';
    btn.setAttribute('onclick', 'edit(this)');
    const input = document.getElementById(btn.previousElementSibling.id);
    input.setAttribute('disabled', 'true');
    user[input.id] = document.getElementById(input.id).value;
    document.getElementById(input.id).value= user[input.id];
}