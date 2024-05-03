// Data for the quiz
const quizData = [
  {
    question: "The ___ is a unit of heredity",
    correctAnswer: "Gene"
  },
  {
    question: "____ are two genes that occupy the same position on homologous chromosomes and cover the same trait",
    correctAnswer: "Alleles"
  },
  {
    question: "The Father of Modern Genetics is ____",
    correctAnswer: "Gregor Johann Mendell"
  },
  {
    question: "___ are made up of DNA",
    correctAnswer: "Genes"
  },
  {
    question: "Having identical genes is called ____",
    correctAnswer: "Homozygous"
  },
  {
    question: "Having two different genes is called ____",
    correctAnswer: "Heterozygous"
  },
  {
    question: "____ is an allele that masks the expression of an alternate allele",
    correctAnswer: "Dominant"
  },
  {
    question: "____ is an allele that is masked by a dominant allele",
    correctAnswer: "Recessive"
  },
  {
    question: "The genetic makeup of an organism is called ____",
    correctAnswer: "Genotype"
  },
  {
    question: "The physical appearance of an organism is called _____",
    correctAnswer: "Phenotype"
  },
  {
    question: "_____ inheritance is of a single characteristic",
    correctAnswer: "Monohybrid"
  },
  {
    question: "_____ inheritance is of two different characteristics",
    correctAnswer: "Dihybrid"
  },
  {
    question: "_____ is a change of heritable traits within a population over time",
    correctAnswer: "Evolution"
  },
  {
    question: "The theory of ____ states that all living organisms are descendants of a single ancestor",
    correctAnswer: "Common Descent"
  },
  {
    question: "Remnants, impressions, or traces of an animal or plant of a past geologic age are classified as ____",
    correctAnswer: "Fossils"
  },
  {
    question: "Fossils are _____ in ____ layers than those in the upper layers",
    correctAnswer: "Lower"
  },
  {
    question: "Fossils provide _____ of evolution",
    correctAnswer: "geologic evidence"
  },
  {
    question: "______ provides significant inferential evidence for evolution and common descent",
    correctAnswer: "Biogeography"
  },
  {
    question: "_____ is the first line of reasoning in determining the relatedness of species",
    correctAnswer: "Comparative Anatomy"
  },
  {
    question: "Similar functions and different structures are called ____",
    correctAnswer: "Analogous Structures"
  },
  {
    question: "Similar structures and different functions are called ____",
    correctAnswer: "Homologous Structure"
  },
  {
    question: "____ means embryos of animals show similarities in the early stage of embryo development",
    correctAnswer: "Comparative Embryology"
  },
  {
    question: "____ are  organs that have no purpose and therefore represent vestiges of some earlier stage of development",
    correctAnswer: "Vestigial Organs"
  },
  {
    question: "____ states that living organisms or their component parts tend to increase in size",
    correctAnswer: "Lamarckism"
  },
  {
    question: "_____ of horse, elephants and other animals show that all these increase in their evolution from simple to complex forms",
    correctAnswer: "phylogenetic studies"
  },
  {
    question: "The theory of ___ states that environmental factors do affect only somatic cells and not the germ cells",
    correctAnswer: "Continuity of Germplasm"
  },
  {
    question: "The theory of ____ states that individuals with heritable favorable traits result in a population that is better adapted to its current environment.",
    correctAnswer: "Natural Selection"
  },
  
];

// Variables to keep track of the game state
let currentQuestionIndex = 0;
let score = 0;

// Get references to elements in the DOM
const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const userAnswerInput = document.getElementById('user-answer');
const resultElement = document.getElementById('result');
const scoreValueElement = document.getElementById('score');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scoreContainer = document.getElementById('score-container');
const submitAnswerButton = document.getElementById('submit-answer');
const playAgainButton = document.createElement('button');

// Show the quiz when the start button is clicked
startButton.addEventListener('click', () => {
  questionContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  scoreContainer.style.display = 'block'; // Show the score container
  startButton.parentElement.style.display = 'none'; // Hide the start container
  displayQuestion(); // Start the quiz
});

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
}

function checkAnswer() {
  const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
  const userAnswer = userAnswerInput.value.trim();

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Incorrect. The correct answer is: " + correctAnswer;
  }

  scoreValueElement.textContent = score; // Update the score
  resultContainer.style.display = "block";
  questionContainer.style.display = "none";

  setTimeout(nextQuestion, 2000); // Move to the next question after a delay
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    userAnswerInput.value = "";
    resultContainer.style.display = "none"; 
    questionContainer.style.display = "block"; 
    displayQuestion(); 
  } else {
    endQuiz(); 
  }
}

function endQuiz() {
  questionContainer.style.display = "none"; 
  resultContainer.innerHTML = "<h3>Quiz Completed!</h3>";
  resultContainer.appendChild(playAgainButton);
}

function restartQuiz() {
  currentQuestionIndex = 0; 
  score = 0; 
  scoreValueElement.textContent = score; 
  resultContainer.innerHTML = "";
  questionContainer.style.display = "block"; 
  resultContainer.style.display = "none"; 
  playAgainButton.remove(); 
  displayQuestion(); 
}

// Add event listener to Play Again button and Submit Answer button
playAgainButton.textContent = "Play Again"; 
playAgainButton.addEventListener('click', restartQuiz);
submitAnswerButton.addEventListener('click', checkAnswer);

// Initial display of the first question
displayQuestion();
