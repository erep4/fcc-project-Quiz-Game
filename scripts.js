const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Au", "Ag"],
    answer: "Au",
  },
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1943", "1945", "1947", "1950"],
    answer: "1945",
  },
  {
    category: "Entertainment",
    question:
      "Who played the character Tony Stark in the Marvel Cinematic Universe?",
    choices: [
      "Chris Evans",
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
    ],
    answer: "Robert Downey Jr.",
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Protocol",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    category: "Science",
    question: "What is the hardest natural substance on Earth?",
    choices: ["Platinum", "Diamond", "Titanium", "Tungsten"],
    answer: "Diamond",
  },
  {
    category: "Science",
    question: "What is the most abundant gas in Earth's atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen",
  },
  {
    category: "Science",
    question: "What is the smallest unit of life?",
    choices: ["Atom", "Molecule", "Cell", "Tissue"],
    answer: "Cell",
  },
  {
    category: "Geography",
    question: "What is the longest river in the world?",
    choices: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Nile River",
  },
  {
    category: "Geography",
    question:
      "In which country would you find the ancient city of Machu Picchu?",
    choices: ["Brazil", "Mexico", "Peru", "Chile"],
    answer: "Peru",
  },
  {
    category: "Geography",
    question: "What is the capital city of Japan?",
    choices: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
    answer: "Tokyo",
  },
  {
    category: "Geography",
    question: "Which desert is the largest (non-polar) in the world?",
    choices: [
      "Gobi Desert",
      "Kalahari Desert",
      "Sahara Desert",
      "Arabian Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "John Adams",
    ],
    answer: "George Washington",
  },
  {
    category: "History",
    question:
      "The ancient Aztecs built their capital city on the site of which modern-day city?",
    choices: ["Lima", "Santiago", "Bogota", "Mexico City"],
    answer: "Mexico City",
  },
  {
    category: "History",
    question:
      "Who was the famous queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?",
    choices: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"],
    answer: "Cleopatra",
  },
  {
    category: "Entertainment",
    question: "Which band performed the famous song 'Bohemian Rhapsody'?",
    choices: ["The Beatles", "Led Zeppelin", "Pink Floyd", "Queen"],
    answer: "Queen",
  },
  {
    category: "Entertainment",
    question:
      "In the movie 'The Lion King', what is the name of Simba's father?",
    choices: ["Scar", "Mufasa", "Rafiki", "Timon"],
    answer: "Mufasa",
  },
  {
    category: "Entertainment",
    question: "Who directed the movie 'Jurassic Park'?",
    choices: [
      "James Cameron",
      "Steven Spielberg",
      "George Lucas",
      "Martin Scorsese",
    ],
    answer: "Steven Spielberg",
  },
  {
    category: "Entertainment",
    question: "Which TV show features a café called 'Central Perk'?",
    choices: [
      "How I Met Your Mother",
      "Seinfeld",
      "Friends",
      "The Big Bang Theory",
    ],
    answer: "Friends",
  },
  {
    category: "Technology",
    question:
      "Which company developed the first commercially successful graphical user interface?",
    choices: ["Microsoft", "IBM", "Xerox", "Apple"],
    answer: "Apple",
  },
  {
    category: "Technology",
    question: "What does 'CPU' stand for in computing?",
    choices: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Core Performance Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    category: "Technology",
    question: "In which year was the first iPhone released?",
    choices: ["2005", "2006", "2007", "2008"],
    answer: "2007",
  },
  {
    category: "Technology",
    question: "What does the 'www' prefix in a website address stand for?",
    choices: [
      "World Wide Web",
      "Web World Wide",
      "Wide World Web",
      "Web Wide World",
    ],
    answer: "World Wide Web",
  },
  {
    category: "General Knowledge",
    question:
      "How many players are there in a standard soccer team on the field?",
    choices: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    category: "General Knowledge",
    question: "What is the main ingredient in guacamole?",
    choices: ["Tomato", "Onion", "Avocado", "Pepper"],
    answer: "Avocado",
  },
  {
    category: "Science",
    question: "What is the speed of light in a vacuum approximately?",
    choices: ["300,000 km/s", "150,000 km/s", "1 million km/s", "3,000 km/s"],
    answer: "300,000 km/s",
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    category: "Science",
    question: "What is the main gas found in the air we breathe?",
    choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    answer: "Nitrogen",
  },
  {
    category: "Geography",
    question: "What is the smallest country in the world?",
    choices: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City",
  },
  {
    category: "Geography",
    question: "Which country has the most natural lakes?",
    choices: ["USA", "Russia", "Brazil", "Canada"],
    answer: "Canada",
  },
  {
    category: "Geography",
    question: "What is the highest mountain peak in Africa?",
    choices: [
      "Mount Kenya",
      "Mount Kilimanjaro",
      "Mount Everest",
      "Atlas Mountains",
    ],
    answer: "Mount Kilimanjaro",
  },
  {
    category: "Geography",
    question: "In which country would you find the Great Pyramid of Giza?",
    choices: ["Mexico", "Egypt", "Sudan", "Iran"],
    answer: "Egypt",
  },
  {
    category: "History",
    question: "Who was the first woman to win a Nobel Prize?",
    choices: [
      "Florence Nightingale",
      "Marie Curie",
      "Mother Teresa",
      "Rosalind Franklin",
    ],
    answer: "Marie Curie",
  },
  {
    category: "History",
    question: "What year did the Titanic sink?",
    choices: ["1905", "1912", "1915", "1923"],
    answer: "1912",
  },
  {
    category: "History",
    question: "Which ancient civilization built the city of Machu Picchu?",
    choices: ["Aztecs", "Mayans", "Incas", "Olmecs"],
    answer: "Incas",
  },
  {
    category: "Entertainment",
    question: "Which movie won the Oscar for Best Picture in 2020?",
    choices: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
    answer: "Parasite",
  },
  {
    category: "Entertainment",
    question:
      'What is the name of the hobbit played by Elijah Wood in "The Lord of the Rings"?',
    choices: [
      "Bilbo Baggins",
      "Frodo Baggins",
      "Samwise Gamgee",
      "Merry Brandybuck",
    ],
    answer: "Frodo Baggins",
  },
  {
    category: "Entertainment",
    question: "Which singer is known as the 'Queen of Pop'?",
    choices: ["Beyoncé", "Lady Gaga", "Madonna", "Taylor Swift"],
    answer: "Madonna",
  },
  {
    category: "Entertainment",
    question:
      "What is the highest-grossing film of all time (unadjusted for inflation)?",
    choices: [
      "Titanic",
      "Avatar",
      "Avengers: Endgame",
      "Star Wars: The Force Awakens",
    ],
    answer: "Avatar",
  },
  {
    category: "Technology",
    question: "Who founded Microsoft?",
    choices: ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Elon Musk"],
    answer: "Bill Gates",
  },
  {
    category: "Technology",
    question: "What does 'USB' stand for?",
    choices: [
      "Universal Serial Bus",
      "United Serial Bus",
      "Universal Standard Bus",
      "Unified Serial Block",
    ],
    answer: "Universal Serial Bus",
  },
  {
    category: "Technology",
    question: "Which company is known for its Galaxy line of smartphones?",
    choices: ["Apple", "Huawei", "Samsung", "Nokia"],
    answer: "Samsung",
  },
  {
    category: "General Knowledge",
    question: "How many colors are there in a rainbow?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    category: "General Knowledge",
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Great White Shark", "Blue Whale", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    category: "General Knowledge",
    question: "In which sport would you perform a 'slam dunk'?",
    choices: ["Football", "Tennis", "Basketball", "Volleyball"],
    answer: "Basketball",
  },
];

insults = [
    "You fool",
    "You idiot",
    "You moron",
    "You imbecile",
    "You simpleton",
    "You dimwit",
    "You dunce",
    "You blockhead",
    "You ignoramus",
    "You nincompoop",
    "You buffoon",
    "You jackass",
    "You dunderhead",
    "You numbskull",
    "You chucklehead",
    "You knucklehead",
    "You meathead",
    "You birdbrain",
    "You lamebrain",
    "You pea brain"
];

compliments = [
    "You're brilliant",
    "You're a genius",
    "You're amazing",
    "You're incredible",
    "You're outstanding",
    "You're phenomenal",
    "You're magnificent",
    "You're remarkable",
    "You're exceptional",
    "You're wonderful",
    "You're fantastic",
    "You're terrific",
    "You're superb",
    "You're splendid",
    "You're marvellous",
    "You're stellar",
    "You're awesome",
    "You're impressive",
    "You're extraordinary",
    "You're unparalleled"
];

const question = document.getElementById('question')
const variants = document.getElementById('variants')
const nextBtn = document.getElementById('next')
const startBtn = document.getElementById('start')
const startScreen = document.getElementById('start-screen')

let que = ``
let countTrue = 0
let count = 0
// код на freeCodeCamp

const getRandomQuestion = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  const que = arr[random];
  return que;
};

// const getResults = (question, choice) => {
//   question = question.question;

//   choice = question.choices;
//   if (question.answer === choice) {
//     return "Your's choice is correct!";
//   } else {
//     return `Your's choice is wrong. The correct answer is: ${question.answer}`;
//   }
// };

function displayQuestion (arr){
  question.innerHTML = `
  <div class="var">${arr.question}</div>
  `
}

function displayVariants(obj){
  variants.innerHTML = 
`  <fieldset>
    <input type="radio" id="${obj.choices[0]}" name="size" value="${obj.choices[0]}">
    <label for="${obj.choices[0]}">${obj.choices[0]}</label><br>
    
    <input type="radio" id="${obj.choices[1]}" name="size" value="${obj.choices[1]}">
    <label for="${obj.choices[1]}">${obj.choices[1]}</label><br>
    
    <input type="radio" id="${obj.choices[2]}" name="size" value="${obj.choices[2]}">
    <label for="${obj.choices[2]}">${obj.choices[2]}</label><br>

    <input type="radio" id="${obj.choices[3]}" name="size" value="${obj.choices[3]}">
    <label for="${obj.choices[3]}">${obj.choices[3]}</label><br>
</fieldset>`
}

startBtn.addEventListener('click', ()=>{
  count = 0
  countTrue = 0
  question.innerHTML = ``
  startScreen.innerHTML = ``
  startBtn.classList.toggle('hidden')
  nextBtn.classList.toggle('hidden')
  que = getRandomQuestion(questions)
  displayQuestion(que)
  displayVariants(que)
    console.log(que.answer)
})

nextBtn.addEventListener('click', ()=>{
  const choice = document.querySelector('input[name="size"]:checked')

  if (choice === null){
    alert('Choose waisly!')
  }

  if(choice.value === que.answer){
   countTrue += 1
  }
  count += 1
  que = getRandomQuestion(questions)
  displayQuestion(que)
  displayVariants(que)

  if (count === 5 && countTrue === 5){

    startBtn.classList.toggle('hidden')
    question.innerHTML = `
  <div class="var">${getRandomQuestion(compliments)}. You Win !!!</div>
  `
    nextBtn.classList.toggle('hidden')
    variants.innerHTML = ``
  }
  if (count === 5 && countTrue < 5){

    startBtn.classList.toggle('hidden')
    question.innerHTML = `
  <div class="var">${getRandomQuestion(insults)}. You Loose !!! You must learning.</div>
  `
    nextBtn.classList.toggle('hidden')
    variants.innerHTML = ``
  }


})