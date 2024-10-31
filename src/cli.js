import chalk from "chalk";
import fs from "fs";
import path from "path";
import { wordCounter } from "./index.js";
import errorHandler from "./errors/errorHandlers.js";
import { outputText } from "./helpers.js";
import { Command } from "commander";

const program = new Command();

program
  .version("0.0.1")
  .option(
    "-tfp, --text-file-path <string>",
    "text file path of text file to be evaluated"
  )
  .option("-rfp, --result-file-path <string>", "path dir to create result file")
  .action((options) => {
    const { textFilePath, resultFilePath } = options;
    if (!textFilePath || !resultFilePath) {
      console.error(
        chalk.red("error: please insert text file path and result dir path")
      );
      program.help();
      return;
    }

    const filePath = path.resolve(textFilePath);
    const resultPath = path.resolve(resultFilePath);
    try {
      fileEvaluation(filePath, resultPath);
      console.log(chalk.green("file successfuly evaluated"));
    } catch (err) {
      console.error(chalk.red("an error has occured"), err);
    }
  });

program.parse();

function fileEvaluation(filePath, resultPath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    try {
      if (err) throw err;
      const result = wordCounter(data);
      createAndSaveFile(filePath, result, resultPath);
    } catch (err) {
      errorHandler(err);
    }
  });
}

async function createAndSaveFile(filePath, wordsList, path) {
  const newFile = `${path}/${createResultFilename(filePath)}.txt`;
  const wordsText = outputText(wordsList);
  try {
    await fs.promises.writeFile(newFile, wordsText);
    console.log(`New file created at ${newFile}`);
  } catch (err) {
    throw err;
  }
}

function createResultFilename(filePath) {
  const listFilePath = filePath.split("/");
  const fileName = listFilePath[listFilePath.length - 1].split(".")[0];
  return `result-${fileName}`;
}
