const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
  {
    questionText: "How many minutes are in a full week?",
    answerOptions: [
      { answerText: "10,000", isCorrect: false },
      { answerText: "40,000", isCorrect: false },
      { answerText: "10,080", isCorrect: true },
      { answerText: "11,080", isCorrect: false },
    ],
  },
  {
    questionText: "Aureolin is a shade of what color?",
    answerOptions: [
      { answerText: "Red", isCorrect: false },
      { answerText: "Blue", isCorrect: false },
      { answerText: "Green", isCorrect: false },
      { answerText: "Yellow", isCorrect: true },
    ],
  },
  {
    questionText: "What country has the highest life expectancy?",
    answerOptions: [
      { answerText: "HongKong", isCorrect: true },
      { answerText: "Russia", isCorrect: false },
      { answerText: "China", isCorrect: false },
      { answerText: "India", isCorrect: false },
    ],
  },
  {
    questionText: "What is the pH value of the human body?",
    answerOptions: [
      { answerText: "9.2 to 9.8", isCorrect: false },
      { answerText: "7.0 to 7.8", isCorrect: true },
      { answerText: "6.1 to 6.3", isCorrect: false },
      { answerText: "5.4 to 5.6", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which of the given compounds is used to make fireproof clothing?",
    answerOptions: [
      { answerText: "Aluminum chloride", isCorrect: false },
      { answerText: "Aluminum Sulphate", isCorrect: true },
      { answerText: "Magnesium Chloride", isCorrect: false },
      { answerText: "Magnesium Sulphate", isCorrect: false },
    ],
  },
  {
    questionText: "The driving force of an ecosystem is",
    answerOptions: [
      { answerText: "Carbon Mono oxide", isCorrect: false },
      { answerText: "Biogas", isCorrect: false },
      { answerText: "Solar Energy", isCorrect: true },
      { answerText: "Carbon dioxide", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the given is a disease caused by protozoa?",
    answerOptions: [
      { answerText: "Cancer", isCorrect: false },
      { answerText: "Typhoid", isCorrect: false },
      { answerText: "Kala-azar", isCorrect: true },
      { answerText: "Chicken Pox", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the name of the lower layer of the Earth's three concentric layers?",
    answerOptions: [
      { answerText: "SAIL", isCorrect: false },
      { answerText: "SIMA", isCorrect: true },
      { answerText: "SAMA", isCorrect: false },
      { answerText: "SIAL", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the given vitamin is a water-soluble vitamin?",
    answerOptions: [
      { answerText: "Vitamin A", isCorrect: false },
      { answerText: "Vitamin B", isCorrect: true },
      { answerText: "Vitamin K", isCorrect: false },
      { answerText: "Vitamin D", isCorrect: false },
    ],
  },
  {
    questionText:
      "The tropic of cancer does pass through which state of India?",
    answerOptions: [
      { answerText: "Uttar Pradesh", isCorrect: false },
      { answerText: "Madhya Pradesh", isCorrect: true },
      { answerText: "Bihar", isCorrect: false },
      { answerText: "Andhra Pradesh", isCorrect: false },
    ],
  },
  {
    questionText: "How many states in india?",
    answerOptions: [
      { answerText: "28", isCorrect: true },
      { answerText: "22", isCorrect: false },
      { answerText: "25", isCorrect: false },
      { answerText: "38", isCorrect: false },
    ],
  },
  {
    questionText: "What color does yellow and green make?",
    answerOptions: [
      { answerText: "Lime", isCorrect: true },
      { answerText: "Ocean mist", isCorrect: false },
      { answerText: "Maroon", isCorrect: false },
      { answerText: "Tangerine", isCorrect: false },
    ],
  },
  {
    questionText: "The blue colour of the clear sky is due to",
    answerOptions: [
      { answerText: "Diffraction of light", isCorrect: false },
      { answerText: "Dispersion of light", isCorrect: true },
      { answerText: "Reflection of light", isCorrect: false },
      { answerText: "Refraction of light", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is used in pencils?",
    answerOptions: [
      { answerText: "Silicon", isCorrect: false },
      { answerText: "Phosphorous", isCorrect: false },
      { answerText: "Graphite", isCorrect: true },
      { answerText: "Charcoal", isCorrect: false },
    ],
  },
  {
    questionText: "In fireworks, the green flame is produced because of",
    answerOptions: [
      { answerText: "Sodium", isCorrect: false },
      { answerText: "Potassium", isCorrect: false },
      { answerText: "Barium", isCorrect: true },
      { answerText: "Mercury", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following has got more heat capacity?",
    answerOptions: [
      { answerText: "Iron piece", isCorrect: false },
      { answerText: "Water", isCorrect: true },
      { answerText: "Gold piece", isCorrect: false },
      { answerText: "Benzene", isCorrect: false },
    ],
  },
];

export default questions;
