$('.navicon').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('navicon--active');
  $('.toggle').toggleClass('toggle--active');
});



$(document).ready(function() {
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q : "Portland,OR",
    units : "metric"
  };
   var  showWeather = function(weatherReport) {
     $('#white2').text(weatherReport.main.temp);
   };
});




