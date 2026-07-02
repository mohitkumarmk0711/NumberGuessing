let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = 0;

function checkGuess() {

    let input = document.getElementById("guessInput");
    let userGuess = Number(input.value);

    if (userGuess < 1 || userGuess > 100) {
        alert("Enter a number between 1 and 100");
        input.focus();
        return;
    }

    guesses++;

    document.getElementById("count").innerText = guesses;

    if (userGuess == randomNumber) {

    document.getElementById("hint").innerText =
    "🎉 Congratulations! You guessed the number in " + guesses + " guesses.";

    document.getElementById("guessText").style.display = "none";

    document.getElementById("result").innerText = "";

    }
    else if (userGuess < randomNumber) {

        document.getElementById("hint").innerText =
        "The real number is higher.";

        input.focus();
        input.select();   // Selects the previous number
    }
    else {

        document.getElementById("hint").innerText =
        "The real number is lower.";

        input.focus();
        input.select();   // Selects the previous number
    }

}
function resetGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    guesses = 0;

    document.getElementById("count").innerText = 0;

    document.getElementById("guessInput").value = "";

    document.getElementById("hint").innerText = "";

    document.getElementById("result").innerText = "";
    document.getElementById("guessInput").focus();
    document.getElementById("guessText").style.display = "block";

}

document.getElementById("guessInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkGuess();
    }

});