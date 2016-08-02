
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
			
				animate(0);
			});
		});
			function animate(current){
				var tempColor = '#fff';
				context.strokeStyle = tempColor;
				context.lineWidth = 10;

			

			context.beginPath();
			context.arc(155,155,60,Math.PI * 1.5, Math.PI * 1.5, Math.PI* 3);
			context.fillStyle = '#fff';
			context.fill(); 

			//clear out the canvas
			context.clearRect(0,0,300,300);

			//ready to draw
			context.beginPath();

			context.arc(155,155,70, Math.PI * 1.5, (current/100) * (Math.PI * 1.5) + (Math.PI*1.5));
			//drar that circle!
			context.stroke();

			context.fillText(currentTemp, 100, 100);

			current++;
			if(current < currentTemp){
				requestAnimationFrame(function(){
					animate(current);
				})
			}
		}
	});

