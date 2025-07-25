const questionsURL = "questions.json";

let currentQuestion = 0;
let correctAnswers = 0;
let questions = [];

const container = document.getElementById("question-container");
const feedback = document.getElementById("feedback");
const avatar = document.getElementById("avatar-image");

function loadQuestions() {
  fetch(questionsURL)
    .then((res) => res.json())
    .then((data) => {
      questions = data;
      showQuestion();
    })
    .catch((err) => {
      container.innerHTML = "שגיאה בטעינת השאלות 😢";
      console.error(err);
    });
}

function showQuestion() {
  const q = questions[currentQuestion];
  container.innerHTML = `
    <h2>${q.question}</h2>
    <ul>
      ${q.answers
        .map(
          (ans, index) =>
            `<li><button onclick="checkAnswer(${index})">${ans}</button></li>`
        )
        .join("")}
    </ul>
  `;
}

function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) {
    correctAnswers++;
    feedback.innerText = "מעולה! תשובה נכונה ✅";
    avatar.src = "enigma-smile.png";
  } else {
    feedback.innerText = `טעות... התשובה הנכונה: ${q.answers[q.correct]} ❌`;
    avatar.src = "enigma-sad.png";
  }

  feedback.classList.remove("hidden");

  setTimeout(() => {
    currentQuestion++;
    feedback.classList.add("hidden");
    avatar.src = "enigma-neutral.png";

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 2000);
}

function showResults() {
  container.innerHTML = `
    <h2>סיום!</h2>
    <p>ענית נכון על ${correctAnswers} מתוך ${questions.length}</p>
  `;
}

loadQuestions();
