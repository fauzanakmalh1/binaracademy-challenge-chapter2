const isValidPassword = (givenPassword) => {
  if (givenPassword == null) return `Error: Bro where is the parameter?`;
  if (
    givenPassword.length >= 8 &&
    typeof givenPassword == "string" &&
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/.test(givenPassword)
  )
    return true;
  if (givenPassword == 0)
    return `Error: Password must have 8 words, 1 uppercase, 1 lowercase, and 1 number`;
  return false;
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
