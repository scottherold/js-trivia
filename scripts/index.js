$(document).ready(function() {
    $.get("https://opentdb.com/api.php?amount=9&type=multiple", displayQuestion)
    function displayQuestion(data) {
        console.log(data);

        // Loops through AJAX call and creates a div for questions/answers
        for (var i = 0; i < 9; i++) {
            $('#questions').append(
                `<div id="question-${i}" class="col-3 mb-3 mx-1 border rounded">
                    <h6>Question: ${data.results[i].question}</h6>
                    <div id="${i}-answers" class="mb-2">
                        <ul>
                            <li id="${i}-answer-0">${data.results[i].correct_answer}</li>
                            <li id="${i}-answer-1">${data.results[i].incorrect_answers[0]}</li>
                            <li id="${i}-answer-2">${data.results[i].incorrect_answers[1]}</li>
                            <li id="${i}-answer-0">${data.results[i].incorrect_answers[2]}</li>
                        </ul>
                        <button id="${i}-show-answer" class="mb-2" onclick="revealAnswer(${i}, '${data.results[i].correct_answer}')">Answer</button>
                    </div>
                </div>`
            )
        }
    }
});

// Takes the data passed from the button and provides the answer under the div
function revealAnswer(num, ans) {
    // grabs div for the question
    var display = document.getElementById(`${num}-answers`)

    console.log(display)
    // appends the correct answer under the button of the respective question
    display.innerHTML = ans;
};
