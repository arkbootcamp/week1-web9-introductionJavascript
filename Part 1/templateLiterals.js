const name = "Bagus";
const age = 10;
const age2 = 2;
// TANPA TEMPLATE LITERAL ==============================================
const fullText = "Nama saya " + name + "\n , umur saya " + age;
console.log(fullText);
// MULTI LINE ==========================================================
const fullText2 = `Nama saya ${name} , 
umur saya ${age}`;
console.log(fullText2);
// EXPRESSION ==========================================================
const fullText3 = `Nama saya ${name} , umur saya ${age + age2}`;
console.log(fullText3);
