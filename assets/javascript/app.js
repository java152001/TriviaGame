$(document).ready(function() {

var questions = [
        {question: "not used"},
        {
        question: "What is the name of the city Ash is from?",
        options: ["Phoenix", "Pallet", "Saffron", "Tokyo"],
        correct: "Pallet"},
        {
        question: "Which is the first pokemon in the national pokedex?",
        options: ["Pikachu", "Dragonite", "Bulbasaur", "Ponyta"],
        correct: "Bulbasaur"},
        {
        question: "How many evolutions does eevee have?",
        options: ["3", "5", "8", "10"],
        correct: "8"},
        {
        question: "Which of the following is a generation 2 starter?",
        options: ["Bidoof", "Totodile", "Hoothoot", "Lugia"],
        correct: "Totodile"},
        {
        question: "Which pokeball has the highest capture rate?",
        options: ["Masterball", "Pokeball", "Heavy ball", "Quick ball"],
        correct: "Masterball"},
        {
        question: "Regular repels will last how long?",
        options: ["50 steps", "100 steps", "150 steps", "200 steps"],
        correct: "100 steps"},
        {
        question: "Which of the following WON'T evolve from a Moon stone?",
        options: ["Clefairy", "Nidorino", "Snubble", "Jigglypuff"],
        correct: "Snubble"},
        {
        question: "Which of the following is NOT super effective vs dragon types?",
        options: ["Ice Attacks", "Dark Attacks", "Fairy Attacks", "Dragon Attacks"],
        correct: "Dark Attacks"},
        {
        question: "What do you have to get to wake up Snorlax?",
        options: ["Alarm Clock", "Poke Flute", "Smelling Salts", "Bucket of Water"],
        correct: "Poke Flute"},
        {
        question: "Which pokemon evolves when you trade it?",
        options: ["Haunter", "Hitmonchan", "Wooper", "Mew"],
        correct: "Haunter"}]

var questionTrack = 1

var correct = 0;
var wrong = 0;

var countDown = 20;
var intervalId;

$("#start").on("click", function() {

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
    if (questionNumber < 11) {

        $("#question-space").text(questions[questionNumber].question);
        $("#timer-space").html("<h2>Time Remaining: 00:20</h2>");

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        renderAnswers(questionNumber);

        var correctAnswer = questions[questionNumber].correct;

        $(".questions").on("click", function() {
            if ($(this).text() === correctAnswer) {
                console.log($(this).attr("data-value"));
                console.log(correctAnswer);
                alert("Correct");
                questionTrack++
                correct++;
                clearInterval(intervalId);
                countDown = 20;
                setTimeout(function() {
                    generateQuestion(questionTrack);
                }, 3000);
            }
            else {
                console.log($(this).attr("data-value"));
                console.log(correctAnswer);
                alert("Wrongzo");
                questionTrack++;
                wrong++;
                clearInterval(intervalId);
                countDown = 20;
                setTimeout(function() {
                    generateQuestion(questionTrack);
                }, 3000);
            }
        });
    }
        else { 
            scoreSummary();
        }    
}


function scoreSummary() {
    $("#question-space").empty();
    clearInterval(intervalId);
    $("#timer-space").empty()
    $("#answer-space").empty();
    summary = "<h1>Number Correct: " + correct + "<br>Number Wrong: " + wrong + "</h1>";
    $("#answer-space").html(summary);
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

function decrement() {

    countDown--;

    if (countDown < 10) {
        countDown = "0" + countDown;
    }

    $("#timer-space").html("<h2>Time Remaining: 00:" + countDown + "</h2>");
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

function convertTime(){

}
});