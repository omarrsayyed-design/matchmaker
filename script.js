// ===== CONSTANTS =====
const IDEAL_ANSWERS = [5, 5, 1, 5, 5];
const TRUE_LOVE_THRESHOLD = 85;
const FRIENDS_THRESHOLD = 60;

// ===== VALIDATION FUNCTION =====
function validate(value) {
    if (value === "" || isNaN(value)) {
        return false;
    }
    let num = Number(value);
    return num >= 1 && num <= 5;
}

// ===== MAIN FUNCTION =====
function calculateMatch() {
    let answers = [
        document.getElementById("q1").value,
        document.getElementById("q2").value,
        document.getElementById("q3").value,
        document.getElementById("q4").value,
        document.getElementById("q5").value
    ];

    let totalDifference = 0;
    let outputText = "";

    for (let i = 0; i < answers.length; i++) {

        if (!validate(answers[i])) {
            document.getElementById("output").innerHTML =
                "Error: Please enter numbers between 1 and 5 for all questions.";
            return;
        }

        let userAnswer = Number(answers[i]);
        let diff = Math.abs(userAnswer - IDEAL_ANSWERS[i]);

        totalDifference += diff;

        outputText += `Question ${i + 1} difference: ${diff}<br>`;
    }

    let finalScore = 100 - (totalDifference * 5);

    let resultMessage = "";

    if (finalScore >= TRUE_LOVE_THRESHOLD) {
        resultMessage = "❤ True Love Match!";
    } else if (finalScore >= FRIENDS_THRESHOLD) {
        resultMessage = "🙂 Good Friends Match";
    } else {
        resultMessage = "💔 Run Away!";
    }

    document.getElementById("output").innerHTML = `
        ${outputText}
        <br><strong>Total Score:</strong> ${finalScore}%<br>
        <strong>Result:</strong> ${resultMessage}
    `;
}
