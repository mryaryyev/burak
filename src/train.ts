console.log("TRAIN AREA!");

/* R-TASK
Shunday function yozing, u string parametrga ega bolsin.
String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4.
*/
function calculate(params: string): number {
  const numbers = params.match(/\d+/g);
  if (!numbers) return 0;

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }
  return total;
}
const result1 = calculate("1+3");
console.log(result1);
const result2 = calculate("1+*7+5b5");
console.log(result2);

/* Q-TASK
Shunday function yozing,
u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string.
Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true;
MASALAN: hasProperty({name: "BMW", model: "M3"}, "year") return false.
*/
// 1.option
/*
function hasProperty1(param1: { [key: string]: any }, param2: string) {
  for (let key in param1) {
    if (key === param2) {
      return true;
    }
  }
  return false;
}
const result1 = hasProperty1({ name: "BMW", model: "M3" }, "model");
console.log(result1);
const result2 = hasProperty1({ name: "BMW", model: "M3" }, "year");
console.log(result2);

console.log("======");

// 2.option
function hasProperty2(param1: { [key: string]: any }, param2: string): boolean {
  return param2 in param1;
}
const result3 = hasProperty2({ name: "BMW", model: "M3" }, "model");
console.log(result3);
const result4 = hasProperty2({ name: "BMW", model: "M3" }, "year");
console.log(result4);
*/

/* P-TASK
Shunday function yozing, u object qabul qilsin
va arrayni object arrayga otkazib arrayni qaytarsin.
MASALAN: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]].
*/
/*
function objectToArray(params: { [key: string]: any }) {
  let result = [];
  for (let key in params) {
    result.push([key, params[key]]);
  }
  return result;
}
const result1 = objectToArray({ a: 10, b: 20 });
console.log(result1);
const result2 = objectToArray({ KR: 82, TM: 993 });
console.log(result2);
*/

/* O-TASk
Shunday function yozing, u har xil valuelardan iborat array qabul qilsin
va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45.
*/
/*
function calculateSumOfNumbers(params: any[]) {
  let sum: number = 0;
  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] === "number") {
      sum += params[i];
    }
  }
  return sum;
}
const result1 = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
console.log(result1);
const result2 = calculateSumOfNumbers(["10", { son: 10 }, true, "MIT-5", 100]);
console.log(result2);
*/

/* N-TASK
Shunday function yozing, u string qabul qilsin
va string palindrom yani togri oqilganda ham, orqasidan oqilganda
ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false.
*/
/*
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
*/

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
