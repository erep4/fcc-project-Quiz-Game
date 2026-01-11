const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Au", "Ag"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1943", "1945", "1947", "1950"],
    answer: "1945"
  },
  {
    category: "Entertainment",
    question: "Who played the character Tony Stark in the Marvel Cinematic Universe?",
    choices: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: "Robert Downey Jr."
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Protocol"
    ],
    answer: "Hyper Text Markup Language"
  }
];

const getRandomQuestion = arr => {
  return arr[Math.round(Math.random() * arr.length)].question;
}

// код на freeCodeCamp

const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Au"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1947", "1950"],
    answer: "1945"
  },
  {
    category: "Entertainment",
    question: "Who played the character Tony Stark in the Marvel Cinematic Universe?",
    choices: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    answer: "Robert Downey Jr."
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: [
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Protocol"
    ],
    answer: "Hyper Text Markup Language"
  }
];
let x
const getRandomQuestion = arr => {
  x = Math.round(Math.random() * arr.length)
   return arr[x].question;
} 

const getRandomComputerChoice = arr => {
  return arr[x].choices[Math.round(Math.random() * 4)];
}
console.log(Math.round(Math.random() * questions.length));     
console.log(getRandomQuestion(questions))
console.log(getRandomComputerChoice(questions))