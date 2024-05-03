const quizData = [
  {
    question: "It’s the study of heredity and variation of organisms",
    options: ["DNA", "Genetics", "Genes"],
    correctAnswer: "Genetics",
  },
  {
    question: "It is the part of the cell that carries genes",
    options: ["Nucleus", "DNA", "Chromosomes"],
    correctAnswer: "Chromosomes",
  },
  {
    question: "An Augustinian priest regarded as the father of genetics",
    options: ["Andrés de Urdaneta", "Gregor Johann Mendel", "August Weismann"],
    correctAnswer: "Gregor Johann Mendel",
  },
  {
    question: "It is the basic physical and functional unit of heredity",
    options: ["Gene", "Chromosomes", "DNA"],
    correctAnswer: "Gene",
  },
  {
    question: "Two genes that cover the same trait and occupy the same position on homologous chromosomes.",
    options: ["Genes", "DNA", "Alleles"],
    correctAnswer: "Alleles",
  },
  {
    question: "Inheritance of a single characteristic",
    options: ["Monohybrid", "Dihybrid", "Monocot"],
    correctAnswer: "Monohybrid",
  },
  {
    question: "Inheritance of two different traits",
    options: ["Monohybrid", "Dihybrid", "Monocot"],
    correctAnswer: "Dihybrid",
  },
  {
    question: "A  homozygous violet flower is crossed with a heterozygous violet flower. What percentage of the offspring will be homozygous?",
    options: ["50%", "100%", "75%"],
    correctAnswer: "50%",
  },
  {
    question: "If a flower with a heterozygous recessive trait (short) is crossed with a flower with the heterozygous dominant trait (tall), what is the genotypic ratio of the offspring?",
    options: ["4:0", "3:1", "2:2"],
    correctAnswer: "3:1",
  },
  {
    question: "Based on the number above, what is the phenotype of the offspring?",
    options: ["3 tall, 1 short", "4  tall", "4 short"],
    correctAnswer: "3 tall, 1 short",
  },
  {
    question: "States that all living organisms are descendants of a single ancestor",
    options: ["Evolution", "Heredity", "Paleontology "],
    correctAnswer: "Evolution",
  },
  {
    question: "Which of the following is not evidence of evolution",
    options: ["Biogeography", "Fossils", "Metamorphosis"],
    correctAnswer: "Metamorphosis",
  },
  {
    question: "French naturalist who believed that living things evolved in a continuous upward direction",
    options: ["Michel Foucault", "Jean-François Lyotard", "Jean Baptiste de Lamarck"],
    correctAnswer: "Jean Baptiste de Lamarck",
  },
  {
    question: "Russian physiologist",
    options: ["Jean-François Lyotard", "August Weismann", "Ivan Pavlov"],
    correctAnswer: "Ivan Pavlov",
  },
  {
    question: "A German biologist who proposed the “Theory of Continuity of Germplasm”",
    options: ["Hugo Marie DeVries", "August Weismann", "Jean Baptiste de Lamarck"],
    correctAnswer: "August Weismann",
  },
  {
    question: "This law also objects to the postulate of inheritance of acquired characters of Lamarckism",
    options: ["Laws of Inheritance", "Theory of Natural Selection", "Theory of Mutation"],
    correctAnswer: "Laws of Inheritance",
  },
  {
    question: "He sets sail on the H.M.S. Beagle (1831-1836) to survey the south seas (mainly South America and the Galapagos Islands) to collect plants and animals",
    options: ["Gregor Mendel", "Charles Darwin", "Ferdinand Magellan"],
    correctAnswer: "Charles Darwin",
  },
  {
    question: "Darwin conceived this theory in 1838",
    options: ["Laws of Inheritance", "Theory of Natural Selection", "Theory of Mutation"],
    correctAnswer: "Theory of Natural Selection",
  },
  {
    question: "He discovered the theory of mutation",
    options: ["Hugo Marie DeVries", "August Weismann", "Jean Baptiste de Lamarck"],
    correctAnswer: "Hugo Marie DeVries",
  },
  {
    question: "Individuals with heritable favorable traits result in a population that is better adapted to its current environment",
    options: ["Theory of Natural Selection", "Theory of Mutation", "Adaptation"],
    correctAnswer: "Theory of Natural Selection",
  },
  {
    question: "A hierarchical system of classifying and identifying organisms",
    options: ["Food chain", "Paleontology", "Taxonomy"],
    correctAnswer: "Taxonomy",
  },
  {
    question: "Taxonomy is developed by Swedish Scientists",
    options: ["August Weismann", "Jean Baptiste de Lamarck", "Carolus Linnaeus"],
    correctAnswer: "Carolus Linnaeus",
  },
  {
    question: "Derived from the Greek words taxis and nomos that means",
    options: ["Arrangement and Method", "Love and wisdom", "Prey and Predator"],
    correctAnswer: "Arrangement and Method",
  },
  {
    question: "A combination of two terms, genus and species",
    options: ["Scientific Method", "Scientific Name", "Common Name"],
    correctAnswer: "Scientific Name",
  },
  {
    question: "How many major categories does taxonomy have?",
    options: ["7", "8", "5"],
    correctAnswer: "7",
  },
  {
    question: "Which classification corresponds to 'Kingdom'",
    options: ["Animalia", "Mammalia", "Human"],
    correctAnswer: "Animalia",
  },
  {
    question: "Which classification corresponds to 'Phylum'",
    options: ["Human", "Sapiens", "Chordata"],
    correctAnswer: "Chordata",
  },
  {
    question: "Which classification corresponds to 'Class'",
    options: ["Mammalia", "Animalia", "Sapiens"],
    correctAnswer: "Mammalia",
  },
  {
    question: "Which classification corresponds to 'Order'",
    options: ["Primata", "Mammalia", "Sapiens"],
    correctAnswer: "Primata",
  },
  {
    question: "Which classification corresponds to 'Family'",
    options: ["Hominidae", "Chordata", "Sapiens"],
    correctAnswer: "Hominidae",
  },
  {
    question: "Which classification corresponds to 'Genus'",
    options: ["Sapiens", "Homo", "Mammalia"],
    correctAnswer: "Homo",
  },
  {
    question: "Which classification corresponds to 'Species'",
    options: ["Human", "Chordata", "Sapiens"],
    correctAnswer: "Sapiens",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultElement = document.getElementById("result");
const scoreValueElement = document.getElementById("score-value");
const resultContainer = document.getElementById("result-container");
const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none"; // Hide the start button
  questionContainer.style.display = "block"; // Display quiz content
  scoreContainer.style.display = "block"; // Display score
  displayQuestion(); // Load the first question
}

function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  resultElement.textContent = ""; // Reset result message

  currentQuestion.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option");
    optionButton.addEventListener("click", () => selectOption(option));
    optionsContainer.appendChild(optionButton);
  });
}

function selectOption(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedOption === correctAnswer) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
  }

  scoreValueElement.textContent = score;

  resultContainer.style.display = "block"; // Show result
  questionContainer.style.display = "none"; // Hide question

  setTimeout(() => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
      resultContainer.style.display = "none"; // Hide result
      questionContainer.style.display = "block"; // Show question
    } else {
      resultElement.innerHTML = "<h3>Quiz Completed!</h3>";
      const playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again";
      playAgainButton.addEventListener("click", restartQuiz); // Change here
      resultElement.appendChild(playAgainButton);

      questionContainer.style.display = "none"; // Hide question
    }
  }, 2000);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreValueElement.textContent = score;
  resultElement.innerHTML = ""; // Clear any result messages
  resultContainer.style.display = "none"; // Hide result
  scoreContainer.style.display = "block"; // Keep score container
  questionContainer.style.display = "block"; // Show question
  displayQuestion(); // Start the quiz again
}
