"use strict";

function addWords(obj, wrds) {
  obj.words = obj.words + " " + wrds;
  obj.words = obj.words
    .split(" ")
    .filter((word) => word != "")
    .filter((value, index, self) => self.indexOf(value) === index)
    .join(" ");
}

function removeWords(obj, wrds) {
  let wordsArr = wrds
    .split(" ")
    .filter((word) => word != "")
    .filter((value, index, self) => self.indexOf(value) === index);
  obj.words = obj.words
    .split(" ")
    .filter((word) => word != "")
    .filter((word) => !wordsArr.includes(word))
    .filter((value, index, self) => self.indexOf(value) === index)
    .join(" ");
}

function changeWords(obj, oldWrds, newWrds) {
  removeWords(obj, oldWrds);
  addWords(obj, newWrds);
}

const obj = { words: "newspapers newspapers  books magazines" };

console.log(obj);
// {words: "newspapers newspapers  books magazines"}

addWords(obj, "radio newspaper");
console.log(obj);
// {words: "newspapers books magazines radio"}

removeWords(obj, "newspapers   radio");
console.log(obj);
// {words: "books magazines"}

changeWords(obj, "books radio  magazines", "tv internet");
console.log(obj);
// {words: "tv internet"}
