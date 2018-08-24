// var start = $("<button>");

// start.html("Start");

// $("#container").html(start);

var firstQuestion = ["Phoenix", "Tempe", "Tucson", "Scottsdale"];
var secondQuestion = ["Pikachu", "Dragonite", "Bulbasaur", "Ponyta"];
var thirdQuestion = ["3", "5", "8", "10"]; //eevee question
var fourthQuestion = [];
var fifthQuestion = [];
var sixthQuestion = [];
var seventhQuestion = [];
var eighthQuestion = [];
var ninthQuestion = [];
var tenthQuestion = [];

var timeout = false;

var countDown = 11;
var intervalId;

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

    questionOne();

});

function questionOne() {
    $("#question-space").text("What is the capitol of Arizona?");

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(firstQuestion);

        $(".questions").on("click", function() {
            if ($(this).attr("data-value") === "1") {
                alert("Correct");
                questionTwo();
            }
            else {
                alert("Wrongzo");
                questionTwo();
            }
        });

    if (timeout === true) {
        alert("Sorry, the correct answer was...");
    }
}

function questionTwo() {

    $("#question-space").text("What pokemon is first in the National PokeDex?");

    renderAnswers(secondQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "3") {
            alert("Correct");
        }
        else {
            alert("Wrongzo");
        }
    });

}


// Passes in the array for the question we're on and generates the answer options.
function renderAnswers(question) {
    $("#answer-space").empty();

    for (i = 0; i < question.length; i++) {
        var questionBox = $("<div>");
        questionBox.attr("id","question-box");
        questionBox.attr("data-value", [i + 1]);
        questionBox.attr("class","questions");
        questionBox.text(question[i]);
        $("#answer-space").append(questionBox);
    }
}


function decrement() {
    countDown--;
    $("#timer-space").html("<h2>00:" + countDown + "</h2>");
    if (countDown === -1) {
        timeout = true;
    }
}