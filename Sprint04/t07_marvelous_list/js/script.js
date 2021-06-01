const movie = [
  {
    title: "John Wick",
    img: '<img src="assets/images/John_Wick_3.jpeg" alt="John_Wick."/>',
    date: "May 9, 2019",
    actors: ["Keanu Reeves", "Halle Berry", "Ian Mac", "Laurence Fishburne"],
    text: `John Wick is an American neo-noir action-thriller media
    franchise created by screenwriter Derek Kolstad and owned by
    SummitEntertainment. Keanu Reeves plays John Wick, a retired
    hitmanseeking vengeance for the killing of the dog given to him
    by hisrecently deceased wife, and for stealing his car.`,
  },
  {
    title: "Avengers: Endgame",
    img: '<img src="assets/images/avengers-end-game.jpeg" alt="Avengers-end-game."/>',
    date: "April 25, 2019",
    actors: [
      "Chris Evans",
      "Chris Evans",
      "Robert Downey Jr.",
      "Jeremy Lee Renner",
    ],
    text: `The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later.`,
  },
  {
    title: "Inception",
    img: '<img src="assets/images/inception.jpg" alt="Inception"/>',
    date: "July 22, 2010",
    actors: [
      "Leonardo Wilhelm DiCaprio",
      "Joseph Leonard Gordon-Levitt",
      "Tom Hardy",
      "Ellen Grace Philpotts-Page",
    ],
    text: `Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.`,
  },
  {
    title: "Spider-Man",
    img: '<img src="assets/images/spider-man.jpg" alt="Spider-man"/>',
    date: "September 24, 2012",
    actors: [
      "Tobias Vincent Maguire",
      " Kirsten Caroline Dunst",
      "William Dafoe",
      "James Edward Franco",
    ],
    text: `When Spider-Man first appeared in the early 1960s, teenagers in superhero comic books were usually relegated to the role of sidekick to the protagonist. The Spider-Man series broke ground by featuring Peter Parker, a high school student from Queens behind Spider-Man's secret identity and with whose.`,
  },
  {
    title: "Joker",
    img: '<img src="assets/images/joker.jpg" alt="Joker"/>',
    date: "October 02, 2019",
    actors: [
      "Joaquin Raphael Phoenix",
      "Robert Anthony De Niro",
      "Zazie Olivia Beetz",
      "Frances Hardman Conroy",
    ],
    text: `Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as The Joker and provides an alternative origin story for the character.`,
  },
  {
    title: "The Dark Knight",
    img: '<img src="assets/images/the-dark-knight.jpeg" alt="Dark-Knight"/>',
    date: "August 14, 2018",
    actors: [
      "Christian Charles Bale",
      "Gary Leonard Oldman",
      "Morgan Freeman",
      "Cillian Murphy",
    ],
    text: `The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman.`,
  },
];
let boxMovie = document.querySelector(".box-movie-list"),
  boxActros = document.querySelector(".box-main-actors");
console.log(boxMovie);

let box = document.querySelector(".box-movie-detail");
box.innerHTML = render(movie[0]);
boxMovie.innerHTML = renderMovieList(movie, 0);

document
  .querySelectorAll(".movie-button")
  .forEach((item, id) => item.addEventListener("click", changeMovie));

function render(arr) {
  result = "";
  result += `
      <div class="info-img-container">
          <div class="info-container">
      <div class="box-movie-info">
      <h2 class="title">${arr.title}</h2>
      <p class="date">${arr.date}</p>
      <div class="box-main-actors">
      ${renderActors(arr.actors)}
            </div>
      <div class="box-text">
        <p>
          ${arr.text}
        </p>
      </div>
      </div>
      </div>
      <div class="box-img">
     ${arr.img}
      </div>
  </div>
  `;
  return result;
}

function renderActors(arr) {
  result = "";
  arr.forEach((item) => {
    result += `<div>${item}</div>`;
    return result;
  });
  return result;
}

function renderMovieList(movie, id) {
  let result = "";
  for (let i = 0; i < movie.length; i++) {
    result += `
    <div id="${i}" class="movie-button ${+id === i ? "show" : ""}">${
      movie[i].title
    }</div>
    `;
  }
  return result;
}

function changeMovie(e) {
  let id = e.target.id;
  box.innerHTML = render(movie[id]);
  boxMovie.innerHTML = renderMovieList(movie, id);
  document
    .querySelectorAll(".movie-button")
    .forEach((item) => item.addEventListener("click", changeMovie));
}
