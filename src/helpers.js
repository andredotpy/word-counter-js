function filterCounter(paragraph) {
  return Object.keys(paragraph).filter((key) => paragraph[key] > 1);
}

function outputText(wordsList) {
  let finalText = "";
  wordsList.forEach((paragraph, idx) => {
    const repeatedWords = filterCounter(paragraph).join(", ");
    if (repeatedWords.length > 1) {
      finalText += `repeated words in paragraph ${idx + 1}: ${repeatedWords}\n`;
    }
  });
  return finalText;
}

export { outputText };
