// ==========BASIC Math problems==============\\

/* 1. Round off value

Input:

let num = 4.7;
Use Math.round() → Expected output: 5
*/ 

// let num = 4.7
// console.log(Math.round(num))
// console.log(Math.round(4.3))

/* 2. Round down

Input:
let num = 9.8;
Use Math.floor() → Output: 9

*/

// let num = 9.8
// console.log(Math.floor(num))


/*  3. Round up

Input:

let num = 6.1;

Use Math.ceil() → Output: 7
*/

// let num = 6.1
// console.log(Math.ceil(num))

/* 4. Square root

Find √144 using Math.sqrt()
*/

// console.log(Math.sqrt(144))

/* 5. Power

Calculate 5³ → use Math.pow()
*/

// console.log(Math.pow(5,3))
// console.log(Math.pow(4,2))

/* 6. Absolute value

Input:

let value = -45;

Use Math.abs()
*/

// console.log(Math.abs(-45))
// console.log(Math.abs(-0))

/*  7. Minimum number

Find the smallest number among 15, 20, 3, 17 using Math.min()
*/

// console.log(Math.min(15, 20, 3, 17))

/* 8. Maximum number

Find the largest number among 10, 55, 40, 22 using Math.max()
*/

// console.log(Math.max(10, 55, 40, 22))


//=============INTERMEDIATE MAth Problems=============//

/* 9. Generate a random number between 1–6

(simulate dice) → using Math.random(), Math.floor()
*/
// here if we don't add 1 we get values 0,1,2,3,4,5  cant het 6 as answer

// console.log(Math.floor(Math.random()*6))
// console.log(Math.floor(Math.random()*6)+1)


/* 10. Generate OTP of 4 digits

Example output: 4829
*/
// if we dont add 1000 there is a chance of getting 2 or 3 or 4 digits number

// console.log(1000 + Math.floor(Math.random()*9000))


/* 11. Calculate area of circle

radius = 7 → use Math.PI & Math.pow()
*/
// area of circle = pi * r^2

// let radius = 7
// console.log(Math.PI * radius * radius)


/* 12. Convert temperature

Celsius→Fahrenheit using:

F = (C * 9/5) + 32

Round using Math.round().
*/

// let C = 32
// let F = Math.round((C * 9/5) + 32)
// console.log(F)

/* 13. Bank interest

Principal = 5000, Rate = 8%, Time = 2 years
Find interest & round final amount.
*/

// let Principal = 5000
// let Rate = 8 
// let Time = 2 

// let interest = (Principal*Time*Rate)/100
// console.log(`Interest: ${interest}`)
// console.log(`final amount: `,Math.floor(interest)+Principal)

/* 14. Find square of every number in array
[2,4,6] → [4,16,36]

Use Math.pow() with forEach.
*/

// let num = [2,4,6]
// let sqrt = []
// num.forEach((value)=>{
//     sqrt.push(Math.pow(value,2))
// })
// console.log(sqrt)

/* 15. Round array values
[4.1, 5.6, 9.4] → [4,6,9]

Use forEach + Math.round()
*/

// let num = [4.1, 5.6, 9.4]
// let num2 = []
// num.forEach((value)=>{
//     num2.push(Math.round(value))
// })
// console.log(num2)


/* 16. Height comparison

Given heights:

[162.8, 170.3, 169.7, 158.6]

Find tallest height using Math.max()
*/


// let heights = [162.8, 170.3, 169.7, 158.6]
// console.log(Math.max(...heights))

// ===== method 2 =====

// let heights = [162.8, 170.3, 169.7, 158.6]
// let max_height = 0
// for(var i = 0;i<heights.length;i++){
//     if(heights[i] > max_height){
//         max_height = heights[i]
//     }
// }
// console.log(max_height)


/* 17. Absolute difference

Input: a = 40, b = 65
Output: |a - b| using Math.abs()
*/

// let a = 40 
// let b = 65
// console.log(Math.abs(a-b))

/*  18. Random password suggestion

Generate random number (0-1000) and round it to nearest integer.
*/

// console.log(Math.round(Math.random()*1000))

// ============ADVANCED Math problems=======


/* 19. Random Number Game

Computer generates random number (1-50) → user guesses → show:

Too high

Too low

Correct!
*/

// let user = 36
// let random_num = Math.floor(Math.random()*50)+1
// console.log(`random number ${random_num}`)
// if(user === random_num){
//     console.log("Correct")
// }
// else if(user>random_num){
//     console.log("Too high")
// }
// else{
//     console.log("Too low")
// }


/* 20. EMI Calculation

Use:

EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]

Round to nearest integer.
*/

// let P = 5000
// let R = 12/100
// let N = 2

// let EMI = (P * R * Math.pow((1+R),N*12))/(Math.pow((1+R),N*12))-1
// console.log(EMI)

/* 21. Scientific formula

Evaluate:

(√144 + 3² + 2³) / 5
*/

// let square = Math.sqrt(144)
// let power1 = Math.pow(3,2)
// let power2 = Math.pow(2,3)
// console.log((square+power1+power2)/5)


/* 22. GPA calculator

Given marks array → convert to 10-point GPA format → use rounding.
*/

// let marks = [85, 92, 76, 88];
// let grades = []
// marks.forEach((value)=>{
//     grades.push(Math.round(value/10))
// })
// console.log(grades)

/* 23. Discount calculation

Price = 999.49 → apply 18% GST → round final bill.
*/

// let Price = 999.49
// let gst = Price * 18/100
// let final_bill = Price + gst
// console.log(Math.round(final_bill))
