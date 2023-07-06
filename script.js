let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById('spinner');
let randomText = "";
let inputText = "";
let startSeconds = 0;

function startTimer() {
    startSeconds = startSeconds + 1;
    timer.textContent = startSeconds + " Seconds";
}

let timerId = setInterval(startTimer, 1000);

function generateRandom() {
    let options = {
        method: "GET"
    }
    spinner.classList.remove("d-none");
    quoteDisplay.classList.add("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");
            let randomQuotes = jsonData.content;
            quoteDisplay.textContent = randomQuotes;
        });
}
generateRandom();

submitBtn.addEventListener("click", function() {
    let quoteDisplayValue = quoteDisplay.textContent;
    let quoteInputValue = quoteInput.value;
    if (quoteDisplayValue === quoteInputValue) {
        result.textContent = `You typed in ${startSeconds} Seconds`;
        clearInterval(timerId);
        timer.textContent = "Great !";
    } else {
        result.textContent = "You Typed Incorrect Sentence";
    }

});

resetBtn.addEventListener("click", function() {
    quoteInput.value = "";
    generateRandom();
})