const checkEmail = (email) => {
  let emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email == null) {
    return `Error: Bro where is the parameter?`;
  } else if (email.includes("@")) {
    return emailRegex.test(email) ? "VALID" : "INVALID";
  } else if (!email.includes("@") || !email.includes(".")) {
    return `Error: email harus memiliki karakter "@" dan "."`;
  } else if (!email.includes("@")) {
    return `Error: email harus memiliki karakter "@"`;
  } else {
    return `Error: Masukkan format email dengan benar Ex: fauzan@gmail.com`;
  }
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkEmail());
