const scoreLink = document.getElementById("score-link")
const quizTimer = document.getElementById("timer")
const startButton = document.getElementById("start-quiz")
//const questionsContainer1 = document.getElementById("question-container-1")
//const questionsContainer2 = document.getElementById("question-container-2")
const quizPage = document.getElementById("quiz-page")
const choiceContainer = document.querySelector('ul')
//const displayMessage1 = document.getElementById("message-1")
//const displayMessage2 = document.getElementById("message-2")

const questionsContainer = document.getElementById("questions_div")
const responseContainer = document.getElementById("response_div")

let questions = []  // Create an array to hold the question objects
let currentQuestion = 0  // An index to keep track of the current question
let gameTimer
let timeLeft

// Adding questions to the array
questions.push(
    {
        question: "Which of the following is a data type in JavaScript?",
        choices: ["String", "Number", "Boolean", "Array"],
        correctAnswer: "Array"
    })

questions.push(
    {
        question: "Which of the following methods is used to add new elements to an array in JavaScript?",
        choices: ["append", "push", "insert", "add"],
        correctAnswer: "push"
    })

questions.push(
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        choices: ["var myVar = 10", "let myVar = 10", "const myVar = 10", "All of the above"],
        correctAnswer: "All of the above"
    })




/*
// Arrays from quiz questions
var questionNumber1 = [
    {
      question: "Which of the following is a data type in JavaScript?",
      choices: ["String", "Number", "Boolean", "Array"],
      correctAnswer: "Array"
    },]

var questionNumber2 = [
    {
      question: "Which of the following methods is used to add new elements to an array in JavaScript?",
      choices: ["append", "push", "insert", "add"],
      correctAnswer: "push"
    },]

// Answers to quiz questions
var correctAnswer1 = "Array"
var correctAnswer2 = "push"
*/

startButton.addEventListener('click', function() {
    //startButton.style.display = 'none';
    startButton.style.display = 'none';
    quizPage.style.display = 'none';
    //questionsContainer1.style.display = 'block';
    startQuiz();
});

function startQuiz(arrayNumber1) {
    // assign the array to the page
    // Start the timer
    timeLeft = 60
    gameTimer = setInterval(updateTimer, 1000)
    // Show first question
    console.log(questions)
    displayQuestion(0)
}

function updateTimer() {

    // Reduce the value of timeLeft by 1
    timeLeft--
   // Display the new time-left value in the timer area
quizTimer.innerHTML = timeLeft
    // If time ran out, then stop the game

}

function endGame() {

    // stop the timer

    // show score and get user name/initials

    // add to local storage?
    // responseContainer.innerHTML = "Correct!"

}

function showHighScores() {
    // Get score info from local storage

    // create the html

    // insert the html into the page using innerHTML

}



// Display the question in the correct div
function displayQuestion(qNumber) {

    workingQuestion = questions[qNumber]
    let newHTML = `<h2>${workingQuestion.question}</h2>\n`
    for (let choice of workingQuestion.choices) {
        newHTML += `<button class="q_button" onclick="checkAnswer(${qNumber},'${choice}')">${choice}</button><br>\n`
    }
    questionsContainer.innerHTML = newHTML

}

function checkAnswer(qNumber,userAnswer) {
    // Does the answer that was chosen correspond with the correct answer for the question number?
    let correctAnswer = questions[qNumber].correctAnswer
    if (correctAnswer === userAnswer) {

        // If true/yes, then show "Correct" in the message area,
        responseContainer.innerHTML = "Correct!"

        // Was this the last question? If so, go to the end-game screen.
        // XXXXXXX

        // increment currentQuestion variable,
        currentQuestion++
        // display the next question in the array.
        displayQuestion(currentQuestion)

    } else {

        // If false/no, then show "Incorrect/Wrong" in the message area,
        responseContainer.innerHTML = "Wrong!"
        // adjust the timer.
// timeLeft = timeLeft - 10
timeLeft -= 10

    }


}

/*
// this the event listener over the parent of choices
//event.target.textContent allows us to grab the text of the button the user chose
choiceContainer.addEventListener('click', function (event){
    if (event.target.textContent === correctAnswer1) {
        displayMessage1.textContent = "Correct" 
        startQuiz(questionNumber2)
        console.log("Correct!")
    } else {
        displayMessage1.textContent = "Wrong"
        console.log("Wrong!");
    }
    // the next if statement s for the next questions
    if (event.target.textContent === correctAnswer2) {
        displayMessage2.textContent = "Correct" 
        // startQuiz(questionNumber 3)
        console.log("Correct!")
    } else {
        displayMessage2.textContent = "Wrong"
       
    }
})
*/
