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

var timeout = false;

var questionTrack = 1

var correct = 0;
var wrong = 0;

var countDown = 11;
var intervalId;
var nextQuestionInterval;

$("#start").on("click", function() {

    $("#container").empty();

    var question_space = $("<div>");
    question_space.attr("id","question-space");

    $("#container").html(question_space);

    var timer_space = $("<div>");
    timer_space.attr("id", "timer-space");

    $("#container").append(timer_space);

    var answer_space = $("<div>");
    answer_space.attr("id","answer-space");

    $("#container").append(answer_space);

    generateQuestion(questionTrack, 2);

});

    

function generateQuestion(questionNumber) {
    $("#question-space").text(questions[questionNumber].question);

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
            clearInterval(intervalId);
            countDown = 11;
            setTimeout(function() {
                generateQuestion(questionTrack);
              }, 3000);
        }
        else {
            console.log($(this).attr("data-value"));
            console.log(correctAnswer);
            alert("Wrongzo");
            questionTrack++;
            clearInterval(intervalId);
            countDown = 11;
            setTimeout(function() {
                generateQuestion(questionTrack);
              }, 3000);
        }
    });
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
    $("#timer-space").html("<h2>00:" + countDown + "</h2>");
    if (countDown <= 0) {
        // timeout = true;
        // get right answer
        // show it

        rightAnswer = questions[questionTrack].correct;
        alert("Time Up the correct answer was " + rightAnswer);
        clearInterval(intervalId);

        setTimeout(function() {
            generateQuestion(questionTrack);
          }, 3000);

        countDown = 11;
    }
}
})