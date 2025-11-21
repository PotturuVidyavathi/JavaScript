/* Greeting Function
Define a named function called greetUser(name, times) that takes:
name (a string) → the person’s name
times (an integer) → how many times to greet
 The function should print (or return) the greeting "Hello, {name}!" exactly times times.
 Bonus: If times is less than 1, print a warning message instead.
*/


// function greetUser(name,times){
//     if (times<1){
//         console.log("Warning ")
//     }
//     else{
//         for(var i=0;i<times;i++){
//             console.log(`Hello ${name}`)
//         }
//     }
// }   
// greetUser("abcdef",5)


/*
Rectangle Area & Perimeter Function
Define a named function calcRectangle(width, height) that takes two numeric parameters: width and height. It should return an object or tuple containing:
area = width × height
perimeter = 2 × (width + height)
 Bonus: If either width or height is zero or negative, return an error value/message.
*/


// function calcRectangle(width,height){
//     if(width==0 || height == 0){
//         console.log("Error")
//     }
//     var area = width * height
//     var perimeter = 2 * (width+height)
//     console.log(area)
//     console.log(perimeter)
// }
// calcRectangle(2,3)

/*
Flexible String Repeater Function
Define a named function repeatString(str, count, separator) that takes:
str (a string) → the substring to repeat
count (integer) → how many times to repeat
separator (string) → what to place between the repeats
 The function should build and return a string that repeats str exactly count times separated by separator.
 Example: repeatString("ha", 3, "-") → "ha-ha-ha".
 Bonus: If separator is omitted (or null), use a default separator of "" (empty string).
*/

// function repeatString(str, count, separator){
//     new_str=""
//     for(var i=0;i<count;i++){
//         new_str += str
//         if (i!=count-1){ 
//             new_str += separator
//         } 
//     }
//     console.log(new_str)
// }
// repeatString("haa", 3, "-")

/*
Parameterized Filter Function
Define a named function filterByLength(wordList, minLen, maxLen) that takes:
    wordList (an array/list of strings)
    minLen (integer)
    maxLen (integer)
The function should return a new array/list containing only those strings from wordList whose length is ≥ minLen and ≤ maxLen.
 Bonus: If minLen > maxLen, swap them internally so the function still works.
*/

// function filterByLength(wordList, minLen, maxLen){
//     var new_words=[]
//     for(var word of wordList){
//         if (word.length>=minLen && word.length<=maxLen){
//             new_words.unshift(word)

//         }
//     }
//     console.log(new_words)
// }
// filterByLength(['apple','bat','camp'], 4, 5)

/*
Parameterized Calculator Function
 Define a named function calculate(a, b, operation) that takes:
    a (number)
    b (number)
    operation (string) → one of "add", "subtract", "multiply", "divide"
 The function should perform the requested operation on a and b and return the result.
 Bonus: Handle cases for dividing by zero (returning an error or special value) and invalid operation strings (returning an error message).
*/


// function calculate(a, b, operation){
//     if(operation=='add'){
//         console.log(a+b)
//     }
//     else if(operation=='sub'){
//         console.log(a-b)
//     }
//     else if(operation=='mul'){
//         console.log(a*b)
//     }
//     else if(operation=='div'){
//         if (b==0){
//             console.log("can't divide with 0")
//         }
//         else{
//             console.log(a/b)
//         }
//     }
// }
// calculate(5, 0, 'div')