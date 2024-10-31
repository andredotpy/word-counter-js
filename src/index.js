export function wordCounter(text) {
  const paragraphs = getParagraphs(text);
  const counter = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return [];
    return countWord(paragraph);
  });
  return counter;
}

function getParagraphs(text) {
  return text.toLowerCase().split("\n");
}

function countWord(text) {
  const wordList = text.split(" ");
  const result = {};
  wordList.forEach((word) => {
    if (word.length >= 3) {
      const wordWithoutSpecialChar = removeSpecialCharacters(word);
      result[wordWithoutSpecialChar] =
        (result[wordWithoutSpecialChar] || 0) + 1;
    }
  });
  return result;
}

function removeSpecialCharacters(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
