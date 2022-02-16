let notearea = document.querySelector("#notearea");
let addBtn = document.querySelector(".button_add");
let output = document.querySelector("#cookies_text");

let arrCookies = [];
arrCookies = JSON.parse(getCookie("notes"));

output.innerText = "[Empty]";
outputFunc();

addBtn.addEventListener("click", () => {
  if (!notearea.value) {
    alert('It\'s empty. Try to input something in "Text input".');
  } else {
    arrCookies.push("--> " + notearea.value);
    let jsonStr = JSON.stringify(arrCookies);
    setCookies("notes", jsonStr, 30);
    outputFunc();
    notearea.value = "";
  }
});

function setCookies(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let clearBtn = document.querySelector(".button_clear");
clearBtn.addEventListener("click", () => {
  let isClear = confirm("Are you sure?");
  if (isClear) {
    setCookies("notes", "", -1);
    output.innerHTML = "[Empty]";
    arrCookies = [];
  }
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function outputFunc() {
  let jsonPar = getCookie("notes");
  let arrNew = JSON.parse(jsonPar);
  let outputCookie = "";
  for (i = 0; i < arrNew.length; i++) {
    outputCookie += arrNew[i] + "<br>";
  }
  output.innerHTML = outputCookie;
}
