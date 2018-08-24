// var start = $("<button>");

// start.html("Start");

// $("#container").html(start);

$("#start").on("click", function() {

    $("#container").empty();

    var question_space = $("<div>");
    question_space.attr("id","question-space");

    $("#container").html(question_space);

    var answer_space = $("<div>");
    answer_space.attr("id","answer-space");

    $("#container").append(answer_space);

    questionOne();

});

function questionOne() {
    $("#question-space").text("What is the capitol of Arizona?");

    $("#answer-space")
}