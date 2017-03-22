var days =document.getElementsByClassName('week');
var weekdays =document.querySelectorAll('.week');

function calendar() {
  for(var i=0; i < days.length; i++){
    days[i].classList.remove('color1');
    days[i].classList.remove('color2');
    days[i].classList.remove('color3');

    var date1 = document.getElementById('first_day').value;
    console.log(date1.textContent)
    var year1 = new Date(date1);
    var day1 = year1.getDay();

    var date2 = document.getElementById('second_day').value;
    console.log(date2);
    var year2 = new Date(date2);
    var day2 = year2.getDay();

    if(day1 === day2){
      weekdays[day1].classList.add('color3');
    }
    else{
      weekdays[day1].classList.add('color1');
      weekdays[day2].classList.add('color2');
    }
  }
}
