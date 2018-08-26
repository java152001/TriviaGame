$(document).ready(function() {

    // object that determines all of our questions, possible answers, correct answer, and corresponding
    // correct image.
var questions = [
        {question: "not used"},
        {
        question: "What is the name of the city Ash is from?",
        options: ["Phoenix", "Pallet", "Saffron", "Tokyo"],
        correct: "Pallet",
        image: "assets/images/professor_oak.jpg"},
        {
        question: "Which is the first pokemon in the national pokedex?",
        options: ["Pikachu", "Dragonite", "Bulbasaur", "Ponyta"],
        correct: "Bulbasaur",
        image: "assets/images/bulbasaur.jpg"},
        {
        question: "How many evolutions does eevee have?",
        options: ["3", "5", "8", "10"],
        correct: "8",
        image: "assets/images/eevee.jpg"},
        {
        question: "Which of the following is a generation 2 starter?",
        options: ["Bidoof", "Totodile", "Hoothoot", "Lugia"],
        correct: "Totodile",
        image: "assets/images/totodile.png"},
        {
        question: "Which pokeball has the highest capture rate?",
        options: ["Masterball", "Pokeball", "Heavy ball", "Quick ball"],
        correct: "Masterball",
        image: "assets/images/masterball.png"},
        {
        question: "Regular repels will last how long?",
        options: ["50 steps", "100 steps", "150 steps", "200 steps"],
        correct: "100 steps",
        image: "assets/images/repel.jpg"},
        {
        question: "Which of the following WON'T evolve from a Moon stone?",
        options: ["Clefairy", "Nidorino", "Snubble", "Jigglypuff"],
        correct: "Snubble",
        image: "assets/images/snubble.jpg"},
        {
        question: "Which of the following is NOT super effective vs dragon types?",
        options: ["Ice Attacks", "Dark Attacks", "Fairy Attacks", "Dragon Attacks"],
        correct: "Dark Attacks",
        image: "assets/images/dark_attack.jpg"},
        {
        question: "What do you have to get to wake up Snorlax?",
        options: ["Alarm Clock", "Poke Flute", "Smelling Salts", "Bucket of Water"],
        correct: "Poke Flute",
        image: "assets/images/snorlax.jpg"},
        {
        question: "Which pokemon evolves when you trade it?",
        options: ["Haunter", "Hitmonchan", "Wooper", "Mew"],
        correct: "Haunter",
        image: "assets/images/Haunter.jpg"}]

var questionTrack = 1

var correct = 0;
var wrong = 0;

var countDown = 20;
var intervalId;

$(".start").on("click", function() {

    //empties the container div
    $("#container").empty();

    //creates a div for the question to go
    var question_space = $("<div>");
    question_space.attr("id","question-space");
    //puts the question div into the container div
    $("#container").html(question_space);
    //creates a div for the timer to go
    var timer_space = $("<div>");
    timer_space.attr("id", "timer-space");
    timer_space.html("<h2>Time Remaining: 00:20</h2>");
    //adds the timer div to the container
    $("#container").append(timer_space);
    //creates a div for the answers to go
    var answer_space = $("<div>");
    answer_space.attr("id","answer-space");
    //adds the answer space to the div
    $("#container").append(answer_space);

    //runs the generate questions function to start the game
    generateQuestion(questionTrack);

});

    
// function that basically runs the whole game.  Requires an argument of what question we're on.  Will 
// take the question that we're on and fill the question space with the proper question and then run the
// render questions function in order to generate the selections.  Lastly there is a conditional that will
// check to see what answer was chosen and whether it was correct or not.  Once all the questions are finished
// will take to a score summary screen.
function generateQuestion(questionNumber) {
    // checks to see if we've gone through all the questions, and if so takes to score summary
    if (questionNumber < 11) {
        // updates the question and timer
        $("#question-space").text(questions[questionNumber].question);
        $("#timer-space").html("<h2>Time Remaining: 00:20</h2>");
        // resets the timer and starts the decrement function on a 1 second timer
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        // runs renderAnswers function to generate the answer options.
        renderAnswers(questionNumber);
        // determines what the correct answer is from the questions object
        var correctAnswer = questions[questionNumber].correct;
        // event handler waiting for click
        $(".questions").on("click", function() {
            // conditional checking to see if the correct answer was picked or not.  
            if ($(this).text() === correctAnswer) {
                // tracks which question we're on and moves to the next one.
                questionTrack++
                // increments the tracker for number of correct questions.
                correct++;
                // resets the timer
                clearInterval(intervalId);
                countDown = 20;
                // updates the DOM if we get the question right
                $("#question-space").text("You're right! It's " + correctAnswer + "!");
                $("#answer-space").empty();
                $("#answer-space").append("<img src='" + questions[questionNumber].image + "' </img>");
                // waits 3 seconds before re-running the function again for the next question.
                setTimeout(function() {
                    generateQuestion(questionTrack);
                }, 3000);
            }
            // all of these are pretty similar to above but inversed
            else {
                questionTrack++;
                wrong++;
                clearInterval(intervalId);
                countDown = 20;
                $("#question-space").text("Ooh sorry wrong, the correct answer was " + correctAnswer + ".");
                $("#answer-space").html("<img src='assets/images/Sad-Pikachu.jpg' </img>");
                setTimeout(function() {
                    generateQuestion(questionTrack);
                }, 3000);
            }
        });
    }   
        // runs the score summary function if we are past the 10th question.
        else { 
            scoreSummary();
        }    
}

// updates the DOM with the summary of how you did and asks if you want to play again.
function scoreSummary() {
    $("#question-space").empty();
    clearInterval(intervalId);
    $("#timer-space").empty()
    $("#answer-space").empty();
    summary = "<h1>Here's how you did! <br>Number Correct: " + correct + "<br>Number Wrong: " + wrong + "</h1>";
    $("#question-space").html(summary);
    var playAgain = $("<h3>");
    playAgain.attr("class", "start")
    playAgain.text("Click here if you want to play again!");
    $("#answer-space").append(playAgain);
    questionTrack = 1
    correct = 0;
    wrong = 0;

    $(".start").on("click", function() {
        generateQuestion(questionTrack);
    })
}


// Passes in the array for the question we're on and generates the answer options.
function renderAnswers(questionNumber) {
    $("#answer-space").empty();

    for (i = 0; i < questions[questionNumber].options.length; i++) {
        var questionBox = $("<div>");
        questionBox.attr("id","question-box");
        questionBox.attr("data-value", [i]);
        questionBox.attr("class","questions");
        questionBox.text(questions[questionNumber].options[i]);
        $("#answer-space").append(questionBox);
    }
}

// function that controls the countdown timer.
function decrement() {

    countDown--;
    // re-formats our seconds when we get to less then 10 seconds remaining.
    if (countDown < 10) {
        countDown = "0" + countDown;
    }

    $("#timer-space").html("<h2>Time Remaining: 00:" + countDown + "</h2>");
    // checks to see if the player has run out of time and if so alerts to the next question and counts
    // as wrong
    if (countDown <= 0) {

        rightAnswer = questions[questionTrack].correct;

        $("#question-space").text("Oops times up, the correct answer was " + rightAnswer);
        $("#timer-space").html("<h2>Time Remaining: 00:00</h2>");

        clearInterval(intervalId);

        setTimeout(function() {
            generateQuestion(questionTrack);
          }, 3000);

        questionTrack++;

        wrong++;

        countDown = 20;
    }
}

});