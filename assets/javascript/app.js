$(document).ready(function() {

var firstQuestion = ["What is the name of the city Ash is from?","Phoenix", "Pallet", "Saffron", "Tokyo"];
var secondQuestion = ["Which is the first pokemon in the national pokedex?","Pikachu", "Dragonite", "Bulbasaur", "Ponyta"];
var thirdQuestion = ["How many evolutions does eevee have?","3", "5", "8", "10"];
var fourthQuestion = ["Which of the following is a generation 2 starter?", "Bidoof", "Totodile", "Hoothoot", "Lugia"];
var fifthQuestion = ["Which pokeball has the highest capture rate?", "Masterball", "Pokeball", "Heavy ball", "Quick ball"];
var sixthQuestion = ["Regular repels will last how long?", "50 steps", "100 steps", "150 steps", "200 steps"];
var seventhQuestion = ["Which of the following WON'T evolve from a Moon stone?", "Clefairy", "Nidorino", "Snubble", "Jigglypuff"];
var eighthQuestion = ["Which of the following is NOT super effective vs dragon types?", "Ice Attacks", "Dark Attacks", "Fairy Attacks", "Dragon Attacks"];
var ninthQuestion = ["What do you have to get to wake up Snorlax?", "Alarm Clock", "Poke Flute", "Smelling Salts", "Bucket of Water"];
var tenthQuestion = ["Which pokemon evolves when you trade it?", "Haunter", "Hitmonchan", "Wooper", "Mew"];

var timeout = false;

var correct = 0;
var wrong = 0;

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

// function generateQuestion(questionNumber, ) {
//     $("#question-space").text(info[0]);

//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);

//     renderAnswers(info);

//     $(".questions").on("click", function() {
//         if ($(this).attr("data-value") === "1") {
//             alert("Correct");
//             questionTwo();
//         }
//         else {
//             alert("Wrongzo");
//             questionTwo();
//         }
//     });
// }

});

function questionOne() {
    $("#question-space").text(firstQuestion[0]);

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(firstQuestion);

        $(".questions").on("click", function() {
            if ($(this).attr("data-value") === "2") {
                alert("Correct");
                correct++;
                questionTwo();
            }
            else {
                alert("Wrongzo");
                wrong++;
                questionTwo();
            }
        });
}

function questionTwo() {

    $("#question-space").text(secondQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(secondQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "3") {
            alert("Correct");
            correct++;
            questionThree();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionThree();
        }
    });
}

function questionThree() {
    $("#question-space").text(thirdQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(thirdQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "3") {
            alert("Correct");
            correct++;
            questionFour();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionFour();
        }
    });
}

function questionFour() {
    $("#question-space").text(fourthQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(fourthQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "2") {
            alert("Correct");
            correct++;
            questionFive();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionFive();
        }
    });
}

function questionFive() {
    $("#question-space").text(fifthQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(fifthQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "1") {
            alert("Correct");
            correct++;
            questionSix();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionSix();
        }
    });
}

function questionSix() {
    $("#question-space").text(sixthQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(sixthQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "2") {
            alert("Correct");
            correct++;
            questionSeven();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionSeven();
        }
    });
}

function questionSeven() {
    $("#question-space").text(seventhQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(seventhQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "3") {
            alert("Correct");
            correct++;
            questionEight();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionEight();
        }
    });
}

function questionEight() {
    $("#question-space").text(eighthQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(eighthQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "2") {
            alert("Correct");
            correct++;
            questionNine();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionNine();
        }
    });
}

function questionNine() {
    $("#question-space").text(ninthQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(ninthQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "2") {
            alert("Correct");
            correct++;
            questionTen();
        }
        else {
            alert("Wrongzo");
            wrong++;
            questionTen();
        }
    });
}

function questionTen() {
    $("#question-space").text(tenthQuestion[0]);

    countDown = 11;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderAnswers(tenthQuestion);

    $(".questions").on("click", function() {
        if ($(this).attr("data-value") === "1") {
            alert("Correct");
            correct++;
            scoreSummary();
        }
        else {
            alert("Wrongzo");
            wrong++;
            scoreSummary();
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
function renderAnswers(question) {
    $("#answer-space").empty();

    for (i = 1; i < question.length; i++) {
        var questionBox = $("<div>");
        questionBox.attr("id","question-box");
        questionBox.attr("data-value", [i]);
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
})