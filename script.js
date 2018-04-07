
// set the date we're counting down to
var countDownDate = new Date("November 6, 2018 00:00:01").getTime();
	//Update the count down every 1 second
var x = setInterval(function() {
	//Get todays date and time
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance% (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds =  Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + " days " + hours + " hours " +  minutes + " min " + seconds + "s ";

// If the count down is finished, write some text 

if (distance < 0) {
	clearInterval(x);
	document.getElementById("demo").innerHTML = "Today is Judgement Day. May god help us if we have failed";
   }
}, 1000);