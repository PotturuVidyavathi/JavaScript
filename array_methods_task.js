/*1. Array Methods */

/*1. Create an array of 5 colors and print the second and last color.*/

// colors = ["Red", "Green","Blue","Pink","Purple"]
// console.log(colors[1])
// console.log(colors[4])

/*2. Create an array of numbers and replace the first element with 100.*/

// num = [10,20,30,40,50]
// num[0]=100
// console.log(num)

/*3. Create an array with mixed data types (string, number, boolean). Print the type of each element using a loop.*/

// array = [1,"number",false]
// array.forEach(val => {
//     console.log(typeof(val))    
// });

// for (var num of array){
//     console.log(typeof(num))   
// }

/*4. Create a nested array and print the inner array’s second element.*/

// num1 = [2,4,6,8,[10,20,30,40,50]]
// console.log(num1[4][2])

/*5. Create an array using the Array constructor and display its length.*/

// var array1 = new Array(1,2,3)
// console.log(array1.length)


/* 2. push(), pop(), shift(), unshift() */

/* 6.  Create an array of fruits and add one fruit at the end using push().*/

// fruits = ["Apple","Banana","cherry"]
// fruits.push("Dragon fruit","grapes")
// console.log(fruits)

/* 7.  Remove the last element from the array using pop() and display the updated array.*/

// fruits = ["Apple","Banana","Cherry"]
// fruits.pop()
// console.log(fruits)

/* 8.  Add two new fruits at the beginning using unshift().*/

// fruits = ["Apple","Banana","Cherry"]
// fruits.unshift("Dragon fruit","grapes")
// console.log(fruits)

/* 9.  Remove the first element using shift() and print the new array.*/

// colors = ["red","blue","pink"]
// colors.shift()
// console.log(colors)

/* 10. Use a combination of push() and pop() to  keep only 3 elements in your array.*/

// fruits = ["apple","banana","cherry"]
// fruits.push("mango")
// fruits.pop()
// console.log(fruits)

/* 3. slice() and splice()*/

/* 11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].*/

// num1 = [10, 20, 30, 40, 50]
// console.log(num1.slice(1,3))

/* 12. Using the same array, use splice() to replace 30 with 35.*/

// num1 = [10, 20, 30, 40, 50]
// num1.splice(2,1,35)
// console.log(num1)

/* 13. Insert 25 before 30 using splice().*/

// num1 = [10, 20, 30, 40, 50]
// num1.splice(2,0,25)
// console.log(num1)

/* 14. Remove the last two elements using splice().*/

// num1 = [10, 20, 30, 40, 50]
// num1.splice(3,2)
// console.log(num1)

/* 15. Use slice() to copy the first three elements into a new array.*/

// num1 = [10, 20, 30, 40, 50]
// num2 = num1.slice(0,3)
// console.log(num2)
// console.log(typeof(num2))
// console.log(Array.isArray(num2))

/* 4. concat(), join(), toString()*/

/* 16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat().*/

// num1 = [1,2,3]
// num2 = [4,5,6]
// console.log(num1.concat(num2))

/* 17. Convert an array of names into a string separated by commas using join().*/

// names= ["a","b","c","d","e"]
// console.log(names.join(','))

/* 18. Use toString() on an array and display the output.*/

// alpha = ["a","b","c"]
// console.log(alpha.toString())

/* 19. Merge three arrays using concat() and find the length of the new array.*/

// n1 = [1,2,3]
// n2 = [4,5,6]
// n3 = [7,8,9]
// n4 = n1.concat(n2,n3)
// console.log(n4)
// console.log(n4.length)


/* 20. Create an array of city names and join them using ' - ' as a separator.*/

// cities = ['hyd','bag','chennai']
// console.log(cities.join('-'))

/* 5. Search Methods (indexOf, lastIndexOf, includes) */

/* 21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'.*/

// fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
// console.log(fruits.indexOf('banana'))


/* 22. Find the last index of 'banana' using lastIndexOf().*/

// fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
// console.log(fruits.lastIndexOf('banana'))

/* 23. Check if 'mango' exists in the array using includes().*/

// fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
// console.log(fruits.includes("mango"))
// console.log(fruits.includes("orange"))

/* 24. Write code to check if a specific number exists in an array, if not, push it.*/

// arr = [1,2,3,4,5]
// num = 6
// if(!arr.includes(num)){
//     arr.push(num)
// }
// console.log(arr)

/* 25. Use includes() to verify if 'kiwi' is present in your fruit array and print a message accordingly.*/

// fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
// console.log(fruits.includes('kiwi'))
// if (fruits.includes('kiwi')){
//     console.log(`kiwi is present in the fruits`)
// }
// else{
//     console.log('kiwi is not present in the groups')
// }



/* 6. find() and findIndex() */

/* 26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.*/

// var nums = [5, 12, 8, 130, 44]
// for(var n1 of nums){
//     if (n1 >10){
//         console.log(`${n1}`)
//         break;
//     }
// }

/* 27. Use findIndex() to locate the position of the first element greater than 50.*/

// var nums = [5, 12, 8, 130, 44]
// for(var num of nums){
//     if (num>10){
//         console.log(nums.indexOf(num))
//         break;
//     }
// }

/* 28. Find the first even number in an array using find().*/

// var nums = [5, 12, 8, 130, 44]
// for(var num of nums){
//     if(num%2==0){
//         console.log(`${num} is even`)
//         break
//     }
   
// }
/* 29. Find the index of the first odd number in an array using findIndex().*/

// var nums = [5, 12, 8, 130, 44]
// for(var num of nums){
//     if(num%2 != 0){
//         console.log(`${num} is odd`)
//         console.log(nums.indexOf(num))
//         break;
//     }
// }

/* 30. Use find() to search for a string longer than 5 characters in an array of words.*/

// fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
// for(var word of words){
//     if(word.length>5){
//         console.log(word)
//     }
// }


/*7. sort(), reverse(), copyWithin(), flat()*/

/*31. Sort an array [5,3,8,1,2] in ascending order.*/

// arr = [5,3,8,1,2]
// console.log(arr.sort())

/*32. Reverse the sorted array and print it.*/

// arr = [1,2,3,5,8]
// console.log(arr.reverse())

/*33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].*/



/*34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().*/

// alpha = ['a','b',['c','d'],['e',['f']]]
// console.log(alpha.flat())

/*35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]].*/

// alpha = ['x',['y',['z',['w']]]]
// console.log(alpha.flat(2))

/*8. length, Destructuring & Misc*/

/* 36. Create an array of 10 numbers and print its length.*/

// var array = [1,2,3,4,5,6,7,8,9.10]
// console.log(array.length)

/* 37. Remove the last element using pop() and print the new length.*/

// var array = [0,1,2,3,4,5,6,7,8,9,10]
// console.log("Before removing an element ",array.length)
// array.pop()
// console.log("Before removing an element",array.length)
// console.log(array)

/* 38. Use array destructuring to extract first three elements into variables.*/

// var array = [12,'mango','hyd']
// console.log(array)
// console.log(...array)    //constructing

// var [number,fruits,place] = array;  //destructing
// console.log(number)
// console.log(fruits)
// console.log(place)

/* 39. Create a constant array and modify one element (to show arrays are mutable).*/

// array = [30,'apple','banglore']
// array[1] = 'Banana'
// console.log(array)

/* 40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.*/

// array = [30,'apple','banglore']
// array.push(100)
// console.log(array)
// console.log(array.splice(1,2))