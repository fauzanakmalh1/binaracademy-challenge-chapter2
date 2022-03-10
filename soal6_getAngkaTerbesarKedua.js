const getAngkaTerbesarKedua = (dataNumbers) => {
  if (dataNumbers == null) {
    return `Error: Bro where is the parameter?`;
  }
  if (typeof dataNumbers == "object") {
    let uniqueNumbers = [...new Set(dataNumbers)];
    let max = Math.max.apply(null, uniqueNumbers);
    uniqueNumbers.splice(uniqueNumbers.indexOf(max), 1);
    return Math.max.apply(null, uniqueNumbers);
  }
  return `Error: Data angka must array`;
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
