/* Task 1: Character Finder
Concepts: charAt(), charCodeAt(), at()
Write a program that:
·     - Takes a string 'JavaScript'
 - Prints:
   • The character at index 4
   • The ASCII value of the character at index 2
   • The last character using a negative index with .at()
Expected Output Example:
 Character at 4: S
 ASCII at 2: 118
 Last character using at(): t */

// const prompt = require("prompt-sync")();
// var name = prompt("Take a String: ")  
// console.log(name.at(4))
// console.log(name.charAt(4))

// var prompt = require("prompt-sync")();  // make sure installed  npm install prompt-sync
// var name = prompt("Take a String: ");
// console.log(name.at(4));
// console.log(name.charAt(4));
// console.log(name.charCodeAt(2))
// console.log(name.at(-1))


//==================================
/* Task 2: Combine & Search
Concepts: concat(), includes(), indexOf(), lastIndexOf()
Write a program that:
·     - Combines 'Hello' and 'World' using concat()
 - Checks if the final string includes 'lo'
 - Finds the first and last index of 'l'
Expected Output:
Combined String: HelloWorld
Includes 'lo': true
First index of 'l': 2
Last index of 'l': 3 */ 

// s1 = "Hello"
// s2 = "World"
// console.log(`Combined String : ${s1.concat(" ",s2)}`)
// console.log(`Includes 'lo' : ${s1.includes("lo")}`)
// console.log(`First index of 'l': ${s1.indexOf('l')}`)
// console.log(`Last index of 'l': ${s1.lastIndexOf('l')}`)


// ========================================
/* Task 3: Text Formatting
Concepts: toUpperCase(), toLowerCase(), trim(), trimStart(), trimEnd()
Write a program that:
·     - Takes a string '   JavaScript Methods   '
 - Removes leading and trailing spaces
 - Converts the result into uppercase, then lowercase
 - Also print separately trimmed-start and trimmed-end results
Expected Output:
 Original: "   JavaScript Methods   "
 Trimmed: "JavaScript Methods"
 Uppercase: JAVASCRIPT METHODS
 Lowercase: javascript methods
 TrimStart: "JavaScript Methods   "
 TrimEnd: "   JavaScript Methods" */

// var str =  "  JavaScript Methods        "

// console.log(`Original: ${str}`)
// console.log(`Trimmed:${str.trim()}`)
// console.log(`Uppercase:${str.toUpperCase()}`)
// console.log(`Lowercase:${str.toLowerCase()}`)
// console.log(`TrimStart:${str.trimStart()}`)
// console.log(`TrimEnd:${str.trimEnd()}`)


//============================================
/* Task 4: Extract Substrings
Concepts: slice(), substring()
Write a program that:
·     - Takes 'Learning JavaScript is fun!'
 - Extracts:
   • 'JavaScript' using slice(9, 19)
   • 'Learning' using substring(0, 8)
Expected Output:
 Using slice(): JavaScript
 Using substring(): Learning */ 

// str = "Learning JavaScript is fun!"
// console.log(`Using Slice() : ${str.slice(9,19)}`)
// console.log(`Using substring(): ${str.substring(0,8)}`)


//======================================================
/* Task 5: Padding Magic
Concepts: padStart(), padEnd()
Write a program that:
·     - Takes a string '50'
 - Pads it:
   • With '0' at start until length 5
   • With '*' at end until length 10
Expected Output:
 padStart(5, '0'): 00050
 padEnd(10, '*'): 50******** */

// str = '50'
// console.log(`padStart(5,'0) : ${str.padStart(5,'0')}`)
// console.log(`padEnd(10,'*) : ${str.padEnd(10,'*')}`)


//================================================
/* Task 6: Replace & Compare
Concepts: replace(), replaceAll(), localeCompare()
Write a program that:
·     - Takes the string 'I love JavaScript, JavaScript is powerful!'
 - Replaces the first 'JavaScript' with 'JS'
 - Then replaces all 'JavaScript' occurrences with 'JS'
 - Compare 'apple' and 'banana' using localeCompare()
Expected Output:
 After replace(): I love JS, JavaScript is powerful!
 After replaceAll(): I love JS, JS is powerful!
 Compare 'apple' vs 'banana': -1 */

// str = "I love JavaScript, JavaScript is powerful!"
// console.log(str.replace("JavaScript","JS"))
// console.log(str.replaceAll("JavaScript","JS"))

// s1="apple"
// s2="banana"
// console.log(s1.localeCompare(s2))

// s3="apple"
// s4="elppa"
// console.log(s1.localeCompare(s3))
// console.log(s1.localeCompare(s4))


//===============================================
/* Task 7: Mixed Operations (Mini Project)
Concepts Covered: Almost All Above
Write a function analyzeString(str) that:
·     - Returns an object with the following info:
   • Length of string
   • First and last character
   • Uppercase & lowercase versions
   • Whether it includes the word 'JS'
   • A sliced portion (first 5 chars)
   • Trimmed string
Example Input:
 analyzeString("   JS is awesome!   ");

 Expected Output:
 {
   length: 20,
   firstChar: ' ',
   lastChar: ' ',
   upperCase: '   JS IS AWESOME!   ',
   lowerCase: '   js is awesome!   ',
   includesJS: true,
   sliced: '   JS',
   trimmed: 'JS is awesome!'
 }
*/

// function string_Methods(){
//   str = " JS is awesome!  "
//   console.log(`Lenght: ${str.length}`)
//   console.log(`firstChar: ${str[0]}`)  
//   console.log(`firstChar: ${str.charAt(0)}`)
//   console.log(`lastChar: ${str.at(-1)}`)
//   console.log(`lastChar: ${str[-1]}`)     // can't get the output
//   console.log(`UPPER CASE : ${str.toUpperCase()}`)
//   console.log(`lower case : ${str.toLowerCase()}`)
//   console.log(`includes JS: ${str.includes("JS")}`)
//   console.log(`Sliced: ${str.slice(0,2)}`)
//   console.log(`Trimmed:${str.trim()}`)

// }
// string_Methods()