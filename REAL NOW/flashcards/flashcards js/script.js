const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

//Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
});

//Hide Create flashcard Card
closeBtn.addEventListener(
  "click",
  (hideQuestion = () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
    if (editBool) {
      editBool = false;
      submitQuestion();
    }
  })
);

//Submit Question
cardButton.addEventListener(
  "click",
  (submitQuestion = () => {
    editBool = false;
    tempQuestion = question.value.trim();
    tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer) {
      errorMessage.classList.remove("hide");
    } else {
      container.classList.remove("hide");
      errorMessage.classList.add("hide");
      viewlist();
      question.value = "";
      answer.value = "";
    }
  })
);

//Card Generate
function viewlist() {
  var listCard = document.getElementsByClassName("card-list-container");
  var div = document.createElement("div");
  div.classList.add("card");
  //Question
  div.innerHTML += `
  <p class="question-div">${question.value}</p>`;
  //Answer
  var displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answer.value;

  //Link to show/hide answer
  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });

  div.appendChild(link);
  div.appendChild(displayAnswer);

  //Edit button
  let buttonsCon = document.createElement("div");
  buttonsCon.classList.add("buttons-con");
  var editButton = document.createElement("button");
  editButton.setAttribute("class", "edit");
  editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
  editButton.addEventListener("click", () => {
    editBool = true;
    modifyElement(editButton, true);
    addQuestionCard.classList.remove("hide");
  });
  buttonsCon.appendChild(editButton);
  disableButtons(false);

  //Delete Button
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  buttonsCon.appendChild(deleteButton);

  div.appendChild(buttonsCon);
  listCard[0].appendChild(div);
  hideQuestion();
}

//Modify Elements
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement.parentElement;
  let parentQuestion = parentDiv.querySelector(".question-div").innerText;
  if (edit) {
    let parentAns = parentDiv.querySelector(".answer-div").innerText;
    answer.value = parentAns;
    question.value = parentQuestion;
    disableButtons(true);
  }
  parentDiv.remove();
};

//Disable edit and delete buttons
const disableButtons = (value) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = value;
  });
};

// Predefined questions and answers
const preDefinedData = [
  { question: "Genetics", answer: "study of heredity and variation of organisms" },
  { question: "Gene", answer: "basic physical and functional unit of heredity" },
  { question: "Genes", answer: "made up of DNA" },
  { question: "Chromosomes", answer: "carry genes" },
  { question: "Alleles", answer: "two genes that occupy the same position on homologous chromosomes and cover the same trait." },
  { question: "Homozygous", answer: "having identical genes" },
  { question: "Heterozygous", answer: "having two different genes" },
  { question: "Dominant", answer: "the allele of a gene that masks the expression of an alternate allele; appears in the heterozygous condition" },
  { question: "Recessive", answer: "an allele that is masked by a dominant allele" },
  { question: "Genotype", answer: "the genetic makeup of an organisms" },
  { question: "RR", answer: "Homozygous Round" },
  { question: "Rr", answer: "Heterozygous Round" },
  { question: "rr", answer: "Homozygous wrinkled" },
  { question: "Phenotype", answer: "the physical appearance of an organism" },
  { question: "RR", answer: "Round" },
  { question: "Rr", answer: "Round" },
  { question: "rr", answer: "wrinkled" },
  { question: "P", answer: "Parental generation" },
  { question: "F1", answer: "First filial generation" },
  { question: "F2", answer: "Second filial generation" },
  { question: "MONOHYBRID INHERITANCE", answer: "inheritance of a single characteristic" },
  { question: "Dihybrid Inheritance", answer: "A dihybrid cross involves the inheritance pattern for organisms differing in two traits. Determines if different traits of organisms were inherited independently. a gradual process in which something changes into a different and usually more complex or better form. *Change of heritable traits within a population over time *Descent with modification states that newer species are modified versions of older species" },
  { question: "Evolution", answer: "states that all living organisms are descendants of a single ancestor. *Organisms today deviated from that common ancestor over time." },
  { question: "Theory of Common Descent", answer: "remnants, impressions, or traces of an animal or plant of a past geologic age." },
  { question: "Fossils", answer: "study of fossils" },
  { question: "Paleontology", answer: "the study of the distribution of life forms over geographical" },
  { question: "Biogeography", answer: "the study of the structures from organisms of many different species. first line of reasoning in determining the relatedness of species." },
  { question: "Comparative Anatomy", answer: "Embryos of animals show similarities in the early stage of embryo development" },
];

// Function to initialize the app with predefined data
function initializeApp() {
  preDefinedData.forEach(data => {
    question.value = data.question;
    answer.value = data.answer;
    submitQuestion();
  });
}

// Call the initializeApp function when the page loads
window.addEventListener('load', initializeApp);