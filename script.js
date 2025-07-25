// שאלות ישירות כאן בקוד
const questions = [
  {
    question: "מה המשמעות של תמרור עצור?",
    answers: [
      "עצור ותן זכות קדימה",
      "יש עצור עוד 100 מ'",
      "עצור לצורך בדיקה",
      "אין כניסה"
    ],
    correct: 0,
    category: "תמרורים"
  },
  {
    question: "מה המשמעות של תמרור אין כניסה?",
    answers: [
      "מותר רק לאוטובוסים",
      "מותר לפנות שמאלה",
      "אסור להיכנס",
      "מותר להיכנס בזהירות"
    ],
    correct: 2,
    category: "תמרורים"
  }
];

// רנדור של שאלה לדוגמה
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <h2>${questions[0].question}</h2>
    <ul>
      ${questions[0].answers.map((a, i) => `<li>${a}</li>`).join("")}
    </ul>
  `;
  document.body.appendChild(container);
});
