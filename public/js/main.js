const submitBtn = document.getElementById('submit');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_day = document.getElementById('today_day');

const date = new Date();
const date_no = date.getDate();

var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const days = weekday[date.getDay()];
day.innerText = days;
var month = new Array();
month[0] = 'Jan';
month[1] = 'Feb';
month[2] = 'Mar';
month[3] = 'Apr';
month[4] = 'May';
month[5] = 'Jun';
month[6] = 'Jul';
month[7] = 'Aug';
month[8] = 'Sep';
month[9] = 'Oct';
month[10] = 'Nov';
month[11] = 'Dec';

const mon = month[date.getMonth()];
today_day.innerText = `${date_no} ${mon}`;
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityname.value;

  if (cityVal === '') {
    city_name.innerText = `Plz write name before search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8801c9de392c4178edc31592e09f0776`;
      const response = await fetch(url);
      const data = await response.json();
      const arr = [data];
      city_name.innerText = `${arr[0].name} ,${arr[0].sys.country}`;
      temp.innerText = arr[0].main.temp;
      temp_status.innerText;
      const tempStatus = arr[0].weather[0].main;
      if (tempStatus == 'Sunny') {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tempStatus == 'Clouds') {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempStatus == 'Rainy') {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #44c3de'></i>";
      }
    } catch (error) {
      city_name.innerText = `Plz enter city name properly`;
    }
  }
};
submitBtn.addEventListener('click', getInfo);
{
}
