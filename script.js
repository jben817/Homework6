

$("#citySearch").on("click", function(event){
    event.preventDefault();
    var cityName = $("#enterCity").val();
    var APIkey = "10c68bce60b4cc83708fe0615371b398";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" +APIkey;
    var queryURLtwo = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIkey;

    

    console.log(cityName);
    console.log(queryURL);
    

    $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response){
    
    $(".city").html("<h2>" + response.name + " " + "Current Weather</h2>");
    $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".temp").text("Temperature: " + response.main.temp);
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

     var dayOneTemp = $("<p>").text("Temp:" + response.list[0].main.temp)
     var dayOneHumidity = $("<p>").text("Humidity:" + response.list[0].main.humidity)
     var dayTwoHumidity = $("#dayTwo").text("Humidity:" + response.list[1].main.humidity)
     var dayThreeHumidity = $("#dayThree").text("Humidity:" + response.list[2].main.humidity)
     var dayFourHumidity = $("#dayFour").text("Humidity:" + response.list[3].main.humidity)
     var dayFiveHumidity = $("#dayFive").text("Humidity:" + response.list[4].main.humidity)


     console.log(dayOneTemp)
     $("#dayOne").append(dayOneHumidity);
     $("dayOne").prepend(dayOneTemp);
     

 
   

  });

// var newDiv = $("<div>");
// newDiv.append(fiveDayTemp, fiveDayHumidity);
// $("weatherBox").append(newDiv);

 })
