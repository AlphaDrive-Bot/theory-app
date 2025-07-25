document.addEventListener("DOMContentLoaded", async () => {
  const questionText = document.getElementById("question-text");
  const answersDiv = document.getElementById("answers");
  const feedbackDiv = document.getElementById("feedback");
  const avatarImg = document.getElementById("avatar");

  let currentQuestionIndex = 0;
  let questions = [];

  // Load questions
  try {
    const response = await fetch("questions.json");
    questions = await response.json();
    showQuestion();
  } catch (error) {
    questionText.innerText = "שגיאה בטעינת השאלות.";
    console.error("שגיאה בטעינה:", error);
  }

  function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    answersDiv.innerHTML = "";
    feedbackDiv.innerText = "";

    Object.entries(q.answers).forEach(([key, value]) => {
      const btn = document.createElement("button");
      btn.innerText = `${key}. ${value}`;
      btn.className = "answer-button";
      btn.onclick = () => checkAnswer(key, q.correct);
      answersDiv.appendChild(btn);
    });
  }

  function checkAnswer(selected, correct) {
    const isCorrect = selected === correct;
    avatarImg.src = isCorrect ? "enigma-smile.png" : "enigma-sad.png";
    feedbackDiv.innerText = isCorrect
      ? "תשובה נכונה! כל הכבוד 🎉"
      : "תשובה שגויה. נסה שוב.";

    setTimeout(() => {
      avatarImg.src = "enigma-neutral.png";
      if (isCorrect) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          questionText.innerText = "סיימת את כל השאלות! 🏁";
          answersDiv.innerHTML = "";
        }
      }
    }, 1500);
  }
});
