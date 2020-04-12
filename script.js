

$("#citySearch").on("click", function(event){
    event.preventDefault();
    var cityName = $("#enterCity").val();
    var APIkey = "10c68bce60b4cc83708fe0615371b398";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" +APIkey;
    var queryURLtwo = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey;

    

   //  console.log(cityName);
   //  console.log(queryURL);
    

    $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response){
    
    $(".city").html("<h2>" + response.name + " " + "Current Weather</h2>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        var convertedTemp = (response.main.temp - 273.15) * 1.80 + 32;
        $(".convertedTemp").text("Temperature (F) " + convertedTemp.toFixed(2));

    // console.log(response);
    // console.log(response.main.humidity);
 });

 

 $.ajax({
    url: queryURLtwo,
    method: "GET"
  }).then(function(response){
          console.log(response);

   var convertedTemp2 = (response.list[0].main.temp -273.15) * 1.80 + 32;
   var convertedTemp3 = (response.list[1].main.temp -273.15) * 1.80 + 32;
   var convertedTemp4 = (response.list[2].main.temp -273.15) * 1.80 + 32;
   var convertedTemp5 = (response.list[3].main.temp -273.15) * 1.80 + 32;
   var convertedTemp6 = (response.list[4].main.temp -273.15) * 1.80 + 32;

   
   var dayOneTemp = $("<p>").text("Temp(F):" + convertedTemp2.toFixed(1));
   var dayTwoTemp = $("<p>").text("Temp(F):" + convertedTemp3.toFixed(1));
   var dayThreeTemp = $("<p>").text("Temp(F):" + convertedTemp4.toFixed(1));
   var dayFourTemp = $("<p>").text("Temp(F):" + convertedTemp5.toFixed(1));
   var dayFiveTemp = $("<p>").text("Temp(F):" + convertedTemp6.toFixed(1));

     
    var dayOneHumidity = $("<p>").text("Humidity:" + response.list[0].main.humidity);
     var dayTwoHumidity = $("<p>").text("Humidity:" + response.list[1].main.humidity);
     var dayThreeHumidity = $("<p>").text("Humidity:" + response.list[2].main.humidity);
     var dayFourHumidity = $("<p>").text("Humidity:" + response.list[3].main.humidity);
     var dayFiveHumidity = $("<p>").text("Humidity:" + response.list[4].main.humidity);

     var dayOneWind = $("<p>").text("Wind" + response.list[0].wind.speed);
     var dayTwoWind = $("<p>").text("Wind" + response.list[1].wind.speed);
     var dayThreeWind = $("<p>").text("Wind" + response.list[2].wind.speed);
     var dayFourWind = $("<p>").text("Wind" + response.list[3].wind.speed);
     var dayFiveWind = $("<p>").text("Wind" + response.list[4].wind.speed);


     $("#dayOne").append(dayOneTemp, dayOneHumidity, dayOneWind);
     $("#dayTwo").append(dayTwoTemp, dayTwoHumidity, dayTwoWind);
     $("#dayThree").append(dayThreeTemp, dayThreeHumidity, dayThreeWind);
     $("#dayFour").append(dayFourTemp, dayFourHumidity, dayFourWind);
     $("#dayFive").append(dayFiveTemp, dayFiveHumidity, dayFiveWind);
     $("#weatherBox").append("<h5>" + "Five Day" + "</h5>");
     



//  Tried to get the weather Icons, but kept getting undefined message in the console
//  var cdwCode = (response.list.weather[0].icon)    
// var weatherIcon = " http://openweathermap.org/img/wn/" + cdwCode +  "@2x.png"

// var dayOneImage = $("<img>").attr("scr", weatherIcon);
// console.log(dayOneImage);




     

 
   

  });

// var newDiv = $("<div>");
// newDiv.append(fiveDayTemp, fiveDayHumidity);
// $("weatherBox").append(newDiv);

 })
