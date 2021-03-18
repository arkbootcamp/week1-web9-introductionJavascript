// TRUE = true | 1 | angka selain 0 | sting yang berisi apapun
// FALSE = false | 0 | null | undefined

// == = pembanding diubah tipedatanya menjadi sama dengan tipe data yang dibandingkan
// === = tidak mengubah tipedata pembanding dan ketika membandingkan selain mengecek data isinya dia akan mengecek apakah tipedatanya sama atau tidak

if (1 === "1") {
  console.log(true);
} else {
  console.log(false);
}

// 1 == "1" // true
// 1 === "1" // false

const harga = 10000;
if (harga > 10000) {
  console.log("Mahal");
} else if (harga > 5000) {
  console.log("Sedang");
} else {
  console.log("Murah");
}

// SWITCH CASE ===========================================================
// const phone = "IPHONE";

// switch (phone) {
//   case "IPHONE": {
//     console.log("Your phone is Iphone");
//     break;
//   }
//   case "NOKIA": {
//     console.log("Your phone is Nokia");
//     break;
//   }
//   default: {
//     console.log("Your phone is not listed");
//   }
// }

// TERNARY OPERATOR ===========================================================
if (harga > 10000) {
  console.log("Mahal");
} else if (harga > 5000) {
  console.log("Sedang");
} else {
  console.log("Murah");
}

harga > 10000
  ? console.log("Mahal")
  : harga > 5000
  ? console.log("Sedang")
  : console.log("Murah");
// kondisi ? proses jika memenuhi kondsi : proses jika tidak memenuhi kondisi

// // SHORT LOGIC ===========================================================
// // && = jika kondisinya true maka akan melanjutkan ke proses berikutnya, jika false maka nilai itu yang akan di tetapkan
// // || = jika kondisinya false maka akan melanjut ke proses berikutnya, jika true maka nilai itu yang akan di tetapkan
let name = "Bagus";
if (name) {
  console.log(name);
} else {
  console.log("anonymous");
}

let checkUsername = name && null && false && "anonymous";
console.log(checkUsername);
