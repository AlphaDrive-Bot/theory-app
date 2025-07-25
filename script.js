fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    const questionContainer = document.getElementById("question-container");
    const answerContainer = document.getElementById("answer-buttons");
    const image = document.getElementById("enigma-img");
    let currentQuestion = 0;

    function showQuestion() {
      const q = data[currentQuestion];
      questionContainer.innerText = q.question;
      answerContainer.innerHTML = "";

      q.answers.forEach((ans, index) => {
        const btn = document.createElement("button");
        btn.innerText = ans;
        btn.onclick = () => checkAnswer(index === q.correct);
        answerContainer.appendChild(btn);
      });
    }

    function checkAnswer(correct) {
      if (correct) {
        image.src = "enigma-smile.png";
        currentQuestion++;
        if (currentQuestion < data.length) {
          setTimeout(showQuestion, 1000);
        } else {
          questionContainer.innerText = "כל הכבוד! סיימת!";
          answerContainer.innerHTML = "";
        }
      } else {
        image.src = "enigma-sad.png";
      }
    }

    showQuestion();
  })
  .catch((err) => {
    console.error("שגיאה בטעינת הקובץ:", err);
    document.getElementById("question-container").innerText = "לא ניתן לטעון שאלות 😥";
  });
