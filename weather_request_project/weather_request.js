// Create a webpage to look up weather in a specific city.
// On submission of an input box, load the current weather from
// the OpenWeatherMap API.

var inputBox = document.querySelector("input");

// input box
var city = "test";
var url = "empty url";
var base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
var api_key = "&APPID=02eb5ea0b486efc9dccb386a405b1702&response=json";

inputBox.addEventListener("keydown", function (event){
  if (event.keyCode === 13){
   city = event.target.value;
   url = base_url + city + api_key;
  }
});

// api get request

var request = new XMLHttpRequest();
request.open('GET', url , true);

// Next Step:  Figure out how to maek get request above work.
// Code below is how it worked in the last excercise

// request.onload = function () {
//   console.log(request.status); // HTTP status code
//   console.log(request.response); // response body
//   console.log(JSON.parse(request.response))
// }


// "{}{}{}".format("http://api.openweathermap.org/data/2.5/weather?q=", city, "&APPID=02eb5ea0b486efc9dccb386a405b1702&response=json"))

// var r = "http://api.openweathermap.org/data/2.5/weather?q=city&APPID=02eb5ea0b486efc9dccb386a405b1702&response=json".replace("city", city)



// console.log(r)


//
// // get request
// var request = new XMLHttpRequest();
// request.open('GET', r , true);
//
// request.onload = function () {
//   console.log(request.status); // HTTP status code
//   console.log(request.response); // response body
//   console.log(JSON.parse(request.response))
// }
//
// request.send();
//
