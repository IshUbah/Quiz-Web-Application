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
    question: "What is the full form of LAN?",
    options: [
      "Local Area Network",
      "Local Authorization Network",
      "Logical Area Network",
      "Logical Authorization Network",
    ],
    correct: "Local Area Network",
  },
  {
    id: "19",
    question: "Which of the following is not a web browser?",
    options: [
      "Google Chrome",
      "Microsoft Word",
      "Mozilla Firefox",
      "Internet Explorer",
    ],
    correct: "Microsoft Word",
  },
  {
    id: "20",
    question: "Which of the following is not a search engine?",
    options: ["Google", "Yahoo", "Bing", "Windows"],
    correct: "Windows",
  },
  {
    id: "21",
    question: "What is the function of a mouse in a computer?",
    options: [
      "To input data",
      "To output data",
      "To store data",
      "To navigate",
    ],
    correct: "To navigate",
  },
  {
    id: "22",
    question: "What is the function of a mouse in a computer?",
    options: [
      "To input data",
      "To output data",
      "To store data",
      "To navigate",
    ],
    correct: "To navigate",
  },
  {
    id: "23",
    question: "The Third Generation Computer was made with____.",
    options: [
      "Vacuum Tube",
      "Discrete Components",
      "Integrated circuits",
      "Bio Chips",
    ],
    correct: "Integrated circuits",
  },
  {
    id: "24",
    question:
      "Which of these languages uses a two-step compilation process both interpreter and compiler?",
    options: ["COBOL", "BASIC", "Java", "C++"],
    correct: "Java",
  },
  {
    id: "25",
    question:
      "A hacker that changes or forges information in an electronic resource, is engaging in __________.",
    options: ["denial of service", "sniffing", "terrorism", "data diddling"],
    correct: "data diddling",
  },
  {
    id: "26",
    question: "The Third Generation Computer was made with____.",
    options: [
      "Vacuum Tube",
      "Discrete Components",
      "Integrated circuits",
      "Bio Chips",
    ],
    correct: "Integrated circuits",
  },
  {
    id: "27",
    question: "What is a Firewall in Computer Network?",
    options: [
      "An operating System of Computer Network",
      "The physical boundary of Network",
      "A web browsing Software",
      "A system designed to prevent unauthorized access",
    ],
    correct: "A system designed to prevent unauthorized access",
  },
  {
    id: "28",
    question:
      "What kind of lock includes a keypad that can be used to control access into areas?",
    options: ["Cipher", "Warded", "Device", "Tumbler"],
    correct: "Cipher",
  },
  {
    id: "29",
    question:
      "The digital telecommunications term ISDN is an abbreviation for ______.",
    options: [
      "Integrated Standard Digital Networks",
      "Internet Services Data Network",
      "Interactive Standard Dynamic Networks",
      "Integrated Services Digital Network",
    ],
    correct: "Integrated Services Digital Network",
  },
  {
    id: "30",
    question:
      "________ is an important circuitry in a computer system that directs the operation of the processor.",
    options: ["Memory", "Control Unit", "Address Bus", "Accumulator"],
    correct: "Control Unit",
  },
  {
    id: "31",
    question: "Switch is a network device whose responsibility is to_______.",
    options: [
      "Protect from virus attack",
      "turn of the power to network",
      "Connect Network devices",
      "Boot the network",
    ],
    correct: "Connect Network devices",
  },
  {
    id: "32",
    question:
      "A type of device used to connect a central processor and peripherals which uses multiplying is known as _____.",
    options: ["Modem", "Network", "Multiplexer", "All of these"],
    correct: "Multiplexer",
  },
  {
    id: "33",
    question: "Second-generation computers are made of ______.",
    options: ["Vacuum Tubes", "Transistors", "LSI", "VLSI"],
    correct: "Transistors",
  },
];
