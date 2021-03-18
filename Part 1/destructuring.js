// DESTRUCTURING OBJECT ================================================
const profile = {
  name: "Bagus",
  hobby: {
    hobby1: "menyanyi",
    hobby2: "menari",
    hobby3: {
      hobby31: "bermain",
    },
  },
  sister: {
    sister1: "Ana",
    sister2: "Bella",
  },
};

const { hobby1, hobby2 } = profile.hobby;
console.log(hobby1);
console.log(hobby2);

const { sister1, sister2 } = profile.sister;
console.log(sister1);
console.log(sister2);

const { hobby31: hobbyUtama } = profile.hobby.hobby3;
console.log(hobbyUtama);

// DESTRUCTURING ARRAY =================================================

const rgb = [255, 140, 0];

// before using destructing
// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// destructing assignment
const [red, green, blue] = rgb;
// nama variabel bisa diubah ubah yang terpenting adalah peletakannya

// console.log(red);
