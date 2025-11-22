/* Print numbers from 1 to 5
Question:
Write a program using a for loop to print numbers from 1 to 5.

Output:
1
2
3
4
5
*/

// for(var i=1;i<=5;i++){
//     console.log(i)
// }



/* Print even numbers from 2 to 10
Question:
Use a for loop to print only even numbers between 2 and 10.

Output:

2
4
6
8
10
*/


// for(var i=1;i<=10;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }


/* Sum of first 5 numbers
Question:
Write a program to calculate the sum of numbers 1 to 5 using a loop.

Output:

Sum = 15
*/


// var sum = 0
// for(var i=0;i<=5;i++){
//     sum += i
// }
// console.log(sum)

/* Print numbers from 10 to 1 (reverse order)

Output:

10
9
8
7
6
5
4
3
2
1
*/ 

// for(var i=10;i>=1;i--){
//     console.log(i)
// }

/* Print the first 5 odd numbers

Output:

1
3
5
7
9*/


// for(var i=1;i<=10;i++){
//     if (i%2!=0){
//         console.log(i)
//     }
// }


/*==============================*/
/*  Intermediate Level

/* Count digits in a number
Question:
Given let num = 98765, count how many digits it has using a while loop.

Output:

Digits = 5
*/

// var num = "98765"
// var digits = 0
// for(var n1 in num){
//     digits += 1
// }
// console.log(digits)

// var num = 98765
// var digit = 0
// var num1 = 0
// while (num>0){
//     digit++;
//     num = Math.floor(num/10)
//     console.log(num)
// }
// console.log(digit)

/* Reverse a string

Question:
Reverse "hello" using a loop.

Output:

olleh
*/


// var str = "hello"
// var rev = ""
// for(var i=str.length-1;i>=0;i--){
//     rev+=str[i]
// }
// console.log(rev)

/* Multiplication table of 7

Question:
Use a loop to print table of 7 up to 10.

Output:

7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
*/


// var num = 7
// for(var i=0;i<=10;i++){
//     console.log(`${num} * ${i} = ${num * i}`)
// }


/* Find the largest number in an array

Question:
Given: let arr = [10, 45, 2, 99, 34]
Use a loop to find the largest value.

Output:

Largest = 99
*/

// let arr = [10, 45, 2, 99, 34]
// var largest = 0
// for(var i=0;i<=arr.length;i++){
//     if (arr[i]>largest){
//         largest = arr[i]
//     }
// }
// console.log(largest)

/*
Print all multiples of 3 between 1 and 30

Output:

3
6
9
12
15
18
21
24
27
30
*/

// var num = 3
// for(var i=1;i<=30;i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

/* Reverse the number 24680

Output:

08642*/

// var number =  24680
// var new_num = " "
// while (number>0){
//     var digit = number % 10
//     new_num += digit
//     number = Math.floor(number / 10)
    
// }
// console.log(new_num)


/* Count how many even digits are in 975468

Output:

Even digits = 3
*/

// var num = 975468
// var even_digits = 0
// while (num>0){
//     var  digit = num%10
//     // console.log(digit)
//     if (digit%2==0){
//         even_digits += 1
//     }
//     num = Math.floor(num/10)
// }
// console.log(even_digits)


/* Print each element from array [2, 4, 6, 8, 10] using while loop

Output:

2
4
6
8
10 */


// var array = [2, 4, 6, 8, 10]
// for(var i=0;i<array.length-1;i++){
//     console.log(array[i])
// }


/* Print characters of “javascript” but only vowels

Output:

a
a
i
*/

// var word = "javascript"
// for(var i=0;i<word.length-1;i++){
//     if("aeiouAEIOU".includes(word[i])){
//         console.log(word[i])
//     }
// }


/*
Find the smallest number in [55, 12, 89, 4, 23]

Output:

Smallest = 4
*/

// var arr = [55, 12, 89, 4, 23]
// // var smallest = 1
// for(var i=0;i<=arr.length-1;i++){
//     if (arr[i]<arr[i+1]){
//         var smallest = arr[i]
//     }
// }
// console.log(smallest)


/*==========================*/
/* Advanced Level */

/* Check if a number is prime

Question:
Check if 17 is a prime number using a loop.

Output:

17 is Prime
*/

// var num = 17
// var is_prime = true
// for(var i=2;i<num;i++){
//     if(num%i===0){
//         is_prime = false
//         break;
//     }
// }
// if(is_prime){
//     console.log(`${num} is Prime`)
// }
// else{
//     console.log(`${num} is Not Prime`)

// }

/* Pattern printing – Right triangle

Question:
Print this pattern using loops:

*
**
***
****
*****


Output:

*
**
***
****
*****
*/ 

// method--1

// var star = "*"
// for(var i=1;i<=5;i++){
//     // star += i
//     console.log(star.repeat(i))
// }


// method--2

// for(var i=1;i<=5;i++){
//     var line =''
//     for(var j=1;j<=i;j++){
//         line+='*'
//     }
//     console.log(line)
// }



/* Count occurrences of a character

Question:
Count how many times 'a' appears in "javascript language" using a loop.

Output:

a appears 4 times
*/

// var word = "javascript language"
// var count = 0
// for(var char of word){
//     if (char === 'a'){
//         count++;
//     }
// }
// console.log(`a appears ${count} times`)

/*  Print array elements without using for-loop (use while)

Question:
Given: let arr = ["apple", "banana", "kiwi"];
Print all elements using a while loop.

Output:

apple
banana
kiwi
*/ 


// let arr = ["apple", "banana", "kiwi"];
// var i=0
// while (i<arr.length){
//     console.log(arr[i])
//     i++;
// }


/*  Factorial of a number

Question:
Find factorial of 6 using a loop.

Output:

720
*/


// var num = 6
// var sum = 1
// for(var i=1;i<=num;i++){
//     sum *= i;
// }
// console.log(sum)

/* Print this pattern (numbers)
1
12
123
1234
12345


Output:

1
12
123
1234
12345
*/

// for(var i=1;i<=5;i++){
//     var line=""
//     for(var j=1;j<=i;j++){
//         line += j
//     }
//     console.log(line)
// }


/* Check if the number 121 is a palindrome

Output:

121 is Palindrome
*/


// var num = 121
// var num1 = num.toString()
// var rev = ""
// while (num>0){
//     var digit = num%10
//     rev += digit
//     num = Math.floor(num/10)
// }
// if(num1 === rev){
//     console.log(`${num1} is Palindrome`)
// }
// else{
//     console.log(`${num1} is not a Palindrome`)
// }


/* Generate Fibonacci series of first 8 terms

Output:

0
1
1
2
3
5
8
13
*/

// var a = 0
// var b = 1
// for(var i=1;i<=8;i++){
    
//     console.log(a)
//     var c = a+b 
//     a = b
//     b = c
// }