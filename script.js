
$(document).ready(function(){
var apiKey = 'dfd5d7bb1d63711fb57883ec67a77c90';
var canvas = document.getElementById('current-temp');
var context = canvas.getContext('2d');

	$('.weather-form').submit(function(){
		//keep the form from submitting
		event.preventDefault();
		//get the user input
		var cityText = $('.city').val();

		//built the url from the user input and apikey
		var url = "http://api.openweathermap.org/data/2.5/forecast/city?q="+cityText+",US&units=imperial&APPID=" + apiKey;
				
				//get the JSON from the constructed URL
			$.getJSON(url, function(weatherData){
				console.log(weatherData);
				//set up a variable for the user's city temp
				currentTemp = weatherData.list[0].main.temp;
				currentMax = weatherData.list[0].main.temp_max;
				currentMin = weatherData.list[0].main.temp_min;
				weatherIcon = weatherData.list[0].weather[0].icon;
				weatherDescription = weatherData.list[0].weather[0].description;
				console.log(weatherDescription)
				$('.maxTemp').html("<span>Max Temp</span> <br>"+currentMax + ' F');
				//$(currentMax).css("{}");

				$('.minTemp').html("<span>Min Temp</span> <br>"+currentMin + ' F');
				//$(currentMax).css("{}");

				$('.description').html("<span>Current Conditions</span> <br>"+weatherDescription);

				var src1 = "http://openweathermap.org/img/w/"+weatherIcon+".png";
				$('.weather-icon').attr("src", src1);

				animate(0);
			});
		});

			function animate(current){
				var tempColor = '#ff5964';
				context.strokeStyle = tempColor;
				context.lineWidth = 15;	

			context.beginPath();
			context.arc(155,155,60,Math.PI * 1.5, Math.PI * 1.5, Math.PI* 3);
			context.fillStyle = '#ffffff';
			context.fill(); 

			//clear out the canvas
			context.clearRect(0,0,300,300);

			//ready to draw
			context.beginPath();

			context.arc(155,155,70, Math.PI * 1.5, (current/100) * (Math.PI * 1.5) + (Math.PI*1.5));
			//drar that circle!
			context.stroke();

			context.font="35px fantasy";
			context.fillText(currentTemp+" F", 110, 170);


			current++;
			if(current < currentTemp){
				requestAnimationFrame(function(){
					animate(current);
				})
			}
		}
	});

