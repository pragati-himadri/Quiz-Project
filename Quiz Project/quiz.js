

const data = [
    {
      id: 1,
      question: "The painting “The Starry Night” by Vincent van Gogh is an example of what art movement?",
      answers: [
        { answer: "Pointilism", isCorrect: true },
        { answer: "Post-Impressionism", isCorrect: false },
        { answer: "Cubism", isCorrect: false },
        { answer: "Abstract Impressionism", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Dutch painter Vincent van Gogh famously cut off what body part in 1888?",
      answers: [
        { answer: "Finger", isCorrect: true},
        { answer: "Toe", isCorrect: false },
        { answer: "Nose", isCorrect: false },
        { answer: "Ear", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "What is the largest museum of fine art as defined by available gallery space?",
      answers: [
        { answer: "The Louvre", isCorrect: true },
        { answer: "The Hermitage", isCorrect: false },
        { answer: "Metropolitan Museum of Art", isCorrect: false },
      ],
    },
  ];
  
  const gameScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
  const answersContainer = document.querySelector(".answers");
  const submit = document.querySelector(".submit");
  const play = document.querySelector(".play");
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;
  
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(
      ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(
      ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${
      (correctCount - wrongCount) * 10
    }`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Select an answer!");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();

