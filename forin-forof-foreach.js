/* 1. Print indexes using for…in
Given:
let fruits = ["apple", "banana", "mango"];

Print all indexes using for…in.
*/


// let fruits = ["apple", "banana", "mango"];
// for(let f1 in fruits){
//     console.log(f1)
// }


/* 2. Print values using for…of

Given:

let nums = [4, 8, 12];

Print all values using for…of.
*/


// let nums = [4, 8, 12];
// for(var f1 of nums){
//     console.log(f1)
// }

/* 3. Count letters using for…of

Given:

let word = "hello";

Print each character.
*/


// let word = "hello";
// let count = 0
// for(var char of word){
//     count++;
// }
// console.log(count)


/* 4. Display object keys using for…in

Given:

let student = { id: 101, name: "Sam", age: 20 };

Print all keys.
*/


// let student = { id: 101, name: "Sam", age: 20 };
// for(var key in student){
//     console.log(key)
// }


/* 5. Print array values using forEach()

Given:

let items = ["pen", "pencil", "eraser"];

Print each item.
*/


// let items = ["pen", "pencil", "eraser"];
// items.forEach((value)=>{
//     console.log(`${value}`)
// })


/* 6. Print index + value (forEach)

Given:

let marks = [50, 60, 70];

Print:

Index: 0 Value: 50
Index: 1 Value: 60
Index: 2 Value: 70
*/


// let marks = [50, 60, 70];
// marks.forEach((value,index)=>{
//     console.log(`Index: ${index} Value: ${value}`)
// })


/* 7. Sum of array elements

Given:

let prices = [10, 20, 30];

Use forEach to calculate total.
*/


// let prices = [10, 20, 30];
// let total = 0
// prices.forEach((value)=>{
//     total += value
// })
// console.log(total)


/* 8. Print even numbers only

Given:

let numbers = [1,2,3,4,5,6];

Using for…of, print only even numbers.
*/


// let numbers = [1,2,3,4,5,6];
// for(var n1 of numbers){
//     if (n1%2==0){
//         console.log(n1)
//     }
// }


/* 9. Reverse a string using for…of

Given "javascript" → print reversed using loop.
*/ 

// var word = "javascript"
// var rev = ""
// for(var char of word){
//     rev = char + rev
// }
// console.log(rev)


/* 10. Count vowels in a string

Given "beautiful" → count vowels using for…of.
*/


// method---1

// var word = "beautiful"
// var vowels = 0 
// for(var char of word){
//     if (('aeiouAEIOU').includes(char)){
//         vowels += 1
//     }
// }
// console.log(vowels)

// method---2

// var word = "beautiful"
// var vowels = 0 
// for(var char of word){
//     if (/[aeiouAEIOU]/.test(char)){
//         vowels += 1
//     }
// }
// console.log(vowels)


/* 11. Print object values

Given:

let user = {name:"Amit", city:"Hyd", age:22};

Use for…in to print only values.
*/


// let user = {name:"Amit", city:"Hyd", age:22};
// for(var u1 in user){
//     console.log(u1)
//     console.log(user[u1])
// }


/* 12. Filter numbers > 50

Given:

let arr = [10, 55, 40, 70, 80];

Use forEach to print numbers greater than 50.
*/


// let arr = [10, 55, 40, 70, 80];
// arr.forEach((value)=>{
//     if (value>50){
//         console.log(value)
//     }
// })


/* 13. Find largest number (for…of)

Given:

let scores = [12, 9, 45, 30];

Print the largest.
*/


// let scores = [12, 9, 45, 30];
// var largest = 0
// for(var c1 of scores){
//     if (c1>largest){
//         largest = c1
//     }
// }
// console.log(largest)


/* 14. Create a new array of squares

Given:

let arr = [2, 3, 4];

Using forEach → output: [4, 9, 16].
*/


// let arr = [2, 3, 4];
// let op = []
// arr.forEach((value)=>{
//     var res = value*value
//     op.push(res)
// })
// console.log(op)


/* 15. Count how many keys in an object
let emp = {id:1, name:"Rekha", salary:30000};

Use for…in to count keys.
*/


// let emp = {id:1, name:"Rekha", salary:30000};
// let total = 0
// for(var keys in emp){
//     total += 1
// }
// console.log(total)


/* 16. Join characters

Given:

let chars = ['J','S'];

Using forEach, join to form "JS".
*/


// let chars = ['J','S'];
// let word = ""
// chars.forEach((value)=>{
//     word += value
// })
// console.log(word)


/* 17. Print key → value format

Given:

let laptop = {brand:"HP", ram:"8GB", price:45000};

Output format:

brand -> HP
ram -> 8GB
price -> 45000
*/


// let laptop = {brand:"HP", ram:"8GB", price:45000};
// for(var key in laptop){
//     console.log(`${key} -> ${laptop[key]}`)
// }


/* 18. Count occurrences of a number

Given:

let nums = [1,2,3,1,1,4];

Count how many times 1 appears (forEach).
*/


// let nums = [1,2,3,1,1,4];
// let count = 0
// nums.forEach((value)=>{
//     if(value==1){
//         count++;
//     }
// })
// console.log(count)


/* 19. Convert object to array using loops

Given:

let user = {name:"Raj", age:25, city:"Chennai"};

Convert to:

["name:Raj", "age:25", "city:Chennai"]
*/

// let user = {name:"Raj", age:25, city:"Chennai"};
// let array = []
// for(var key in user){
//     array.push(`${key}:${user[key]}`)
// }
// console.log(array)

/* 20. Extract unique values

Given:

let arr = [1,2,2,3,3,4,4,5];

Use for…of to collect unique values.
*/

// let arr = [1,2,2,3,3,4,4,5];
// let arr2 = []
// for(var v of arr){
//     if (!arr2.includes(v)){
//         arr2.push(v)
//     }
// }
// console.log(arr2)


/* 21. Count frequency of every element

Given:

let letters = ["a","b","a","c","b"];

Output:

a: 2
b: 2
c: 1
*/


// let letters = ["a","b","a","c","b"];
// freq = {}
// for(let ch of letters){
//     if(freq[ch]){
//         freq[ch]++;
//     }
//     else{
//         freq[ch] = 1
//     }
// }
// for(let key in freq){
//     console.log(`${key}:${freq[key]}`)

// }


/*  22. Multiply all values inside nested arrays

Given:

let arr = [[1,2],[3,4]];

Using for…in, calculate total product.
*/


// let arr = [[1,2],[3,4]];
// let product = 1
// for(let inner of arr){
//     for(let value of inner){
//         product *= value
//     }
// }
// console.log(product)


/* 23. Convert string to object (frequency map)

Given:

let str = "banana";

Output:

b:1
a:3
n:2
*/



// let str = "banana";
// let freq = {};  

// for (let ch of str) {
//     if (freq[ch]) {
//         freq[ch]++;     // increase count
//     } else {
//         freq[ch] = 1;    // first time → set 1
//     }
// }

// for (let key in freq) {
//     console.log(`${key}:${freq[key]}`);
// }


/* 24. Merge two arrays using for…of

Given:

let a = [1,2];
let b = [3,4];

Output:

[1,2,3,4]
*/


// let a = [1,2];
// let b = [3,4];
// let c = []
// for(var val of a){
//     c.push(val)
// }
// for(var val of b){
//     c.push(val)
// }
// console.log(c)



/* 25. Extract only numeric keys from object
let obj = {1:"a", "b":2, 2:"c"};

Use for…in to print keys that are numbers only.
*/



// ==========method1==============//

// let obj = {1:"a", "b":2, 2:"c"};
// for(var keys in obj){
//     if (keys>0){
//         console.log(keys)
//     }
// }


// ============method2===============//

// let obj = {1:"a", "b":2, 2:"c"};
// for (let k in obj) {
//   if (!isNaN(Number(k))) {
//     console.log(k); // numeric-looking key
//   }
// }


/* 26. Remove duplicates using forEach

Given:

let arr = ["x","y","x","z"];
Remove duplicates.
*/


// let arr = ["x","y","x","z"];
// let arr2 = []
// for(var a1 of arr){
//     if(!arr2.includes(a1)){
//         arr2.push(a1)
//     }
// }
// console.log(arr2)


/* 27. Convert all strings to uppercase
let words = ["hello", "hi", "hey"];

Using forEach → output:

HELLO 
HI 
HEY
*/

// let words = ["hello", "hi", "hey"];
// words.forEach((value)=>{
//     console.log(value.toUpperCase())
// })


/* 28. Longest string in array

Given:

let arr = ["apple", "banana", "kiwi", "pineapple"];
Find longest string using for…of.
*/

// let arr = ["apple", "banana", "kiwi", "pineapple"];
// var long_len = 0
// var long_str = ""
// for(var a1 of arr){
//     if (a1.length > long_len){
//         long_len = a1.length
//         long_str = a1
//     }
// }
// console.log(long_len)
// console.log(long_str)