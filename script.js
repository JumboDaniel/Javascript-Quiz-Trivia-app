const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const username = alert("Trivia app 1.0(still in testing phase). Thanks for taking your time to review this project. Feel free to play around and edit the code, which is available on my github. Also suggest changes.");



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  console.log('Game Process Init')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question 
  question.answers.forEach(answer => {
    const button= document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add('hide');
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton= e.target
  const correct= selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button =>
    {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }
  else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')

}

const questions = [
  {
    question: ' Which planet is nearest the sun?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Mecury', correct: true },
      { text: 'Earth', correct: true },
      { text: 'Pluto', correct: true },
            ]
  },

  {
    question: 'Who was the first president of Nigeria?',
    answers: [
      { text: 'Tafawa Balewa', correct: false },
      { text: 'Nnmadi Azikiwe', correct: true },
            ]
  },

  {
    question: 'What temperature does water boil at?',
    answers: [
      { text: '0C', correct: false },
      { text: '50C', correct: false },
      { text: '10C', correct: false },
      { text: '100C', correct: true },
            ]
  },

  {
    question: 'When did the First World War start?',
    answers: [
      { text: '1914', correct: true },
      { text: '1925', correct: false },
      { text: '1922', correct: false },
      { text: '1945', correct: false },      
            ]
  },
  {
    question: 'How many squares are there on a chess board?',
    answers: [
      { text: '55', correct: false },
      { text: '40', correct: false },
      { text: '64', correct: true },
      { text: '27', correct: false },      
            ]
  },

  {
    question: 'What language has the most words?',
    answers: [
      { text: 'French', correct: false },
      { text: 'Madarin', correct: false },
      { text: 'Dutch', correct: false },   
      { text: 'English', correct: true },
            ]
  }
  ,
  {
    question: 'Who invented television? ',
    answers: [
      { text: 'John Logie Baird', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Benjamin Franklin', correct: false },
      { text: 'Thomas Edison', correct: false },      
            ]
  }
]