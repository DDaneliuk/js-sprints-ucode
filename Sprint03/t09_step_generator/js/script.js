function* generator() {
  let i = 1;
  while (1) {
    let secondPrompt = +prompt(`Previous result: ${i}. Enter a new number`);
    if (+secondPrompt > 10000) {
      secondPrompt = 0;
      i = 1;
    }
    if (+secondPrompt) {
      i += secondPrompt;
      yield i;
    } else if (secondPrompt == "") {
      console.log(`Enter a number please`);
    } else {
      console.log(`Invalid number!`);
    }
  }
}

var gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
