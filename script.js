   const questions = [
    {
        question: "What are you specifications",
        options: ["Potato", "Can Run Windows 7", "Old but not too old", "Brand New"]
    },
    {
        question: "What is your knowledge level of linux",
        options: ["I Breathe Linux", "I know a decent bit", "I dont know much", "What's linux?"]
    },
    {
        question: "What OS were you using before?",
        options: ["Windows", "Linux", "MacOs", "TempleOS"]
    },
    {
        question: "Yes or No",
        options: ["YEs", "No", "Im autistic",]
    },
    {
        question: "DiD you have",
        options: ["No", "im tired now", "Okay", "yes"]
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${questions[currentQuestionIndex].question}</h2>
        <ul>
            ${questions[currentQuestionIndex].options.map(option => `<li class="ans"><input type="radio" name="answer" value="${option}"> ${option}</li>`).join('')}
        </ul>
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            // Handle end of questions
            displayResults();
        } else {
            displayQuestion();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function displayResults() {
    // What the fuck do i do after here
    console.log("User Answers:", userAnswers);
}

// Display the first question
displayQuestion();

// Attach event listeners to buttons
const prevQuestionButton = document.getElementById("prev-question");
const nextQuestionButton = document.getElementById("next-question");
prevQuestionButton.addEventListener("click", prevQuestion);
nextQuestionButton.addEventListener("click", nextQuestion);