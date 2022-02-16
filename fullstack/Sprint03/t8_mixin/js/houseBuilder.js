let houseBlueprint = {
  adress: this.adress,
  date: {
    toDateString: function () {
      return new Date();
    },
  },
  description: this.description,
  owner: this.owner,
  size: this.size,
  getDaysToBuild: function () {
    return this.size / this._building_speed;
  },
};
function HouseBuilder(
  adress,
  description,
  owner,
  size,
  roomCount,
  _building_speed
) {
  this.adress = adress;
  this.description = description;
  this.owner = owner;
  this.size = size;
  this.roomCount = roomCount;
  this.getDaysToBuild = this.getDaysToBuild;
  this._building_speed = 0.5;
}

HouseBuilder.prototype = houseBlueprint;
