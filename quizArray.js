//Questions and Options array
const quizArray = [
  {
    id: "0",
    question: "What does CPU stand for?",
    options: [
      "Computer Processing Unit",
      "Central Processing Unit",
      "Computer Processing User",
      "Central Processing User",
    ],
    correct: "Central Processing Unit",
  },
  {
    id: "1",
    question: "What is the full form of RAM?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Random Authorization Memory",
      "Central Processing User",
    ],
    correct: "Random Access Memory",
  },
  {
    id: "2",
    question: "Which device is used to input data into a computer?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    correct: "Keyboard",
  },
  {
    id: "3",
    question:
      "Which component of a computer is responsible for storing data permanently?",
    options: ["RAM", "CPU", "Hard Disk", "CD-ROM"],
    correct: "Hard Disk",
  },
  {
    id: "4",
    question: "What is the full form of USB?",
    options: [
      "Universal Serial Bus",
      "United States of America Business",
      "User Serial Business",
      "Universal Serial Battery",
    ],
    correct: "Universal Serial Bus",
  },
  {
    id: "5",
    question: "What is the function of a modem in a computer?",
    options: [
      "To connect to the Internet",
      "To print documents",
      "To store data",
      "To play music",
    ],
    correct: "To connect to the Internet",
  },
  {
    id: "6",
    question: "Which of the following is a type of software?",
    options: ["Mouse", "Keyboard", "Operating System", "Monitor"],
    correct: "Operating System",
  },
  {
    id: "7",
    question: "Which of the following is not an input device?",
    options: ["Mouse", "Scanner", "Printer", "Joystick"],
    correct: "Printer",
  },
  {
    id: "8",
    question: "Which of the following is a programming language?",
    options: ["Java", "Monitor", "Keyboard", "Printer"],
    correct: "Java",
  },
  {
    id: "9",
    question: "Which of the following is a type of computer memory?",
    options: [
      "Input Memory",
      "Output Memory",
      "Virtual Memory",
      "Secondary Memory",
    ],
    correct: "Virtual Memory",
  },
  {
    id: "10",
    question: "What is a browser?",
    options: [
      "A type of software",
      "A type of hardware",
      "A type of network",
      "A type of modem",
    ],
    correct: "A type of software",
  },
  {
    id: "11",
    question: "What is a browser?",
    options: [
      "A type of software",
      "A type of hardware",
      "A type of network",
      "A type of modem",
    ],
    correct: "A type of software",
  },
  {
    id: "12",
    question: "Which of the following is a type of network?",
    options: ["LAN", "CPU", "USB", "RAM"],
    correct: "LAN",
  },
  {
    id: "13",
    question: "Which of the following is an output device?",
    options: ["Keyboard", "Mouse", "Printer", "Scanner"],
    correct: "Printer",
  },
  {
    id: "14",
    question: "Which of the following is a type of storage device?",
    options: ["Mouse", "Keyboard", "CD_ROM", "Printer"],
    correct: "CD_ROM",
  },
  {
    id: "15",
    question: "What is the full form of PDF?",
    options: [
      "Portable Document Format",
      "Portable Data Format",
      "Personal Document Format",
      "Personal Data Format",
    ],
    correct: "Portable Document Format",
  },
  {
    id: "16",
    question: "Which of the following is a type of computer virus?",
    options: ["Trojan", "Keyboard", "Mouse", "Printer"],
    correct: "Trojan",
  },
  {
    id: "17",
    question: "What is the function of a firewall in a computer?",
    options: [
      "To block unauthorized access",
      "To print documents",
      "To store data",
      "To play music",
    ],
    correct: "To block unauthorized access",
  },
  {
    id: "18",
    question: "What is the full form of USB?",
    options: [
      "Universal Serial Bus",
      "United States of America Business",
      "User Serial Business",
      "Universal Serial Battery",
    ],
    correct: "Universal Serial Bus",
  },
  {
    id: "4",
    question: "What is the full form of USB?",
    options: [
      "Universal Serial Bus",
      "United States of America Business",
      "User Serial Business",
      "Universal Serial Battery",
    ],
    correct: "Universal Serial Bus",
  },
  {
    id: "4",
    question: "What is the full form of USB?",
    options: [
      "Universal Serial Bus",
      "United States of America Business",
      "User Serial Business",
      "Universal Serial Battery",
    ],
    correct: "Universal Serial Bus",
  },
  {
    id: "4",
    question: "What is the full form of USB?",
    options: [
      "Universal Serial Bus",
      "United States of America Business",
      "User Serial Business",
      "Universal Serial Battery",
    ],
    correct: "Universal Serial Bus",
  },
];

// computer Science Questions

// const questions = [
//   {
//     q: "What is the full form of LAN?",
//     a: [
//       { text: "Local Area Network", isCorrect: true },
//       { text: "Local Authorization Network", isCorrect: false },
//       { text: "Logical Area Network", isCorrect: false },
//       { text: "Logical Authorization Network", isCorrect: false },
//     ],
//   },
//   {
//     q: "Which of the following is not a web browser?",
//     a: [
//       { text: "Google Chrome", isCorrect: false },
//       { text: "Microsoft Word", isCorrect: true },
//       { text: "Mozilla Firefox", isCorrect: false },
//       { text: "Internet Explorer", isCorrect: false },
//     ],
//   },
//   {
//     q: "Which of the following is not a search engine?",
//     a: [
//       { text: "Google", isCorrect: false },
//       { text: "Yahoo", isCorrect: false },
//       { text: "Bing", isCorrect: false },
//       { text: "Windows", isCorrect: true },
//     ],
//   },
//   {
//     q: "What is the function of a mouse in a computer?",
//     a: [
//       { text: "To input data", isCorrect: false },
//       { text: "To output data", isCorrect: false },
//       { text: "To store data", isCorrect: false },
//       { text: "To navigate", isCorrect: true },
//     ],
//   },
//   {
//     q: "The Third Generation Computer was made with____.",
//     a: [
//       { text: "Vacuum Tube", isCorrect: false },
//       { text: "Discrete Components", isCorrect: false },
//       { text: "Integrated circuits", isCorrect: true },
//       { text: "Bio Chips", isCorrect: false },
//     ],
//   },
//   {
//     q: "Which of these languages uses a two-step compilation process both interpreter and compiler?",
//     a: [
//       { text: "COBOL", isCorrect: false },
//       { text: "BASIC", isCorrect: false },
//       { text: "Java", isCorrect: true },
//       { text: "C++", isCorrect: false },
//     ],
//   },
//   {
//     q: "A hacker that changes or forges information in an electronic resource, is engaging in __________.",
//     a: [
//       { text: "denial of service", isCorrect: false },
//       { text: "sniffing", isCorrect: false },
//       { text: "terrorism", isCorrect: false },
//       { text: "data diddling", isCorrect: true },
//     ],
//   },
//   {
//     q: "What is a Firewall in Computer Network?",
//     a: [
//       { text: "An operating System of Computer Network", isCorrect: false },
//       { text: "The physical boundary of Network", isCorrect: false },
//       { text: "A web browsing Software", isCorrect: false },
//       {
//         text: "A system designed to prevent unauthorized access",
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     q: "What kind of lock includes a keypad that can be used to control access into areas?",
//     a: [
//       { text: "Cipher", isCorrect: true },
//       { text: "Warded", isCorrect: false },
//       { text: "Device", isCorrect: false },
//       { text: "Tumbler", isCorrect: false },
//     ],
//   },
//   {
//     q: "The digital telecommunications term ISDN is an abbreviation for ______.",
//     a: [
//       { text: "Integrated Standard Digital Networks", isCorrect: false },
//       { text: "Internet Services Data Network", isCorrect: false },
//       { text: "Interactive Standard Dynamic Networks", isCorrect: false },
//       { text: "Integrated Services Digital Network", isCorrect: true },
//     ],
//   },
//   {
//     q: "________ is an important circuitry in a computer system that directs the operation of the processor.",
//     a: [
//       { text: "Memory", isCorrect: false },
//       { text: "Control Unit", isCorrect: true },
//       { text: "Address Bus", isCorrect: false },
//       { text: "Accumulator", isCorrect: false },
//     ],
//   },
//   {
//     q: "Switch is a network device whose responsibility is to_______.",
//     a: [
//       { text: "Protect from virus attack", isCorrect: false },
//       { text: "turn of the power to network", isCorrect: false },
//       { text: "Connect Network devices", isCorrect: true },
//       { text: "Boot the network", isCorrect: false },
//     ],
//   },
//   {
//     q: "A type of device used to connect a central processor and peripherals which uses multiplying is known as _____.",
//     a: [
//       { text: "Modem", isCorrect: false },
//       { text: "Network", isCorrect: false },
//       { text: "Multiplexer", isCorrect: true },
//       { text: "All of these", isCorrect: false },
//     ],
//   },
//   {
//     q: "Second-generation computers are made of ______.",
//     a: [
//       { text: "Vacuum Tubes", isCorrect: false },
//       { text: "Transistors", isCorrect: true },
//       { text: "LSI", isCorrect: false },
//       { text: "VLSI", isCorrect: false },
//     ],
//   },
// ];
