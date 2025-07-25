// שאלות מובנות ישירות בקוד
const questions = [
  {
    question: "מה המשמעות של תמרור עצור?",
    answers: [
      "עצור ותן זכות קדימה",
      "יש עצור עוד 100 מ'",
      "עצור לצורך בדיקה",
      "אין כניסה"
    ],
    correct: 0
  },
  {
    question: "מה המשמעות של תמרור אין כניסה?",
    answers: [
      "מותר רק לאוטובוסים",
      "מותר לפנות שמאלה",
      "אסור להיכנס",
      "מותר להיכנס בזהירות"
    ],
    correct: 2
  }
];

// ברגע שהעמוד נטען
document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.style.padding = "20px";
  app.style.fontFamily = "Arial";

  const question = document.createElement("h2");
  question.textContent = questions[0].question;

  const list = document.createElement("ul");
  questions[0].answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.style.cursor = "pointer";
    li.style.margin = "10px 0";
    li.onclick = () => {
      li.style.fontWeight = index === questions[0].correct ? "bold" : "normal";
      li.style.color = index === questions[0].correct ? "green" : "red";
    };
    list.appendChild(li);
  });

  app.appendChild(question);
  app.appendChild(list);
  document.body.appendChild(app);
});
