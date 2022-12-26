function RainDrops(){
    var city = document.getElementById("input").value
    var cityLC = city.toLowerCase();
    document.getElementById("cityName").innerHTML ="Weather on " + city + ":"
    document.getElementById("details").style.visibility = "visible";
    document.getElementById("maxmin").style.visibility = "visible";
    
    if (city != ''){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityLC + "&units=metric" + "&APPID=a9b7687792836afff69773c1c37c4fad",
            type: "GET",
            dataType: "json",
            success: function(data){
                console.log(data);
                console.log(data.weather[0].main);
                console.log(data.main);
                document.getElementById("degrees").innerHTML = parseInt(data.main.temp) + "º C";
                if (data.weather[0].main == "Clear" ){
                    document.getElementById("icon").innerHTML = "<img src="+"img/icons/day_clear.png"+">" ;
                }
                if (data.weather[0].main == "Clouds" ){
                    document.getElementById("icon").innerHTML = "<img src="+"img/icons/cloudy.png"+">" ;
                }
                document.getElementById("max").innerHTML = parseInt(data.main.temp_max) + "º C";
                document.getElementById("min").innerHTML = parseInt(data.main.temp_min) + "º C";   
                document.getElementById("humidity").innerHTML = "Humidity is: " + parseInt(data.main.humidity) + "%";  
                document.getElementById("pressure").innerHTML = "Pressure is: " + parseInt(data.main.pressure) + "hPa" ;           
                document.getElementById("wind").innerHTML = "Wind speed is: " + (data.wind.speed) + " at " + data.wind.deg + "º";           

            }
        });

    }else{
        document.getElementById("cityName").innerHTML ="Field cannot be empty, please enter a city."
    }





}

