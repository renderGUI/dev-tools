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