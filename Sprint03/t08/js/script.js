let name = [
  "Black Panther",
  "Captain America",
  "Captain Marvel",
  "Hulk",
  "Iron Man",
  "Spider-Man",
  "Thanos",
  "Thor",
  "Yon-Rogg",
];
let strength = [66, 79, 97, 80, 88, 78, 99, 95, 73];
let age = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];

//modified present divs
let place = document.getElementById("placeholder");
place.innerHTML = "";
let notify = document.getElementById("notification");
notify.innerHTML = "Not Sorted";

// create table
let table = document.createElement("table");
table.setAttribute("id", "table");
place.appendChild(table);

//create rows - <tr></tr>
let tableRow = document.createElement("tr");
table.appendChild(tableRow);

//create heades - <th></th>
var tablehead0 = document.createElement("th");
tablehead0.setAttribute("onclick", "sortTable(0)");
var tablehead1 = document.createElement("th");
tablehead1.setAttribute("onclick", "sortTable(1)");
var tablehead2 = document.createElement("th");
tablehead2.setAttribute("onclick", "sortTable(2)");

//add heades to row
tableRow.appendChild(tablehead0);
tableRow.appendChild(tablehead1);
tableRow.appendChild(tablehead2);

//add text to heades
var txt0 = document.createTextNode("Name");
var txt1 = document.createTextNode("Strength");
var txt2 = document.createTextNode("Age");
tablehead0.appendChild(txt0);
tablehead1.appendChild(txt1);
tablehead2.appendChild(txt2);

for (i = 0; i < name.length; i++) {
  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  let tableData0 = document.createElement("td");
  tableRow.appendChild(tableData0);
  let tableData1 = document.createElement("td");
  tableRow.appendChild(tableData1);
  let tableData2 = document.createElement("td");
  tableRow.appendChild(tableData2);

  let text0 = document.createTextNode(name[i]);
  let text1 = document.createTextNode(strength[i]);
  let text2 = document.createTextNode(age[i]);

  tableData0.appendChild(text0);
  tableData1.appendChild(text1);
  tableData2.appendChild(text2);
}

function sortTable(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0,
    sortHead = ["Name", "Strength", "Age"];
  table = document.getElementById("table");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        notify.innerHTML = `Sorting by ${dir.toUpperCase()}, order: ${
          sortHead[n]
        }`;
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        notify.innerHTML = `Sorting by ${dir.toUpperCase()}, order: ${
          sortHead[n]
        }`;
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
