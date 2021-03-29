// npm init = untuk generate package json
// npm install = menginstall semua package yang sudah di list didalam package json
// npm install nama_package = untuk installasi package dan diletakkan di depedencies package json
// npm install nama_package -D = untuk installasi package dan diletakkan di devDepedencies package json
// [1]
// const name = require("./name");
// name = {hobby, biodata}
// console.log(name.hobby);
// console.log(name.biodata());

// [2]
// const { hobby, biodata } = require("./name");
// console.log(hobby);
// console.log(biodata());

console.log("Hello World !");
console.log(__filename);
console.log(__dirname);

// (function(exports, require, module, __filename, __dirname) {
//   // in here
// })

// const test = require('./')
// const test2 = require('../')
