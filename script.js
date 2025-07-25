const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionImage = document.getElementById("question-image");

let currentQuestionIndex = 0;
let questions = [];

fetch("questions.json")
  .then((res) => res.json())
  .then((data) => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  resetState();
  const question = questions[currentQuestionIndex];

  questionElement.innerText = question.question;

  // הצגת תמונה אם קיימת
  if (question.image) {
    questionImage.src = question.image;
    questionImage.style.display = "block";
  } else {
    questionImage.style.display = "none";
  }

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionElement.innerText = "סיימת את כל השאלות!";
    questionImage.style.display = "none";
    nextButton.style.display = "none";
  }
});
