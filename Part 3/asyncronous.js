// console.log("Hello Proccess 1");

// setTimeout(() => {
//   console.log("Hello Proccess 2");
// }, 2000);

// console.log("Hello Proccess 3");
// SEBELUM ASYNCRONOUS DI HANDLE
// let r = 7;
// let phi = null;
// console.log("Proses deklarasi berjalan !");

// setTimeout(() => {
//   console.log("Proses menentukan nilai phi berjalan !");
//   if (r % 7 === 0) {
//     phi = 22 / 7;
//   } else {
//     phi = 3.14;
//   }
// }, 2000);

// console.log(`Hasil luas lingkaran adalah ${phi * r * r}`);

// SESUDAH ASYNCRONOUS DI HANDLE MENGGUNAKAN CALLBACK FUNCTION
const hitungLuasLingkaran = (callback) => {
  let r = 7;
  let phi = null;
  console.log("Proses deklarasi berjalan !");

  setTimeout(() => {
    console.log("Proses menentukan nilai phi berjalan !");
    if (r % 7 === 0) {
      phi = 22 / 7;
    } else {
      phi = 3.14;
    }
    console.log(`nilai phi = ${phi}`);
    callback(phi, r);
  }, 2000);
};

// const cetakLuasLingkaran = (phi, r) => {
//   console.log(`Hasil luas lingkaran adalah ${phi * r * r}`);
// };

// // contoh ketika membuat fungsi callback
// hitungLuasLingkaran(cetakLuasLingkaran);

hitungLuasLingkaran((phi, r) => {
  console.log(`Hasil luas lingkaran adalah ${phi * r * r}`);
});
