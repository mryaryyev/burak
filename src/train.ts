console.log("TRAIN AREA!");

/* N-TASK
Shunday function yozing, u string qabul qilsin
va string palindrom yani togri oqilganda ham, orqasidan oqilganda
ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false.
*/
function palindromCheck(params: string) {
  const paramsArray = params.split("");
  let reverse: string[] = [];
  for (let i = 0; i < paramsArray.length; i++) {
    reverse.unshift(paramsArray[i]);
    reverse;
  }
  const revereString = reverse.join("");
  if (params === revereString) {
    return true;
  } else {
    return false;
  }
}
const result1 = palindromCheck("dad");
console.log(result1);

const result2 = palindromCheck("son");
console.log(result2);

const result3 = palindromCheck("mom");
console.log(result3);

/* M-TASK
Shunday function yozing,
u raqamlardan tashkil topgan array qabul qilsin
a array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}].
*/
/*
function getSquareNumbers(params: number[]) {
  if (!params.every((num) => typeof num === "number")) {
    return "ERROR, write only numbers";
  }
  const square = params.map((number) => {
    return { number: number, square: number * number };
  });
  return square;
}
const result1 = getSquareNumbers([1, 2, 3]);
console.log(result1);

const result2 = getSquareNumbers([10, 20, 30]);
console.log(result2);
*/

/* L-TASK
Shunday function yozing,
u string qabul qilsin
va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc".
*/
/*
function reverseSentence(a: string): string {
  const a_array = a.split(" ");

  const reverse_a_array = a_array.map((word) => {
    return word.split("").reverse().join("");
  });
  return reverse_a_array.join(" ");
}

const result1 = reverseSentence("we like coding");
console.log(result1);

const result2 = reverseSentence("Software Engineer");
console.log(result2);
*/
