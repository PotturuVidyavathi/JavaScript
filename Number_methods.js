// ============= Basic (1–7) ===============

// Number()   --> is used to convert a value into a number
            //   -->  it keeps the decimal values 
// Example:
// Number("25");      // 25
// Number("25.5");    // 25.5
// Number("abc");     // NaN


// parseInt() --> is used to convert a value into an integer
            //   -->  it removes the decimal values 


// Example:
// parseInt("45.89");   // 45
// parseInt("100px");   // 100


// parseFloat()  --> is used to convert a value into a floating-point number

// Example:
// parseFloat("45.89");  // 45.89
// parseFloat("60.5px"); // 60.5


// isNaN() -->  is used to check whether a value is NOT a number

// Example:
// isNaN("hello");   // true
// isNaN(45);        // false
// isNaN("45");      // false

// Number.isInteger() -->  is used to check whether a value is an integer


// Example:
// Number.isInteger(25);     // true
// Number.isInteger(25.5);   // false


// Number.isFinite() --> is used to check whether a value is a finite number


// Example:
// Number.isFinite(100);       // true
// Number.isFinite(Infinity);  // false
// Number.isFinite(NaN);       // false

// toFixed() --> is used to round a number to specified decimal places


// Example:
// let num = 4.5678;
// num.toFixed(2);   // "4.57"


// toPrecision() --> is used to format a number to a specified total number of digits


// Example:
// let num = 123.456;
// num.toPrecision(4);  // "123.5"


/*1.  Convert "250" to a number using Number().*/

// let num1 = "250"
// console.log(typeof(num1))
// let cnrt_num = Number(num1)
// console.log(typeof(cnrt_num))

/* 2. Convert "45.89" to integer using parseInt().*/

// let value = "45.89"
// console.log(parseInt(value))
// console.log(Number.parseInt(value))   // this line prints 45
// console.log(typeof(Number.parseInt(value)))  //this line prints the dataty "number"


/* 3. Convert "60.45" to float using parseFloat(). */

// let value = "60.45"
// console.log(parseFloat(value))
// console.log(Number.parseFloat(value))
// console.log(typeof(Number.parseFloat(value)))


/* 4. Round 4.5678 to 2 decimal places using toFixed(). */

// let val1 = 4.5678
// console.log(val1.toFixed(2))

/* 5. Check if "hello" is a number using isNaN(). */

// let str = "hello"
// console.log(isNaN(str))

/* 6. Check if 25.0 is an integer using Number.isInteger(). */

// let value1 = 25.0
// if (Number.isInteger(value1)){
//     console.log(`the given value ${value1} is integer`)
// }
// else{
//     console.log(`the given value ${value1} is Not integer`)
// }

/* 7. Convert number 500 to a string using toString(). */

// let val1 = 500
// console.log(typeof(toString(val1)))
// let str = Number.toString(val1)
// console.log(typeof(str))

//=============== Intermediate Number Methods ==================

/* 8. Round 9.3, 9.6, 9.5 using Math.round(). */

// let num1 = [9.3, 9.6, 9.5]
// let num2 = []
// num1.forEach((value1)=>{
//     num2.push(Math.round(value1))
// })
// console.log(num2)

/* 9. Round up 2.1, 2.9 using Math.ceil(). */

// let num1 = [2.1, 2.9]
// let num2 = []
// num1.forEach((value1)=>{
//     num2.push(Math.ceil(value1))
// })
// console.log(num2)

/* 10. Round down 6.9, 6.1 using Math.floor(). */

// let num1 = [6.9, 6.1]
// let num2 = []
// num1.forEach((value1)=>{
//     num2.push(Math.floor(value1))
// })
// console.log(num2)

/* 11. Find the smallest number from [2, 8, 5, 1] using Math.min.*/

// let arr1 = [2, 8, 5, 1]
// console.log(Math.min(...arr1))

/* 12. Find the largest number from [2, 8, 5, 1] using Math.max.*/

// let arr1 = [2, 8, 5, 1]
// console.log(Math.max(...arr1))

/* 13. Calculate 3^5 using Math.pow().*/

// console.log(Math.pow(3,5))

/* 14. Find square root of 256 using Math.sqrt(). */

// console.log(Math.sqrt(256))

//================== Advanced Number Methods========================

/* 15. Generate a random number between 1–10 (use formula & Math.random()).*/

// let number = (Math.floor(Math.random()*10)+1)
// console.log(number)

/* 16. Convert "100px" to a number using parseInt().*/

// let num = "100px"
// console.log(Number.parseInt(num))

/* 17. Display price with 2 decimals: price = 345.6789.*/

// let price = 345.6789
// console.log(price.toFixed(2))

/* 18. Check if user input "45xyz" is a number or not. */

// let ip = "45xyz"
// if (isNaN(ip)){
//     console.log("It is a number")
// }
// else{
//     console.log("Not a number")
// }

/* 19. Generate 5 random lottery numbers (1–50). */

// let lottery = []
// for (var i=1;i<=5;i++){
//     lottery.push(Math.floor(Math.random()*50)+1)
// }
// console.log(lottery)

/* 20. Calculate the total of array [3.5, 4.2, 5.7], rounded to 1 decimal place. */

// let arr1 = [3.5, 4.2, 5.7]
// let sum = 0
// arr1.forEach((value)=>{
//     sum += value

// })
// console.log(sum.toFixed(1))