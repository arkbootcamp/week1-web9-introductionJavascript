// const biodataPribadi // camel case
// const BiodataProbadi // pascal case
// const biodata_probadi // snake case
// const biodata-pribadi // kebab case

// DECLARATION FUNCTION
// DECLARATION FUNCTION = memiliki sifat hoisting yang dimana untuk fungsinya bisa diletakkan dimana saja
function test(parameterObject, parameterArray, parameterBoolean) {
  return console.log("test");
}
const objectData = { name: "bagus" };
test(objectData, [1, 2, 3], true);

// EXPRESSION FUNCTION
// EXPRESSION FUNCTION = fungsinya disimpan ke dalam variabel jadi pemanggilannya harus dibawah fungsi itu berasa
const test2 = function () {
  return console.log("test2");
};
test2();

const test3 = () => {
  return console.log("test3");
};
test3();

// ==============================================
const additional = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    const penjumlahan = num1 + num2;
    const pengurangan = num1 - num2;
    return { penjumlahan, pengurangan: pengurangan };
  } else {
    return "nilai number harus angka";
  }
};
console.log(additional(1, 2));

function loop() {
  let a = 0;
  for (let i = 0; i <= 5; i++) {
    a += i;
    // return tidak bisa diletakkan di dalam for karena fungsi akan membaca bahwa return sebagai akhir dari program
  }
  return a;
}
console.log(loop());
