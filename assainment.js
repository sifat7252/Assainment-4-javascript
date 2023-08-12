/*  PROBLEM NO 1 */
/*----------------------*/

// function cubeNumber(number) {

//     if(typeof number === "number"){
//          let result = Math.pow(number, 3);
//          return result;
//     }
//     else{

//         return ('please input a number')
//     }
// }
// const inputNumber = cubeNumber(4);
// console.log(inputNumber);

/*  PROBLEM NO 1  *
*------------------*/

// function matchFinder(string1, string2) {
//     if(string1.includes(string2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const mainString = ('john doe', 'doe');
// const result = matchFinder(mainString);
// console.log(result);

// function matchFinder(string1, string2){

//     let mainString = string1;
//     mainString = string1.indexOf(string2);
//     return mainString; 
// }
// const inputSting = ["John Doe", "ohn"]
// const result = matchFinder(inputSting);
// console.log(result);

/* PROBLEM NO 3  *
*------------------*/

// function sortMaker(arr){

//         for(let i = 0; i < arr.length; i++){
//             if(arr[0,1] >= 0){

//                 if(arr.indexOf(0) !== arr.indexOf(1)){
//                     return ('equal');
//                 }
//                 else {
//                     return ('i am positive');
//                 }
//             }
//             else{
//                 return ('Invalid Input');
//             }

//         }
//     }



//     if(arr <= 0){
//         console.log(arr);
//         return ('Invalid Input');
//     }

// const inputNumber = [2, 2];
// const result = sortMaker(inputNumber);
// console.log(result);

/*  PROBLEM NO 4  *
*-------------------*/

// function findAddress(obj){
//     if(typeof obj !== "object"){
//         return "please provide me a valid object."
//     }
//     else{
//         const street = obj.street || "__";
//         const house = obj.house || "__";
//         const society = obj.society || "__";

//         return street, house, society;
//         // return +street+ "," +house+ "," +society+ 
//     }
// }

// const address = 
//         {street: 10, house:"15A",  society: 'earth perfect'}

// const result = findAddress (address);
// console.log(result);


// function findAddress(obj) {
//     let newArray = [];
//     for(let i = 0; i < obj.length; i++){
//         const fullAddress = obj[i];
//         console.log(fullAddress);

// let address = obj [street];
// console.log(address);



// if(typeof fullAddress.street !== "Number"  ){
//     console.log(fullAddress.street);
// }
// else{
//     console.log('__');

// }
// let type = typeof fullAddress.street;
// console.log(type);
// else if(typeof fullAddress.society === "strings" ){
//     console.log(fullAddress.society);
// }
// else{
//     console.log('__');
// }
//  const values = Object.values(fullAddress);
// console.log(values);

//     }


//     return;
// }
// const address = [
//     {street: 10, house: "15A", society: 'earth perfect'}
// ]
// const result = findAddress(address);
// console.log(result);

/*  PROBLEM NO 5 *
*------------------*/

// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray)) {
//         for(let i = 0; i < changeArray.length; i++){
//             const index = i; 
//             const element = changeArray[index];
//             // console.log(element, index);
//             // return totalDue;
//         }
//     }
//     else {
//         return "please provide an array";
//     }


// }
// const input = ([1, 2, 5], 10);
// const result = canPay(input);
// console.log(result);


// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray)) {
//         return 'please provide a valid array.';
//     }
//     else {
//         if (changeArray.length === 0) {
//             return 'An empty array cant be used'
//         }
//         else {
//             let sum = 0;
//             for (let i = 0; i = changeArray.length; i++) {
//                 sum = sum + changeArray[i];
//             }

//         }
//         return sum >= totalDue;
//     }



// }

// const totalTk = [1, 5, 5];
// const totalCost = 10;
// const result = canPay(totalTk, totalCost);
// console.log(result);




/** from chat gpt  */

// function canPay(coinsArray, price) {
//     if (!Array.isArray(coinsArray) || typeof price !== 'number' || price <= 0) {
//       throw new Error("Invalid input. First argument must be an array of coins and second argument must be a positive number.");
//     }

//     const totalCoinsValue = coinsArray.reduce((sum, coin) => sum + coin, 0);

//     return totalCoinsValue >= price;
//   }

//   // Example usage:
//   const myCoins = [1, 5, 5];
//   const chipPrice = 10;
//   const canPayResult = canPay(myCoins, chipPrice);
//   console.log(canPayResult); // This will print "Can pay for chips: true"

// This will print "Can pay for expensive chips: false"

// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) && (changeArray.length === 0)) {
//         return 'please provide a valid array.';
//     }
//     else {
//         let sum = 0;
//         for (let i = 0; i < changeArray.length; i++) {
//             let index = i; 
//             let element = changeArray[index];
//             sum = sum + element;
//         }
//         return sum >= totalDue;

//     }
// }

/*  PROBLEM 2  */

// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//       return 'This is not a string';
//     }
//     if (string1.includes(string2)) {
//       return true;
//     } 
//     else {
//       return false;
//     }
//   }

// Bonus function
//   function validateData(inputString) {
//     if (typeof inputString !== 'string') {
//       throw new Error("Input must be a string.");
//     }

//     if (inputString.includes("double") || inputString.includes("any")) {
//       return "Input string is valid.";
//     } else {
//       return "Error message: Invalid input string.";
//     }
//   }

// Example usage:
//   const firstString = "JavaScript";
//   const secondString = "Code";

//   const matchResult = matchFinder(firstString, secondString);
//   console.log("Match Result:", matchResult); // This will print "Match Result: true"

//   const inputData = "this is any valid input";
//   const validationResult = validateData(inputData);
//   console.log("Validation Result:", validationResult); // This will print "Validation Result: Input string is valid."

// function sortMaker(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//       return 'please provide a array with two number';
//     }

//     if (arr.some(item => typeof item !== 'number')) {
//       return "Invalid";
//     }

//     if (arr[0] === arr[1]) {
//       return "equal";
//     }

//     if (arr[1] > 0) {
//       return arr.sort((a, b) => a - b);
//     }

//     return arr;
//   }

// Example usage:
//   const array1 = [5, 3];
//   const result1 = sortMaker(array1);
//   console.log("Result 1:", result1); // This will print "Result 1: [3, 5]"

//   const array2 = [7, 7];
//   const result2 = sortMaker(array2);
//   console.log("Result 2:", result2); // This will print "Result 2: equal"

//   const array3 = [-3, 5];
//   const result3 = sortMaker(array3);
//   console.log("Result 3:", result3); // This will print "Result 3: Invalid"

// ready function 


// function sortMaker(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "please input an array with two elements.";
//     }

//     const element1 = arr[0];
//     const element2 = arr[1];

//     if (typeof element1 !== 'number' || typeof element2 !== 'number') {
//         return "please input a valid number";
//     }

//     if (element1 === element2) {
//         return "equal";
//     }

//     if (element2 > 0) {
//         if (element1 > element2) {
//             return [element2, element1];

//         } else {
//             return arr;
//         }
//     }

//     return "Invalid Input";
// }

// // Example usage:
// const array = [5, 3];
// const result = sortMaker(array);
// console.log(result);


// testing function 

// function sortMaker(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "please input an array with two elements.";
//     }
//     else {

//         const element1 = arr[0];
//         const element2 = arr[1];

//         if (typeof element1 !== 'number' || typeof element2 !== 'number') {
//             return "please input a valid number";
//         }
//         else if (element1 === element2) {
//             return "equal";
//         }
//         else if (element1 && element2 < 0){
//             return 'Invlid input'
//         }
//         else if (element2  && element1 > 0) {

//             if (element1 > element2) {
//                 return [element1, element2];
//             }
//             else if (element2 > element1){
//                 return [element2, element1];
//             }
                
//             }
//         }
       
//     }










// // Example usage:
// const array = [5, 3];
// const result = sortMaker(array);
// console.log(result);



/* PROBLEM 4  */

function findAddress(obj) {
   if (typeof obj !== "object"){
    return "please input a object"
   }
   else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return [street, house, society];

}

}

//    return Object.values(obj);


const address = {street: 10,  society: 'earth perfect'};
const result = findAddress(address);
console.log(result);









