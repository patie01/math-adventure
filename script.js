let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = num1 + num2;
  document.getElementById("question-box").innerText = `🍭 What is ${num1} + ${num2}?`;
  document.getElementById("feedback").innerText = "";
  document.getElementById("answer").value = "";
  document.getElementById("mascot").src = "funmath.jpg";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const mascot = document.getElementById("mascot");
  const correctSound = document.getElementById("correct-sound");
  const wrongSound = document.getElementById("wrong-sound");

  if (userAnswer === correctAnswer) {
    score += 10; // 🎉 10 points for a correct answer
    document.getElementById("feedback").innerText = `✅ Correct! +10 points. Total: ${score}`;
    document.getElementById("score-display").innerText = score;
    mascot.src = "brainstorm.jpg";
    correctSound.play();
  } else {
    document.getElementById("feedback").innerText = `❌ Oops! It was ${correctAnswer}. Total: ${score}`;
    mascot.src = "brainstrom.jpg";
    wrongSound.play();
  }

  setTimeout(generateQuestion, 2000);
}
generateQuestion();


