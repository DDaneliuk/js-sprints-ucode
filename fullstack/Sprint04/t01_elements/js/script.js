var list = document.getElementsByTagName("li");

for (i = 0; i < list.length; i++) {
  // add missing or wrong class
  var cls = list[i].getAttribute("class");
  if (cls == null || (cls != "good" && cls != "evil" && cls != "unknown")) {
    list[i].setAttribute("class", "unknown");
  }

  // to add a break before circles.
  var newDiv = document.createElement("div");
  list[i].append(newDiv);

  // add missing data-element // add circles
  var dataEl = list[i].getAttribute("data-element");

  if (dataEl == null) {
    list[i].setAttribute("data-element", "none");

    circle = document.createElement("div");
    circle.setAttribute("class", "elem");
    list[i].append(circle);

    line = document.createElement("div");
    line.setAttribute("class", "line");
    circle.append(line);
  } else {
    var dataElArray = dataEl.split(" ");

    for (a = 0; a < dataElArray.length; a++) {
      circle = document.createElement("div");
      list[i].append(circle);
      circle.setAttribute("class", "elem " + dataElArray[a]);
    }
  }
}
