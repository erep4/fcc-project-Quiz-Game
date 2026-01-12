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
  return arr[Math.floor(Math.random() * arr.length)].question;
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

const getRandomQuestion = arr => {
  let random = Math.floor(Math.random() * arr.length)
  const que = arr[random];
   return que;
} 

const getRandomComputerChoice = arr => {
  let question = getRandomQuestion(arr)
  let random = question.choices[Math.floor(Math.random() * question.choices.length)];
  return {question, random}
}


const getResults = (question, choice) => {
  question = question.question;
  
  choice = question.choices
  if (question.answer === choice){
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
 console.log(getResults(questions))
// console.log(getRandomQuestion(questions))
// console.log(getRandomComputerChoice(questions))
// console.log(getResults(getRandomQuestion(questions), getRandomComputerChoice(questions)))
