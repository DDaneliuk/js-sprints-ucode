function FindHero(hero) {
    //Check Hero 1
    if (hero.team1 == "Avengers"|| hero.team2 == "S.H.I.E.L.D."
        && hero.universe == "Marvel" && hero.race == "human" && hero.eyeColor == "green"
        && hero.hairColor == "lightBrown/green"){
        alert("It is Black Widow");
    }
        else if(hero.team1 == "Justice League Of America"|| hero.team2 == "Teen Titans"
        && hero.universe == "DC Comics" && hero.race == "human or kryptonian" && hero.eyeColor == "blue"
        && hero.hairColor == "black"){
        alert("It is a Superman or Robin")
}
}
//Options for Hero 1 
let Widow = {
    team1: "Avengers",
    team2: "S.H.I.E.L.D.",
    universe: "Marvel",
    race: "human",
    eyeColor: "green",
    hairColor: "lightBrown/green",
};
//Options for Hero 2
let Super = {
    team1:"Justice League Of America", 
    team2:"Teen Titans",
    universe: "DC Comics",
    race: "human or kryptonian",
    eyeColor: "blue",
    hairColor: "black",
}
FindHero(Widow);
FindHero(Super);