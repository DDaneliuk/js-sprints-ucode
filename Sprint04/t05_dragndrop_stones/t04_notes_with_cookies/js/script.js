let pickBox = document.querySelectorAll(".block");

pickBox.forEach((box) => {
  box.addEventListener("click", clikPick);
});

function dragOnStart(event) {
  x = event.offsetX;
  console.log(x);
  y = event.offsetY;
  console.log(y);
}
function dragOnEnd(event) {
  this.style.top = event.pageY - y + "px";
  console.log(event.pageY);
  this.style.left = event.pageX - x + "px";
}

function clikPick() {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    this.addEventListener("dragstart", dragOnStart);
    this.addEventListener("dragend", dragOnEnd);
    this.draggable = "false";
  } else {
    this.removeEventListener("dragstart", dragOnStart);
    this.addEventListener("dragend", dragOnEnd);
    this.draggable = "true";
  }
}
