let compareData = new Set();
let searchData = new Set();
Set.prototype.get = function(index){return [...this][index]};
class superHero{
    constructor(name, fullName, combat, durability, intelligence, power, speed, strength){
        this.name = name;
        this.fullName = fullName;
        this.combat = combat;
        this.durability = durability;
        this.intelligence = intelligence;
        this.power = power;
        this.speed = speed;
        this.strength = strength;
    }
}
let searchDataElement;
let randomDataElement;

let searchResult = document.querySelector('.search-result');

function search(){
    let name = document.querySelector('#heroname');
    fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/983399968804933/search/${name.value}`)
    .then(function(resp){return resp.json()})
    .then(function(data){
        searchData.clear();
        searchResult.innerHTML = '';
        if(data.response == "error"){
            alert(data.error);
        }else{
            data.results.forEach(element => {
                searchDataElement = new superHero(`${element.name}`, `${element.biography["full-name"]}`, `${element.powerstats.combat}`, `${element.powerstats.durability}`, 
                    `${element.powerstats.intelligence}`, `${element.powerstats.power}`, `${element.powerstats.speed}`, `${element.powerstats.strength}`);
                searchData.add(searchDataElement);
                searchResult.innerHTML += `<div class="superhero" onclick="addToCompare(${searchData.size - 1})">
                                                <p>${searchDataElement.name}</p>
                                                <p>${searchDataElement.fullName}</p>
                                            </div>`
            })
        }
    })
}

function random(){
    let random = getRandomIntInclusive(1, 731);
    fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/983399968804933/${random}`)
    .then(function(resp){return resp.json()})
    .then(function(data){
        searchData.clear();
        searchResult.innerHTML = '';
        randomDataElement = new superHero(`${data.name}`, `${data.biography["full-name"]}`, `${data.powerstats.combat}`, `${data.powerstats.durability}`, 
        `${data.powerstats.intelligence}`, `${data.powerstats.power}`, `${data.powerstats.speed}`, `${data.powerstats.strength}`);
        searchData.add(randomDataElement);
        searchResult.innerHTML += `<div class="superhero" onclick="addToCompare(${searchData.size - 1})">
                                                <p>${randomDataElement.name}</p>
                                                <p>${randomDataElement.fullName}</p>
                                            </div>`
    })
}

function addToCompare(n){
    compareData.add(searchData.get(n));
    let compareCount = document.querySelector('#compare-count');
    compareCount.innerHTML = compareData.size;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}



// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function compare() {

  // Create the data table.
  var data = new google.visualization.DataTable();
        data.addColumn('string', ``);
        data.addColumn('number', 'combat');
        data.addColumn('number', 'durability');
        data.addColumn('number', 'intelligence');
        data.addColumn('number', 'power');
        data.addColumn('number', 'speed');
        data.addColumn('number', 'strength');
    compareData.forEach(element => {
        console.log(element);
        
        data.addRows([
            [element.name, Number(element.combat), Number(element.durability), Number(element.intelligence), Number(element.power), Number(element.speed), Number(element.strength)]
        ]);
    })


  // Set chart options
  var options = {
                 width:`100%`,
                 height:400,
                 backgroundColor: 'gray'
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.querySelector('.charts'));
  chart.draw(data, options);
}