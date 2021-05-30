function* generator() {
  i = 1;
  while (true) {
    let secondAsk = +prompt(`Previous result: ${i}. Enter a new number`);
    if (+secondAsk > 10000) {
      secondAsk = 1;
    }
    if (+secondAsk) {
      i += secondAsk;
      yield i;
    } else if (secondAsk == "") {
      console.error(`Enter a number please`);
    } else {
      console.error(`Invalid number!`);
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
