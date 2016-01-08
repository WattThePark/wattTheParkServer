var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
var global_time=0

function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	global_time =hr*3600+min*60+sec
	if(hr < 10){
		hr = "0" + hr
	}
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec

	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){

	//document.getElementById("reset").onclick = chronoReset
	start = new Date()

			var delay = ( function() {
			var timer = 0;
			return function(callback, ms) {
				clearTimeout (timer);
				timer = setTimeout(callback, ms);
			};
		})();

/*	delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 90%,rgba(64,187,106,1) 90%)';
		 document.getElementById("text").innerHTML="10 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 80%,rgba(64,187,106,1) 80%)';
		document.getElementById("text").innerHTML="20 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 70%,rgba(64,187,106,1) 70%)';
		document.getElementById("text").innerHTML="30 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 60%,rgba(64,187,106,1) 60%)';
		document.getElementById("text").innerHTML="40 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 50%,rgba(64,187,106,1) 50%)';
		document.getElementById("text").innerHTML="50 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 40%,rgba(64,187,106,1) 40%)';
		document.getElementById("text").innerHTML="60 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 30%,rgba(64,187,106,1) 30%)';
		document.getElementById("text").innerHTML="70 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 20%,rgba(64,187,106,1) 20%)';
		document.getElementById("text").innerHTML="80 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 10%,rgba(64,187,106,1) 10%)';
		document.getElementById("text").innerHTML="90 Watts";
		delay(function(){
		// do stuff
		document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 0%,rgba(64,187,106,1) 0%)';
		document.getElementById("text").innerHTML="100 Watts";
		delay(function(){
		// do stuff
		document.getElementById("image").src="./images/batterie-fin.png";

		document.getElementById("text").innerHTML="Vous avez généré 100 Watts <br/>";
		}, 1000 );
		}, 1000 );
		}, 1000 );
		}, 1000 );
		}, 1000 );

		}, 1000 );
		}, 1000 );

		}, 1000 );
		}, 1000 );
		}, 1000 );


		}, 1000 );*/


	chrono()
}
function chronoContinue(){

	//document.getElementById("reset").onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "00:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "00:00:00:000"

}
function chronoStop(){
	tmp = 1

	//document.getElementById("reset").onclick = chronoStopReset
	clearTimeout(timerID)
}
