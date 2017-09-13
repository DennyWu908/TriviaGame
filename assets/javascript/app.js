// When the web page is first loaded, the trivia game and timer will be hidden.

$(document).ready(function() {

	$(".container").hide();

	// Below, I'm creating variables for the actual timer and the actual time interval for the countdown. The user will have one minute to finish the quiz.

	var timeLeft = 60;

	var intervalId;

	// Here is a variable to keep track of how many questions the user has answered correctly.

	var score = 0;

	// This function will increase the score variable by one when a correct answer is clicked.

	$(".correct").on("click", addScore);
	$(".correct").on("click", blankQuestions);

	function addScore() {

		score++;

	}

	// These are a corresponding variable and function for keeping track of incorrect answers.

	var wrongScore = 0;

	$(".incorrect").on("click", addWrongScore);
	$(".incorrect").on("click", blankQuestions);

	function addWrongScore() {

		wrongScore++;

	}

	// This variable will keep track of the number of questions left unanswered. This number will decrease with each question the user answers.

	var blank = 5;

	function blankQuestions() {

		blank--;

	}

	// The trivia questions will appear and the timer will start when the user hits the Start button.

	$(".startButton").on("click", run);

	$(".startButton").click(function() {
		$(".container").show();
		$(".startButton").hide();
	});

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
			totalScore();

		}
	}

	function stop() {

		clearInterval(intervalId);

	}

	// Once time runs out, the div containing the questions will be replaced by a new div containing the results of the game, including the user's final score.

	function totalScore() {

		$(".container").empty();

		$(".container").html("<h1>All Done!</h1>")

		var correctDiv = $("<div class='answersCorrect'>")
		correctDiv.html("<h3>Correct Answers: " + score + "</h3>")

		$(".container").append(correctDiv);

		var incorrectDiv = $("<div class='answersIncorrect'>")
		incorrectDiv.html("<h3>Incorrect Answers: " + wrongScore + "</h3>")

		$(".container").append(incorrectDiv);

		var blankDiv = $("<div class='answersBlank'>")
		blankDiv.html("<h3>Unanswered: " + blank + "</h3>")

		$(".container").append(blankDiv);
	}
})