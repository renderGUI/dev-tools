#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";

// DEVTOOLS LOADING MENU SCREEN
figlet("DEVTOOLS", function (err, data) {
  console.clear();
  if (err) {
    console.log("Could not load 'DEVTOOLS' ASCII art...");
  }

  const loadingMenuScreen = chalkAnimation.karaoke(data);
  loadingMenuScreen.start();

  setTimeout(() => {
    loadingMenuScreen.stop();
    devToolsMenu();
  }, 1800);
});

// DEVTOOLS MENU
async function devToolsMenu() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "chosenTool",
    type: "list",
    message: "WELCOME TO DEVTOOLS!  SELECT A TOOL TO USE:",
    choices: [
      "Random Color Generator",
      "Decimal-to-Binary Converter",
      "Countdown Timer",
      "Digital Clock",
    ],
  });

  let chosenOption = answers.chosenTool;
  switch (chosenOption) {
    case "Random Color Generator":
      runRandomColorGenerator();
      break;
    case "Decimal-to-Binary Converter":
      runDecimalToBinaryConverter();
      break;
    case "Countdown Timer":
      runCountdownTimer();
      break;
    case "Digital Clock":
      runDigitalClock();
      break;
  }
}

// RANDOM COLOR GENERATOR TOOL
function runRandomColorGenerator() {
  console.clear();
  let rgbCodes = [];
  let randomColorCode;
  for (let i = 0; i < 3; i++) {
    randomColorCode = Math.floor(Math.random() * 256);
    rgbCodes.push(randomColorCode);
  }
  console.log(
    chalk
      .rgb(rgbCodes[0], rgbCodes[1], rgbCodes[2])
      .bold(`${rgbCodes[0]}, ${rgbCodes[1]}, ${rgbCodes[2]}`)
  );
  anotherColorQuestion();
}

async function anotherColorQuestion() {
  const answers = await inquirer.prompt({
    name: "anotherColor",
    type: "confirm",
    message: "Generate another random color?",
  });

  if (answers.anotherColor) {
    runRandomColorGenerator();
  } else {
    devToolsMenu();
  }
}

// DECIMAL-TO-BINARY CONVERTER TOOL
async function runDecimalToBinaryConverter() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "enteredDecimal",
    type: "number",
    message: "Enter a decimal to convert to binary:",
    validate: (answer) => {
      if (isNaN(answer)) {
        return `Invalid number.  Press ${chalk
          .rgb(255, 255, 255)
          .bold("control + K")} and try again.`;
      }
      return true;
    },
  });

  let decimalAsBinary = answers.enteredDecimal.toString(2);
  console.log(chalk.rgb(119, 221, 119).bold(decimalAsBinary));
  anotherDecimalQuestion();
}

async function anotherDecimalQuestion() {
  const answers = await inquirer.prompt({
    name: "anotherDecimal",
    type: "confirm",
    message: "Enter another decimal?",
  });

  if (answers.anotherDecimal) {
    runDecimalToBinaryConverter();
  } else {
    devToolsMenu();
  }
}

// COUNTDOWN TIMER TOOL
async function runCountdownTimer() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "timerDuration",
    type: "number",
    message: "Set a countdown timer for how many seconds?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return `Invalid number.  Press ${chalk
          .rgb(255, 255, 255)
          .bold("control + K")} and try again.`;
      }
      return true;
    },
  });

  let seconds = answers.timerDuration;
  console.clear();
  console.log(seconds);

  let timer = setInterval(() => {
    console.clear();
    seconds--;
    console.log(seconds);

    if (seconds == 0) {
      console.clear();
      clearInterval(timer);
      figlet("TIME!", function (err, data) {
        if (err) {
          console.log("Could not load 'TIME!' ASCII art...");
        }
        console.log(chalk.redBright.bold(data));
      });
    }
  }, 1000);
}

// DIGITAL CLOCK TOOL
function runDigitalClock() {
  console.clear();
  const spinner = createSpinner("Loading...").start();
  setInterval(() => {
    spinner.stop();
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let abbr = "AM";

    if (hour > 12) {
      abbr = "PM";
    }

    if (minute < 10) {
      minute = `0${minute}`;
    }

    if (second < 10) {
      second = `0${second}`;
    }

    console.clear();
    console.log(
      chalk.rgb(255, 255, 255).bold(`${hour}:${minute}:${second} ${abbr}`)
    );
  }, 1000);
}
