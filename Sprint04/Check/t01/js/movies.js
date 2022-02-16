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
        this.favorites = `<span class="heart red">&#10084;</span>`
    }
    removeFromFavorite(){
        favorites.delete(this);
        this.favorites = `<span class="heart">&#10084;</span>`
    }
}

let starWars = new Movie({
    title: "Star Wars",
    poster: "assets/images/starwars.jpg",
    date: "May 25, 1977",
    info: "The galaxy is in a period of civil war. Rebel spies have stolen plans to the Galactic Empire's Death Star, a moon-sized space station capable of destroying an entire planet. Princess Leia, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Sith Lord Darth Vader, an agent to the Empire. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who, along with protocol droid C-3PO, flees in an escape pod to the desert planet Tatooine.",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
    favorites: `<span class="heart">&#10084;</span>`
})

let theGreenMile = new Movie({
    title: "The Green Mile",
    poster: "assets/images/greenmile.jpg",
    date: "Dec 9, 1999",
    info: "At a Louisiana assisted-living home in 1999, elderly retiree Paul Edgecomb becomes emotional while viewing the film Top Hat. His companion Elaine becomes concerned, and Paul explains to her that the film reminded him of events that he witnessed in 1935, when he was a correctional officer at Cold Mountain Penitentiary's death row, nicknamed 'The Green Mile'.",
    actors: ["Tom Hanks", "David Morse", "Bonnie Hunt", "Michael Clarke Duncan"],
    favorites: `<span class="heart">&#10084;</span>`
})

let alien = new Movie({
    title: "Alien",
    poster: "assets/images/alien.jpg",
    date: "May 25, 1979",
    info: "The commercial space tug Nostromo is on a return trip back to Earth with a seven-member crew in stasis: Captain Dallas, Executive Officer Kane, Warrant Officer Ripley, Navigator Lambert, Science Officer Ash, and two engineers, Parker and Brett. Detecting a transmission, the ship's computer, Mother, awakens the crew. Company policy requires any potential distress signal be investigated, so they land on the moon, sustaining damage from its atmosphere and rocky landscape. Parker and Brett repair the ship while Dallas, Kane, and Lambert head out to investigate. They discover the signal comes from a derelict alien ship and enter it, losing communication with the Nostromo. Ripley deciphers part of the transmission, determining it to be a warning, but cannot relay this information to those on the derelict ship.",
    actors: ["Sigourney Weaver", "Tom Skerritt", "Veronica Cartwright", "Harry Dean Stanton"],
    favorites: `<span class="heart">&#10084;</span>`
})

let braveheart = new Movie({
    title: "Braveheart",
    poster: "assets/images/braveheart.jpg",
    date: "May 24, 1995",
    info: "In 1280, King Edward 'Longshanks' invades and conquers Scotland following the death of Alexander III of Scotland, who left no heir to the throne. Young William Wallace witnesses Longshanks' treachery, survives the deaths of his father and brother, and is taken abroad on a pilgrimage throughout Europe by his paternal uncle Argyle, where he is educated.",
    actors: ["James Robinson", "Sean Lawlor", "Sandy Nelson", "James Cosmo"],
    favorites: `<span class="heart">&#10084;</span>`
})

let dieHard = new Movie({
    title: "Die Hard",
    poster: "assets/images/diehard.jog",
    date: "July 20, 1988",
    info: "On Christmas Eve 1988, NYPD Detective John McClane arrives in Los Angeles intending to reconcile with his estranged wife, Holly. He is driven to Nakatomi Plaza by his driver, Argyle, to attend a Christmas party held by Holly's employer, the Nakatomi Corporation; Argyle waits for McClane in the garage. While McClane changes clothes, the tower is seized by a German radical, Hans Gruber and his heavily armed team: Karl and his brother Tony, Franco, Theo, Alexander, Marco, Kristoff, Eddie, Uli, Heinrich, Fritz, and James. Those inside the tower are taken hostage, except for McClane, who slips away.",
    actors: ["Bruce Willis", "Bonnie Bedelia", "Reginald VelJohnson", "Paul Gleason"],
    favorites: `<span class="heart">&#10084;</span>`
})

export let favorites = new Set();
export let movies = new Set();

movies.add(starWars);
movies.add(theGreenMile);
movies.add(alien);
movies.add(braveheart);
movies.add(dieHard);