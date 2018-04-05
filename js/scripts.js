$(document).ready(function(){
    $('#submitWeather').click(function(){
        var city = $('#city').val();
        if(city != ''){

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=4656b15dcc1ffdb1cbec447000b30e52",
                type: "GET",
                datatype: "jsonp",
                success:function(data){
                    // console.log(data);
                    var widget = show(data);

                    $("#show").html(widget);

                    $("#city").val('');
                }
            });

        }else{
            $("#error").html('Field cannot be empty');
        }
    });

});

function show(data){
    return "<h2 style='font-size:40px; font-weight: bold;'>Current weather for "+ data.name +",  " + data.sys.country + "</h2>" +
    // "<h3><strong>Weather Status</strong>:" + weather.icon + "</h3>" +
    "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
    "<h3><strong>Description</strong>: "+ data.weather[0].main + "</h3>" +
    "<h3><strong>Temperature</strong>: " + data.main.temp + "</h3>" + 
    "<h3><strong>Pressure</strong>: " + data.main.pressure + "</h3>" +
    "<h3><strong>Humidity</strong>: " + data.main.humidity + "</h3>" +
    "<h3><strong>Maximum Temperature</strong>:" + data.main.temp_max + "</h3>" +
    "<h3><strong>Minimum Temperature</strong>:" + data.main.temp_min + "</h3>" +
    "<h3><strong>Wind Speed</strong>:" + data.main.speed + "</h3>" + 
    "<h3><strong>Wind Direction</strong>: " + data.main.deg + "</h3>";

}