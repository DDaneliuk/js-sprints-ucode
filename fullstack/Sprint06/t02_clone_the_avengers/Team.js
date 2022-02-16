exports.Team = class {
    constructor(id, avengers) {
      this.id = id;
      this.avengers = avengers;
    }
    clone() {
      return Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
    }
    battle(damage) {
      this.avengers.map((item) => {
        item.damage(damage);
      });
      this.avengers = this.avengers.filter((item) => {
        if (item.hp > 0) {
          return item;
        }
      });
    }
    calculateLosses(clonedTeam) {
      if (this.avengers.length == clonedTeam.avengers.length) {
        console.log(`We haven't lost anyone in this battle!`);
      } else {
        let result = clonedTeam.avengers.length - this.avengers.length;
        console.log(`In this battle we lost ${result} Avengers`);
      }
    }
  };