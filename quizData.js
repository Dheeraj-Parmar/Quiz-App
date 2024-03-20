const quizData = {
    math: [
      { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
      { question: "What is the square root of 16?", options: ["2", "4", "8", "16"], answer: "4" },
      { question: "What is 7 * 8?", options: ["45", "56", "64", "49"], answer: "56" },
      { question: "What is the value of pi (π)?", options: ["3.14", "2.71", "4.16", "1.61"], answer: "3.14" },
      { question: "What is the next number in the sequence: 2, 4, 6, 8, ...?", options: ["10", "11", "12", "9"], answer: "10" },
      { question: "What is 10% of 200?", options: ["10", "20", "30", "40"], answer: "20" },
      { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
      { question: "What is the perimeter of a rectangle with sides 5 and 7?", options: ["10", "12", "24", "26"], answer: "24" },
      { question: "What is the largest two-digit prime number?", options: ["97", "98", "99", "100"], answer: "97" },
      { question: "What is the sum of the angles in a triangle?", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], answer: "180 degrees" }
    ],
    science: [
      { question: "What is the chemical symbol for water?", options: ["O", "H2O", "CO2", "H"], answer: "H2O" },
      { question: "What is the boiling point of water in Celsius?", options: ["0", "100", "-273", "50"], answer: "100" },
      { question: "What is the atomic number of oxygen?", options: ["6", "8", "12", "16"], answer: "8" },
      { question: "What is the closest planet to the Sun?", options: ["Venus", "Mars", "Mercury", "Earth"], answer: "Mercury" },
      { question: "What is the chemical formula for table salt?", options: ["NaCl", "H2O", "CO2", "O2"], answer: "NaCl" },
      { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue whale", "Hippopotamus", "Giraffe"], answer: "Blue whale" },
      { question: "Which gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon dioxide" },
      { question: "What is the study of Earth's atmosphere called?", options: ["Biology", "Geology", "Meteorology", "Astronomy"], answer: "Meteorology" },
      { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au" },
      { question: "What is the process by which plants make their food called?", options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"], answer: "Photosynthesis" }
    ],
    gk: [
      { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci" },
      { question: "Which country is famous for the Great Wall?", options: ["Japan", "China", "India", "Egypt"], answer: "China" },
      { question: "What is the currency of Japan?", options: ["Yuan", "Dollar", "Euro", "Yen"], answer: "Yen" },
      { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Ernest Hemingway"], answer: "Harper Lee" },
      { question: "What is the national animal of Australia?", options: ["Kangaroo", "Koala", "Emu", "Platypus"], answer: "Kangaroo" },
      { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
      { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
      { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"], answer: "Alexander Fleming" },
      { question: "Which country is famous for the pyramids?", options: ["Italy", "Greece", "Egypt", "Turkey"], answer: "Egypt" },
      { question: "What is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Jasmine"], answer: "Lotus" }
    ],
    english: [
      { question: "What is the plural of 'child'?", options: ["childs", "childes", "children", "childern"], answer: "children" },
      { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"], answer: "William Shakespeare" },
      { question: "What is the opposite of 'brave'?", options: ["Fearless", "Cowardly", "Confident", "Strong"], answer: "Cowardly" },
      { question: "What is a synonym for 'beautiful'?", options: ["Ugly", "Attractive", "Handsome", "Pretty"], answer: "Pretty" },
      { question: "What is the past tense of 'run'?", options: ["Ran", "Runned", "Running", "Runs"], answer: "Ran" },
      { question: "What is the superlative form of 'good'?", options: ["Better", "Best", "Goodest", "Great"], answer: "Best" },
      { question: "What does the idiom 'break the ice' mean?", options: ["Start a conversation", "Break something", "Play a game", "Go to sleep"], answer: "Start a conversation" },
      { question: "What is the plural form of 'mouse'?", options: ["Mouses", "Mouse", "Mice", "Mooses"], answer: "Mice" },
      { question: "What is the opposite of 'happy'?", options: ["Sad", "Angry", "Excited", "Joyful"], answer: "Sad" },
      { question: "What is the past participle of 'eat'?", options: ["Eaten", "Eated", "Eaten", "Eating"], answer: "Eaten" }
    ]
  };