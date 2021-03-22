const biodata = {
  firstName: "Bagus",
  lastName: "Tri",

  fullName: function () {
    const setName = this.firstName + this.lastName;
    return setName;
  },
  obj1: {
    additional: {
      num1: 1,
      num2: 2,
      penjumlahan: function () {
        console.log(this.num1);
        console.log(this.num2);
        console.log(biodata.firstName);
        const hitung = this.num1 + this.num2;
        return hitung;
      },
    },
  },
};

console.log(biodata.fullName());
console.log(biodata.obj1.additional.penjumlahan());
