// let getDataHobby1 = () => {
//   let success = true;
//   let data = ["Futsal", "Badminton"];
//   if (success) {
//     return data;
//   } else {
//     return new Error("Gagal Mengambil Data !");
//   }
// };
// console.log(getDataHobby1());

let getDataHobby2 = () =>
  new Promise((resolve, reject) => {
    // let success = true;
    let data = ["Futsal", "Badminton"];
    // if (success) {
    setTimeout(() => {
      resolve(data);
    }, 500);
    // } else {
    setTimeout(() => {
      reject(new Error("Gagal Mengambil Data !"));
    }, 1000);
    // }
  });

let printData = (data) => {
  console.log(data);
};

getDataHobby2()
  .then((result) => {
    // console.log(".then is running");
    // console.log(result);
    // fungsi promise atau fungsi biasa yang bsa diletakan di dalam .then
    printData(result);
  })
  .catch((error) => {
    // console.log(".catch is running");
    // console.log(error);
    printData(error);
  });
