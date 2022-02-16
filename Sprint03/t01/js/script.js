function getFormattedDate(dateObject) {
  let date = dateObject.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  let month = dateObject.getMonth() + 1;
  let year = dateObject.getFullYear();
  let hour = dateObject.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minute = dateObject.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = week[dateObject.getDay()];
  return `${date}.${month}.${year} ${hour}:${minute} ${day}`;
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date("42 03:24:00");
console.log(getFormattedDate(date0));
// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));
// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));
// 01.01.2042 03:24 Wednesday
