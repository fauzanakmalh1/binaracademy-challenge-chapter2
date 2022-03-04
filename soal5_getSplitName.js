const getSplitName = (personName) => {
  if (personName == null) {
    return `Error: Bro where is the parameter?`;
  } else if (typeof personName == "string") {
    splitName = personName.split(" ");

    if (splitName.length > 3) {
      return `Error: This function is only for 3 characters name`;
    } else if (splitName.length == 3) {
      return {
        firstName: splitName[0],
        middleName: splitName[1],
        lastName: splitName[2],
      };
    } else if (splitName.length == 2) {
      return {
        firstName: splitName[0],
        middleName: null,
        lastName: splitName[1],
      };
    } else if (splitName.length == 1) {
      return {
        firstName: splitName[0],
        middleName: null,
        lastName: null,
      };
    }
  } else {
    return `Error: Name must string`;
  }
};

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
console.log(getSplitName());
