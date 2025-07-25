// שאלות שמוגדרות בקוד, לא מתוך קובץ חיצוני
const questions = [
  {
    question: "מה המשמעות של תמרור עצור?",
    answers: [
      "עצור ותן זכות קדימה",
      "יש עצור עוד 100 מטר",
      "זהירות, כביש חלק",
      "אזור עבודה לפניך"
    ],
    correct: 0
  },
  {
    question: "מה המשמעות של תמרור אין כניסה?",
    answers: [
      "כביש חד סטרי",
      "כביש ללא מוצא",
      "אסור להיכנס",
      "רק לרכב ציבורי"
    ],
    correct: 2
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.style.fontFamily = "Arial";
  app.style.padding = "30px";

  let current = 0;

  function showQuestion() {
    app.innerHTML = "";

    const q = document.createElement("h2");
    q.textContent = questions[current].question;

    const list = document.createElement("ul");
    questions[current].answers.forEach((answer, i) => {
      const li = document.createElement("li");
      li.textContent = answer;
      li.style.cursor = "pointer";
      li.onclick = () => {
        if (i === questions[current].correct) {
          li.style.color = "green";
        } else {
          li.style.color = "red";
        }
        setTimeout(() => {
          current++;
          if (current < questions.length) {
            showQuestion();
          } else {
            app.innerHTML = "<h2>כל הכבוד! סיימת את המבחן 🎉</h2>";
          }
        }, 1000);
      };
      list.appendChild(li);
    });

    app.appendChild(q);
    app.appendChild(list);
    document.body.appendChild(app);
  }

  showQuestion();
});
