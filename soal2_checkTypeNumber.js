const checkTypeNumber = (givenNumber) => {
  if (givenNumber == null) return `Error: Bro where is the parameter?`;
  if (Number.isInteger(givenNumber)) return givenNumber % 2 == 0 ? "GENAP" : "GANJIL";
  return `Error: Invalid data type`;
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
