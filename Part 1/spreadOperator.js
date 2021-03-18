// SPREAD OPERATOR ARRAY ==================================================
const hobby = ["swiming", "gaming"];
const newHobby = [...hobby, "karaoke", "hiking"];

console.log(newHobby);

const arr1 = [0, 1, 2];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, 3, ...arr2, 7];
console.log(arr3[0]);

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// SPREAD OPERATOR OBJECT ==================================================
const obj1 = { foo: "bar", x: 12 };
const obj2 = { foo: "baz", y: 10 };

const obj3 = { ...obj2, ...obj1 };
// { foo: 'bar', x: 12, foo: "baz", y: 10 }
console.log(obj3);

// CASE SPREAD OPERATOR ARRAY OBJECT ========================================
const obj = { key: "value1" };
// const array = [...obj];
// console.log(array); // error kecuali jika kita memberikan tambahan pembungkus berupa object juga
