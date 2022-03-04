function changeWord(selectedText, changedText, text) {
  if (text.includes(selectedText)) {
    return text.replace(selectedText, changedText);
  }
  return `Error: Bro kata ${selectedText} tidak ada di kalimat -> ${text} (case sensitive)`;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
