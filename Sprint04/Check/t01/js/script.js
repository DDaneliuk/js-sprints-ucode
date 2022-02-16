//import {movies, favorites} from "./movies.js";
class Movie{
    constructor(options){
        this.title = options.title;
        this.poster = options.poster;
        this.date = options.date;
        this.info = options.info;
        this.actors = options.actors;
        this.favorites = options.favorites;
    }
    addToFavorite(){
        favorites.add(this);
    }
    removeFromFavorite(){
        favorites.delete(this);
    }
}

let starWars = new Movie({
    title: "Star Wars",
    poster: "assets/images/starwars.jpg",
    date: "May 25, 1977",
    info: "The galaxy is in a period of civil war. Rebel spies have stolen plans to the Galactic Empire's Death Star, a moon-sized space station capable of destroying an entire planet. Princess Leia, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Sith Lord Darth Vader, an agent to the Empire. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who, along with protocol droid C-3PO, flees in an escape pod to the desert planet Tatooine.",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
    //favorites: `<span class="fav">&#10084;</span>`
})

let theGreenMile = new Movie({
    title: "The Green Mile",
    poster: "assets/images/greenmile.jpg",
    date: "Dec 9, 1999",
    info: "At a Louisiana assisted-living home in 1999, elderly retiree Paul Edgecomb becomes emotional while viewing the film Top Hat. His companion Elaine becomes concerned, and Paul explains to her that the film reminded him of events that he witnessed in 1935, when he was a correctional officer at Cold Mountain Penitentiary's death row, nicknamed 'The Green Mile'.",
    actors: ["Tom Hanks", "David Morse", "Bonnie Hunt", "Michael Clarke Duncan"],
    //favorites: `<span class="fav">&#10084;</span>`
})

let alien = new Movie({
    title: "Alien",
    poster: "assets/images/alien.jpg",
    date: "May 25, 1979",
    info: "The commercial space tug Nostromo is on a return trip back to Earth with a seven-member crew in stasis: Captain Dallas, Executive Officer Kane, Warrant Officer Ripley, Navigator Lambert, Science Officer Ash, and two engineers, Parker and Brett. Detecting a transmission, the ship's computer, Mother, awakens the crew. Company policy requires any potential distress signal be investigated, so they land on the moon, sustaining damage from its atmosphere and rocky landscape. Parker and Brett repair the ship while Dallas, Kane, and Lambert head out to investigate. They discover the signal comes from a derelict alien ship and enter it, losing communication with the Nostromo. Ripley deciphers part of the transmission, determining it to be a warning, but cannot relay this information to those on the derelict ship.",
    actors: ["Sigourney Weaver", "Tom Skerritt", "Veronica Cartwright", "Harry Dean Stanton"],
    //favorites: `<span class="fav">&#10084;</span>`
})

let braveheart = new Movie({
    title: "Braveheart",
    poster: "assets/images/braveheart.jpg",
    date: "May 24, 1995",
    info: "In 1280, King Edward 'Longshanks' invades and conquers Scotland following the death of Alexander III of Scotland, who left no heir to the throne. Young William Wallace witnesses Longshanks' treachery, survives the deaths of his father and brother, and is taken abroad on a pilgrimage throughout Europe by his paternal uncle Argyle, where he is educated.",
    actors: ["James Robinson", "Sean Lawlor", "Sandy Nelson", "James Cosmo"],
    //favorites: `<span class="fav">&#10084;</span>`
})

let dieHard = new Movie({
    title: "Die Hard",
    poster: "assets/images/diehard.jpg",
    date: "July 20, 1988",
    info: "On Christmas Eve 1988, NYPD Detective John McClane arrives in Los Angeles intending to reconcile with his estranged wife, Holly. He is driven to Nakatomi Plaza by his driver, Argyle, to attend a Christmas party held by Holly's employer, the Nakatomi Corporation; Argyle waits for McClane in the garage. While McClane changes clothes, the tower is seized by a German radical, Hans Gruber and his heavily armed team: Karl and his brother Tony, Franco, Theo, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. Those inside the tower are taken hostage, except for McClane, who slips away.",
    actors: ["Bruce Willis", "Bonnie Bedelia", "Reginald VelJohnson", "Paul Gleason"],
    //favorites: `<span class="fav">&#10084;</span>`
})

let favorites = new Set();
let movies = new Set();

movies.add(starWars);
movies.add(theGreenMile);
movies.add(alien);
movies.add(braveheart);
movies.add(dieHard);


let list = document.querySelector('.list');
let info = document.querySelector('.movie_info');
let active = 0;
function renderAll(set, setFav){
    
    list.innerHTML = "";
    let movie_info = '';
    document.querySelector('#all').classList.add('sort_active');
    document.querySelector('#fav').classList.remove('sort_active');
    document.querySelector('#all').disabled = true;
    document.querySelector('#fav').disabled = false;
    for(let movie of set){
        let li = document.createElement('li');
        li.setAttribute('onclick', 'renderActive(this)');
        li.setAttribute('class', 'movie_list');
        li.innerHTML = movie.title;
        list.appendChild(li);
        movie_info += `<div class="movie_card">
                            <div class="card_info">
                                <span class="fav">&#10084;</span>
                                <span class="movie_title">${movie.title}</span>
                                <span class="date">${movie.date}</span>
                                <ul class="actors_list">
                                    <li>${movie.actors[0]}</li>
                                    <li>${movie.actors[1]}</li>
                                    <li>${movie.actors[2]}</li>
                                    <li>${movie.actors[3]}</li>
                                </ul>
                                <span class="info">${movie.info}</span>
                            </div>
                            <img src="${movie.poster}">
                        </div>`
        info.innerHTML = movie_info;
    }
    let title = document.querySelectorAll('.movie_title');
    let favBut = document.querySelectorAll('.fav');
    let arr = [...setFav];
    if(arr.length!=0){
        for(let movie of setFav){
            for(let i=0; i<title.length; i++){
                if(title[i].innerHTML == movie.title){
                    favBut[i].setAttribute('class', 'favred');
                }
            }
        }
    }
    favBut = document.querySelectorAll('.fav');
    favRedBut = document.querySelectorAll('.favred');
    for(let i=0; i<favBut.length; i++){
        favBut[i].addEventListener("click", function(){
            movies.forEach((thisFilm)=>{
                let y = favBut[i].parentNode.childNodes;
                if(thisFilm.title == y[3].innerHTML){
                    thisFilm.addToFavorite();
                    favBut[i].setAttribute('class', 'favred');
                    active = document.querySelectorAll('.movie_list');
                    for(let i=0; i<active.length;i++){
                        if(active[i].classList.contains('active')){
                            active = i;
                        }
                    }
                    renderAll(movies, favorites);
                }
            })
        })
    }
    for(let i=0; i<favRedBut.length; i++){
        favRedBut[i].addEventListener("click", function(){
            favorites.forEach((thisFilm)=>{
                let y = favRedBut[i].parentNode.childNodes;
                if(thisFilm.title == y[3].innerHTML){
                    thisFilm.removeFromFavorite();
                    favRedBut[i].setAttribute('class', 'fav');
                    active = document.querySelectorAll('.movie_list');
                    for(let i=0; i<active.length;i++){
                        if(active[i].classList.contains('active')){
                            active = i;
                        }
                    }
                    renderAll(movies, favorites);
                }
            })
        })
    }    
    let movie_list = document.querySelectorAll('.movie_list');
    console.log(active)
    if(active == 0){
        movie_list[0].classList.add('active');
    }else {
        console.log(active.innerHTML);
        movie_list[active].classList.add('active');
    }
    console.log(document.querySelector('.active'));
    renderActive(document.querySelector('.active'));
    let movie_title = document.querySelectorAll('.movie_title');
    for(let i=0; i<movie_title.length; i++){
        movie_title[i].parentNode.parentNode.style.display = 'none';
    }
    movie_title[active].parentNode.parentNode.style.display = 'flex';

    favBut = document.querySelectorAll('.fav');
    for(let i=0; i<favBut.length; i++){
    }
}

renderAll(movies, favorites);

function renderFav(set){
    list.innerHTML = "";
    let movie_info = "";
    console.log("hello1")
    console.log(set);
    console.log(movies)
    document.querySelector('#fav').classList.add('sort_active');
    document.querySelector('#all').classList.remove('sort_active');
    document.querySelector('#fav').disabled = true;
    document.querySelector('#all').disabled = false;
    let arr = [...set];
    if(arr.length == 0){
        console.log("hello2")
        list.innerHTML = "it's empty";
    }else{
    for(let movie of set){
        console.log("hello")
        let li = document.createElement('li');
        li.setAttribute('onclick', 'renderActive(this)');
        li.setAttribute('class', 'movie_list');
        li.innerHTML = movie.title;
        list.appendChild(li);
        movie_info += `<div class="movie_card">
                            <div class="card_info">
                                <span class="favred">&#10084;</span>
                                <span class="movie_title">${movie.title}</span>
                                <span class="date">${movie.date}</span>
                                <ul class="actors_list">
                                    <li>${movie.actors[0]}</li>
                                    <li>${movie.actors[1]}</li>
                                    <li>${movie.actors[2]}</li>
                                    <li>${movie.actors[3]}</li>
                                </ul>
                                <span class="info">${movie.info}</span>
                            </div>
                            <img src="${movie.poster}">
                        </div>`
        info.innerHTML = movie_info;
        console.log(movies);
        }
        let movie_list = document.querySelectorAll('.movie_list');
        movie_list[0].classList.add('active');
        let movie_title = document.querySelectorAll('.movie_title');
        for(let i=0; i<movie_title.length; i++){
            movie_title[i].parentNode.parentNode.style.display = 'none';
        }
        movie_title[0].parentNode.parentNode.style.display = 'flex';
    }
}

let movie_list = document.querySelectorAll('.movie_list');

let movie_title = document.querySelectorAll('.movie_title');
for(let i=0; i<movie_title.length; i++){
    movie_title[i].parentNode.parentNode.style.display = 'none';
}
movie_title[0].parentNode.parentNode.style.display = 'flex';

function renderActive(this_film){
    let movie_title = document.querySelectorAll('.movie_title');
    for(let i=0; i<movie_title.length; i++){
        if (this_film.innerHTML == movie_title[i].innerHTML){            
            movie_title[i].parentNode.parentNode.style.display = 'flex';
        } else movie_title[i].parentNode.parentNode.style.display = 'none';
    }
    document.querySelector('.active').classList.remove('active');
    this_film.classList.add('active');
}
