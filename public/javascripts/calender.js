"use strict"

let date = new Date(),
  container = document.getElementsByClassName("container")[0];

container.style.height = `${400}px`
container.style.width = `${5.4/10*innerWidth}px`


function month_days(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

let cal = month_days(date.getMonth(), date.getFullYear());
// console.log(date.getFullYear())
// console.log(cal)
function day() {

  switch (date.getDay()) {  
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Fri";
    case 5:
      return "Sat";
    case 0:
      return "Sun";
  }

}
let Month = (month = 0) => {
  switch (new Date().getMonth() + month) {
    case 0:
      return "january"
    case 1:
      return "february"
    case 2:
      return "march"
    case 3:
      return "April"
    case 4:
      return "May"
    case 5:
      return "june"
    case 6:
      return "july"
    case 7:
      return "August"
    case 8:
      return "September"
    case 9:
      return "October"
    case 10:
      return "November"
    case 11:
      return "December"
  }
}

document.getElementById('month').innerHTML = `${Month()}`;
let hour, min, sec;
setInterval(() => {
  date = new Date();
  let hour_min = () => {
    min = date.getMinutes();
    hour = date.getHours();
    min = min < 10 ? `0${min}` : min;
    hour = hour < 10 ? `0${hour}` : hour;
    sec = date.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;

    return {
      hour: hour,
      min: min,
      sec: sec
    }
  };
  document.getElementsByClassName('time')[0].innerHTML = `${day()} ${hour_min()['hour']}:${hour_min()['min']}:${hour_min()['sec']}`
}, 300)


let month_start = new Date(date.getFullYear(), date.getMonth(), 1);


for (let i = 0; i < cal; ++i) {
  document.getElementsByClassName('date_block')[month_start.getDay() - 1 + i].innerHTML = `    ${i+1}`;
}
document.getElementsByClassName('date_block')[date.getDate() + 2].style.backgroundColor = "chartreuse";
document.getElementsByClassName('date_block')[date.getDate() + 2].style.color = "white";