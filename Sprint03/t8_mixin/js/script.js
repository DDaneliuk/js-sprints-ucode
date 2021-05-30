const houseMixin = {
  wordReplace(a, b) {
    this.description = this.description.replace(a, b);
  },
  wordDelete(a) {
    this.description = this.description.replace(a, "");
  },
  wordInsertAfter(a, b) {
    this.description = this.description.replace(a, `${a} ${b}`);
  },
  wordEncrypt() {
    const input =
      `ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz`.split(
        ""
      );
    this.description = this.description
      .split("")
      .map((item) =>
        input.includes(item) ? input[input.indexOf(item) + 13] : item
      )
      .join("");
  },
  wordDecrypt() {
    this.wordEncrypt();
  },
};

const house = new HouseBuilder(
  "88 Crescent Avenue",
  "Spacious town house with wood flooring, 2-car garage, and a back patio.",
  "J. Smith",
  110,
  5
);

Object.assign(house, houseMixin);

console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);

house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

house.wordDecrypt();
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
