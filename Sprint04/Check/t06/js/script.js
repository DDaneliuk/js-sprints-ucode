let chat = document.querySelector('#jarvis');
let regExp = /hi|hello|hey|yo|hiya/gi;
function message(){
    let message = document.querySelector('#message');
    let temp = chat.innerHTML;
    chat.innerHTML = `<div class="user">${message.value}</div>`;
    chat.innerHTML +=temp;
    temp = chat.innerHTML;
    if(message.value.match(regExp)){
        chat.innerHTML = `<div class="jarvis">${generator.next().value}</div>`;
        chat.innerHTML += temp;
    }else if(message.value == ''){
        return;
    }else{
        chat.innerHTML = `<div class="jarvis">I don't understand you</div>`;
        chat.innerHTML += temp;
    }
    message.value = '';    
}

function* generateSequence(){
    yield "Hello, I am J.A.R.V.I.S.";
    yield "I believe I've already said it, but, sure, hello again!";
    yield "You are malfunctioning.";
    yield "I believe your intentions to be hostile.";
    while (true)
        yield 'I will not respond to that.';
}
let generator = generateSequence();