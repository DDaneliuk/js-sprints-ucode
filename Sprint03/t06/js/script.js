let count = 0;
function transformation() {
  count++;
  let backGround = document.getElementById("lab");
  let heroName = document.getElementById("hero");

  if (count % 2 != 0) {
    backGround.style.backgroundColor = "#70964b";
    heroName.innerHTML = "Hulk";
    heroName.style.fontSize = "130px";
    heroName.style.letterSpacing = "6px";
  }
  if (count % 2 == 0) {
    backGround.style.backgroundColor = "#ffb300";
    heroName.innerHTML = "Bruce Banner";
    heroName.style.fontSize = "60px";
    heroName.style.letterSpacing = "2px";
  }
}
