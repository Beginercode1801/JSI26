  const questionElement = document.getElementById('question');
  const answerButtons = document.querySelectorAll('.answer-btn');
  const scoreElement = document.getElementById('score');
  const saveScoreButton = document.getElementById('saveScore');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questions = [
    {
      question: "Câu hỏi 1: A.I có thể thay thế con người ko?",
      answers: ["Có", "Ko", "Ko Biết", "50/50"],
      correctAnswer: 3
    },
    {
      question: "Câu hỏi 2: Ai là người sáng lập Tesla?",
      answers: ["Elon Musk", "Billy Gate", "Me", "Ai đó"],
      correctAnswer: 0
    }
  ];
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
      button.textContent = currentQuestion.answers[index];
    });
  }
  
  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
      score += 10;
      scoreElement.textContent = `Điểm: ${score}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = "Bạn đã hoàn thành Quiz!";
    answerButtons.forEach(button => button.style.display = 'none');
    saveScoreButton.disabled = false;
  }
  
  answerButtons.forEach((button, index) => {
    button.addEventListener('click', () => checkAnswer(index));
  });
  
  saveScoreButton.addEventListener('click', () => {
    const userName = prompt("Nhập tên của bạn để lưu điểm:");
    if (userName) {
      alert(`Điểm của bạn (${userName}) đã được lưu: ${score}`);
    }
  });
  
  loadQuestion();