$(document).ready(function() {

	// Below, I'm creating variables for the actual timer and the actual time interval for the countdown. The user will have one minute to finish the quiz.

	var timeLeft = 60;

	var intervalId;

	// Here is a variable to keep track of how many questions the user has answered correctly.

	var score = 0;

	// The timer will start when the user hits the Start button.

	$(".startButton").on("click", run);

	// The number of seconds remaining will decrease by 1 every second.

	function run() {
		intervalId = setInterval(decrement, 1000);
	}

	// The timer will be displayed on the web page and stop running at 0 seconds.

	function decrement() {

		timeLeft--;

		$(".timer").html("<h3>Time Remaining: " + timeLeft + " Seconds</h3>")

		if (timeLeft === 0) {

			stop();

		}
	}

	function stop() {

		clearInterval(intervalId);

	}

})