const question = document.querySelector(".ques") ;
const opt = document.querySelector(".options") ;
const nextBtn = document.querySelector("#next") ;
const previousBtn = document.querySelector("#previous") ;
const submitBtn = document.querySelector("#submit") ;
const resultCard = document.querySelector(".resultCard") ;

let questionIndex = 0 ;
let score = 0 ;
let right = 0 ;
let wrong = 0 ;
let performance = "" ;
let selectedQues = "" ;
    

function getQueryParam(name) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(name);
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  selectedQues = array;
}

// Function to fetch quiz questions based on selected category
function fetchQuizQuestions() {
  const category = getQueryParam('category');

  const quizCategoryElement = document.getElementById('quiz-category');
  quizCategoryElement.textContent = category.charAt(0).toUpperCase() + category.slice(1) + " - " + "Quiz";


  
  const questions = quizData[category];  // Fetch quiz questions based on category
  
  shuffleArray(questions);
  

  showQuestion() ;

}


const userAnswers = [];


const showQuestion = () => {

  question.innerHTML = `${questionIndex + 1} : ${selectedQues[questionIndex].question}`;

  opt.innerHTML = `
    <button class="btn">${selectedQues[questionIndex].options[0]}</button>
    <button class="btn">${selectedQues[questionIndex].options[1]}</button>
    <button class="btn">${selectedQues[questionIndex].options[2]}</button>
    <button class="btn">${selectedQues[questionIndex].options[3]}</button>`;

  disableButtonsForPreviousAnswer();

  if (questionIndex == 0) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "block";
  }

  if (questionIndex == selectedQues.length - 1) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
  }
};

const updateUserAnswer = (questionIndex, answer) => {
  userAnswers[questionIndex] = answer;
};


const disableButtonsForPreviousAnswer = () => {
  const buttons = document.querySelectorAll(".btn");
  const previousAnswer = userAnswers[questionIndex];
  if (previousAnswer !== undefined) {
    buttons.forEach(button => {
      button.disabled = true;
      if (button.innerHTML === previousAnswer) {
        button.style.backgroundColor = "dodgerblue"; // Mark the previously selected answer
        button.style.border = "2px solid black";
      }
    });
  }
};


opt.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    let userAnswer = e.target.innerHTML;
    checkAnswer(userAnswer);
    updateUserAnswer(questionIndex, userAnswer); 
  }
});


nextBtn.addEventListener("click", () => {
  questionIndex++ ;
  showQuestion() ;
})

previousBtn.addEventListener("click", () => {
  questionIndex-- ;
  showQuestion()
})


const checkAnswer = (userAnswer) => {
  let correctAnswer = selectedQues[questionIndex].answer ;
  const buttons = document.querySelectorAll(".btn") ;

  buttons.forEach((value) => {
      value.disabled = true ;

      if (value.innerHTML == userAnswer) {

          if (userAnswer === correctAnswer) {
              value.style.backgroundColor = "rgb(38, 190, 38)";
              right++ ;
          } else {
              value.style.backgroundColor = "red";
              wrong++ ;
          }
          
      } else if (value.innerHTML == correctAnswer) {
          value.style.backgroundColor = "rgb(38, 190, 38)";
          
      }

  })

  score = right - wrong ;
}

submitBtn.addEventListener("click",() => {
  document.querySelector(".card").style.display = "none"
  resultCard.style.display = "flex"

  if (score == 10) {
      performance = "CAN'T BE BETTER" ;
  } else if (score < 10 && score >= 0) {
      performance = "AVERAGE" ;
  } else if (score < 0) {
      performance = "RARE" ;
  }

  resultCard.innerHTML = `
  <div class="numbers">
      <div class="right">
          <h3>Right</h3>
          <div class="rno">${right}</div>
      </div>
      <div class="wrong">
          <h3>Wrong</h3>
          <div class="rno">- ${wrong}</div>
      </div>
  </div>

  <div class="result">
      <h3>Score</h3>
      <div class="score">${score}</div>
  </div>

  <div class="performance">
      Your performance : ${performance}
  </div>
  `
})


window.onload = fetchQuizQuestions;