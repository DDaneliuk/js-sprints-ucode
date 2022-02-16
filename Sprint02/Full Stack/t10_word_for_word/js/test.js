const array = ["🐑", 1, 2, "🐑", "🐑", 3];

array.filter((item, index) => {
  return array.indexOf(item) === index;
});
