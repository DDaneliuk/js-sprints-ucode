let output = document.getElementById("cookies_text");
let newCookies = document.getElementById("notearea");
var arr = [];
arr = JSON.parse(getCookie('mycookie'));
output.innerHTML="[Empty]";
outputFunc();
  
// outputFunc();
function AddCookie(){
    if (!newCookies.value){
        alert ('It\'s empty. Try to input something in "Text input".');
    }
    else{
        arr.push('--> ' + newCookies.value);
        let jsonStr = JSON.stringify(arr);
        setCookie('mycookie', jsonStr, 30);
        outputFunc();
        newCookies.value="";
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//add outputFunc
function outputFunc(){
    let jsonPar = getCookie('mycookie');
    let arrNew = JSON.parse(jsonPar);
    let outputCookie="";
    for (i=0;i<arrNew.length;i++){
        outputCookie += arrNew[i]+'<br>';
    }
    output.innerHTML=outputCookie;
}

//clear cookies 
function clearCookie(){
    let clearClick = confirm('Are you sure?');
    if (clearClick){
        setCookie('mycookie', "", -1);
    }
    arr=[];
    output.innerHTML="[Empty]";
}