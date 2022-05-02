#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

// DEVTOOLS MENU
async function devToolsMenu() {
  console.clear();
  const answers = await inquirer.prompt({
    name: "chosenTool",
    type: "list",
    message: "WELCOME TO DEVTOOLS!  SELECT A TOOL TO USE:",
    choices: [
      "Random Color Generator",
      "Coin Flipper",
      "Decimal-to-Binary Converter",
      "Git Commands Reference Sheet",
    ],
  });

  let chosenOption = answers.chosenTool;
  switch (chosenOption) {
    case "Random Color Generator":
      runRandomColorGenerator();
      break;
    case "Coin Flipper":
      runCoinFlipper();
      break;
    case "Decimal-to-Binary Converter":
      runDecimalToBinaryConverter();
      break;
    case "Git Commands Reference Sheet":
      runGitCommands();
      break;
  }
}
await devToolsMenu();

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
  generateAnotherRandomColor();
}

async function generateAnotherRandomColor() {
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

// COIN FLIPPER TOOL
function runCoinFlipper() {
  console.clear();
  let coin = ["HEADS", "TAILS"];
  let randomFlip = coin[Math.floor(Math.random() * 2)];
  console.log(randomFlip);
  flipAgain();
}

async function flipAgain() {
  const answers = await inquirer.prompt({
    name: "anotherFlip",
    type: "confirm",
    message: "Flip again?",
  });

  if (answers.anotherFlip) {
    runCoinFlipper();
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
  });

  let decimalAsBinary = answers.enteredDecimal.toString(2);
  console.log(chalk.rgb(119, 221, 119).bold(decimalAsBinary));
  enterAnotherDecimal();
}

async function enterAnotherDecimal() {
  const answers = await inquirer.prompt({
    name: "anotherDecimal",
    type: "confirm",
    message: "Enter another decimal:",
  });

  if (answers.anotherDecimal) {
    runDecimalToBinaryConverter();
  } else {
    devToolsMenu();
  }
}