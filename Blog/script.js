const hide_Btn = document.getElementById("toggle");
const hideContainer = document.getElementById("hide");
const quiz = document.querySelector(".quiz");
const options = document.querySelectorAll(".option");
const bigContainer = document.getElementById("bigContainer");
const paraContainer = document.getElementById("para");
const question = document.querySelector(".question");
const counter = document.getElementById("counter");
const fullScreen = document.getElementById("fullscreen");

let timerInterval;

function enterFullscreen() {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    // Firefox
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    docElm.webkitRequestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    // IE/Edge
    docElm.msRequestFullscreen();
  }
  fullScreen.style.display = "none";
  bigContainer.style.display = "block";
  docElm.style.overflow = "scroll";
  timerInterval = setInterval(updateProgress, 1000);
  dysfunctionality();
  setTimeout(toggleWindow, 500);
}

fullScreen.addEventListener("click", function () {
  enterFullscreen();
});
let answer;

let paraArray = [];
let paraArrayChange = [];
let letterArray = [];
let previousUpperCaseLetter;
let paraContentChange;
let letterChangeArray;
let questionsAnswered = 0;

hide_Btn.addEventListener("click", toggleWindow);

hideContainer.addEventListener("click", toggleWindow);

function toggleWindow() {
  quiz.classList.toggle("hide");
  hide_Btn.classList.toggle("rotate");
}

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    checkAnswer(e.target.id);
  });
});

function checkAnswer(selectedAnswer) {
  if (parseFloat(selectedAnswer) === answer) {
    bigContainer.style.display = "none";
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("correct");
    resultContainer.textContent = "You answered Correctly";
    questionsAnswered++;

    document.body.append(resultContainer);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      resultContainer.remove();
      bigContainer.style.display = "block";
      document.body.style.overflow = "auto";
      switch (questionsAnswered) {
        case 1:
          secondQuestion();
          break;

        case 2:
          thirdQuestion();
          break;

        case 3:
          forthQuestion();
          break;

        case 4:
          fifthQuestion();
          break;

        case 5:
          GameEnd();
          break;
      }
    }, 3000);
  } else {
    bigContainer.style.display = "none";
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("incorrect");
    resultContainer.textContent = "You answered Incorrectly";

    document.body.append(resultContainer);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      resultContainer.remove();
      bigContainer.style.display = "block";
      GameOver();
    }, 3000);
  }
}

function firstBlog() {
  const paragraph =
    "Classical computing operates on binary systems, where information is processed using bits that can either be 0 or 1. This binary approach, through a complex arrangement of transistors and logic gates, has driven the development of modern technology, enabling everything from routine calculations to sophisticated software applications. Classical computers excel at tasks involving well-defined algorithms and predictable data structures, and their architecture has continually evolved to enhance speed and efficiency. Quantum computing, however, represents a transformative shift by employing the principles of quantum mechanics. Instead of bits, quantum computers use qubits, which can exist in multiple states simultaneously due to superposition. Additionally, qubits can be entangled, meaning the state of one qubit can instantaneously influence another, regardless of distance. This ability to perform parallel computations allows quantum computers to solve certain complex problems at unprecedented speeds. For instance, tasks such as factoring large numbers or simulating molecular interactions become more tractable, potentially revolutionizing fields like cryptography, materials science, and optimization. Despite its promise, quantum computing faces significant challenges. The technology is still in early development stages, with issues such as qubit stability, error rates, and the need for extremely low temperatures posing hurdles. While classical computing continues to be indispensable for everyday applications, quantum computing holds the potential to vastly expand computational capabilities, offering solutions to problems that are currently intractable with classical methods. As research progresses, the convergence of these technologies may shape the future of computing in profound ways.";
  paraContainer.textContent = paragraph;
  seperator(paragraph);

  firstQuestion();
}
firstBlog();

function firstQuestion() {
  question.textContent =
    "What is the basic unit of data in classical computing?";

  const option1 = "A) Qubit";
  const option2 = "B) Bit";
  const option3 = "C) Byte";
  const option4 = "D) Node";

  options.forEach((option) => {
    switch (parseFloat(option.id)) {
      case 1:
        option.textContent = option1;
        break;

      case 2:
        option.textContent = option2;
        break;

      case 3:
        option.textContent = option3;
        break;

      case 4:
        option.textContent = option4;
        break;
    }
  });

  answer = 2;
}

function secondQuestion() {
  question.textContent =
    "Which principle allows quantum computers to process multiple possibilities simultaneously?";

  const option1 = "A) Superposition";
  const option2 = "B) Entanglement";
  const option3 = "C) Quantum Tunneling";
  const option4 = "D) Quantum Interference";

  options.forEach((option) => {
    switch (parseFloat(option.id)) {
      case 1:
        option.textContent = option1;
        break;

      case 2:
        option.textContent = option2;
        break;

      case 3:
        option.textContent = option3;
        break;

      case 4:
        option.textContent = option4;
        break;
    }
  });

  answer = 1;
}

function thirdQuestion() {
  question.textContent =
    "What is the term for the phenomenon where qubits can instantaneously affect each other, regardless of distance?";

  const option1 = "A) Superposition";
  const option2 = "B) Quantum Leap";
  const option3 = "C) Entanglement";
  const option4 = "D) Interference";

  options.forEach((option) => {
    switch (parseFloat(option.id)) {
      case 1:
        option.textContent = option1;
        break;

      case 2:
        option.textContent = option2;
        break;

      case 3:
        option.textContent = option3;
        break;

      case 4:
        option.textContent = option4;
        break;
    }
  });

  answer = 3;
}

function forthQuestion() {
  question.textContent =
    "In which field might quantum computing offer significant advancements?";

  const option1 = "A) Everyday web browsing";
  const option2 = "B) Basic arithmetic";
  const option3 = "C) Cryptography and molecular simulations";
  const option4 = "D) Document editing";

  options.forEach((option) => {
    switch (parseFloat(option.id)) {
      case 1:
        option.textContent = option1;
        break;

      case 2:
        option.textContent = option2;
        break;

      case 3:
        option.textContent = option3;
        break;

      case 4:
        option.textContent = option4;
        break;
    }
  });

  answer = 3;
}

function fifthQuestion() {
  question.textContent =
    "What is one major challenge currently faced by quantum computing technology?";

  const option1 = "A) Low-speed processing";
  const option2 = "B) High cost of classical components";
  const option3 = "C) Qubit stability and error rates";
  const option4 = "D) Overheating of transistors";

  options.forEach((option) => {
    switch (parseFloat(option.id)) {
      case 1:
        option.textContent = option1;
        break;

      case 2:
        option.textContent = option2;
        break;

      case 3:
        option.textContent = option3;
        break;

      case 4:
        option.textContent = option4;
        break;
    }
  });

  answer = 3;
}

function seperator(content) {
  if (content.indexOf(" ") > 0) {
    paraArray.push(content.slice(0, content.indexOf(" ")));
    seperator(content.slice(content.indexOf(" ") + 1));
  } else {
    paraArray.push(content);
    paraArrayChange = [...paraArray];
  }
}

paraArray.forEach((word) => {
  letterSlice(word);
});

function letterSlice(word) {
  const length = word.length;
  let i = 0;

  if (i < length) {
    letterArray.push(word.slice(i, i + 1));
    i++;
    letterSlice(word.slice(i));
  } else {
    letterArray.push(word.slice(i));
  }
}

function swapWords() {
  const random1 = Math.floor(Math.random() * paraArrayChange.length);
  const random2 = Math.floor(Math.random() * paraArrayChange.length);

  [paraArrayChange[random1], paraArrayChange[random2]] = [
    paraArrayChange[random2],
    paraArrayChange[random1],
  ];

  paraContentChange = paraArrayChange.join(" ");
  paraContainer.textContent = paraContentChange;

  [paraArrayChange[random1], paraArrayChange[random2]] = [
    paraArrayChange[random2],
    paraArrayChange[random1],
  ];
}

function uncontrolledSwapWords() {
  const random1 = Math.floor(Math.random() * paraArrayChange.length);
  const random2 = Math.floor(Math.random() * paraArrayChange.length);

  [paraArrayChange[random1], paraArrayChange[random2]] = [
    paraArrayChange[random2],
    paraArrayChange[random1],
  ];

  paraContentChange = paraArrayChange.join(" ");
  paraContainer.textContent = paraContentChange;
}

function upperCaseLetters() {
  const random = Math.floor(Math.random() * paraArrayChange.length);

  if (previousUpperCaseLetter) {
    paraArrayChange[previousUpperCaseLetter] =
      paraArrayChange[previousUpperCaseLetter].toLowerCase();
  } else if (previousUpperCaseLetter == 0) {
    paraArrayChange[previousUpperCaseLetter] =
      paraArrayChange[previousUpperCaseLetter].slice(0, 1) +
      paraArrayChange[previousUpperCaseLetter].slice(1).toLowerCase();
  }

  previousUpperCaseLetter = random;
  paraArrayChange[random] = paraArrayChange[random].toUpperCase();
  paraContentChange = paraArrayChange.join(" ");
  paraContainer.textContent = paraContentChange;
}

function colorChange() {
  paraContainer.textContent = "";
  paraArray.forEach((word) => {
    const random = Math.floor(Math.random() * 4) + 1;
    const span = document.createElement("span");
    span.textContent = word + " ";

    switch (random) {
      case 1:
        span.style.color = "green";
        break;

      case 2:
        span.style.color = "yellow";
        break;

      case 3:
        span.style.color = "blue";
        break;

      case 4:
        span.style.color = "crimson";
        break;
    }
    paraContainer.append(span);
  });
}

function letterColorChange() {
  letterChangeArray = [...letterArray];
  paraContainer.textContent = "";

  letterChangeArray.forEach((letter, position, array) => {
    if (letter) {
      const random = Math.floor(Math.random() * 4) + 1;

      switch (random) {
        case 1:
          array[position] = `<font color="green">${letter}</font>`;
          break;

        case 2:
          array[position] = `<font color="yellow">${letter}</font>`;
          break;

        case 3:
          array[position] = `<font color="blue">${letter}</font>`;
          break;

        case 4:
          array[position] = `<font color="crimson">${letter}</font>`;
          break;
      }
    } else {
      array[position] = " ";
    }
  });

  paraContainer.innerHTML = letterChangeArray.join("");
}

function dysfunctionality() {
  //First Wave
  colorChange();
  counter.textContent = 1;

  //Second Wave
  setTimeout(() => {
    resetProgress();
    counter.textContent = 2;
    upperTimer = setInterval(upperCaseLetters, 1000);
  }, 40000);

  //Third Wave
  setTimeout(() => {
    if (previousUpperCaseLetter) {
      paraArrayChange[previousUpperCaseLetter] =
        paraArrayChange[previousUpperCaseLetter].toLowerCase();
    } else if (previousUpperCaseLetter == 0) {
      paraArrayChange[previousUpperCaseLetter] =
        paraArrayChange[previousUpperCaseLetter].slice(0, 1) +
        paraArrayChange[previousUpperCaseLetter].slice(1).toLowerCase();
    }

    resetProgress();
    counter.textContent = 3;
    clearInterval(upperTimer);
    letterColorChange();
  }, 80000);

  //Forth Wave
  let swapTimer;
  setTimeout(() => {
    resetProgress();
    counter.textContent = 4;
    swapTimer = setInterval(swapWords, 1200);
  }, 120000);

  //Fifth Wave
  let lastWaveTimer;
  let colorChangeTimer;
  setTimeout(() => {
    resetProgress();
    counter.textContent = 5;
    clearInterval(swapTimer);
    lastWaveTimer = setInterval(letterColorChange, 900);
    upperTimer = setInterval(upperCaseLetters, 1200);
    colorChangeTimer = setInterval(colorChange, 1500);
  }, 160000);

  //Game Over
  setTimeout(() => {
    clearInterval(lastWaveTimer);
    clearInterval(upperTimer);
    clearInterval(colorChangeTimer);
    resetProgress();
    counter.textContent = "F";
    ProgressDuration = 3;
    totalDuration = 3.1;
    colorChangeTimer = setInterval(letterColorChange, 100);

    setTimeout(() => {
      clearInterval(colorChangeTimer);
      colorChangeTimer = setInterval(colorChange, 100);
    }, 1500);

    setTimeout(() => {
      clearInterval(colorChangeTimer);
      gameFail();
    }, 3000);
  }, 200000);
}

let totalDuration = 40.05;
let ProgressDuration = 40;
let elapsedTime = 0;
const radius = 30;
const circumference = 2 * Math.PI * radius;

const circle = document.querySelector(".progress-ring__circle");

function resetProgress() {
  elapsedTime = 0;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = 0;
}

resetProgress();

function updateProgress() {
  elapsedTime++;
  const progress = elapsedTime / ProgressDuration;
  const offset = progress * circumference;
  circle.style.strokeDashoffset = offset;

  if (elapsedTime >= totalDuration) {
    clearInterval(timerInterval);
    elapsedTime = 0;
    circle.style.strokeDasharray = 0;
    circle.style.strokeDashoffset = circumference;
  }
}

function GameEnd() {
  bigContainer.style.display = "none";
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("gameEnd");
  resultContainer.textContent = "Congratulations! You masterd the Topic.";

  document.body.append(resultContainer);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    resultContainer.textContent = "Made by: Aditya Singla";
    resultContainer.style.fontSize = "3em";
  }, 8000);
}

function GameOver() {
  bigContainer.style.display = "none";
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("gameOver");
  resultContainer.textContent = "Game Over!";

  document.body.append(resultContainer);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    resultContainer.textContent = "Made by: Aditya Singla";
    resultContainer.style.fontSize = "3em";
  }, 6000);
}

function gameFail() {
  bigContainer.style.display = "none";
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("gameOver");
  resultContainer.textContent = "Game Over! Next Time read Fast!";
  resultContainer.style.fontSize = "3em";

  document.body.append(resultContainer);
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    resultContainer.textContent = "Made by: Aditya Singla";
  }, 6000);
}
