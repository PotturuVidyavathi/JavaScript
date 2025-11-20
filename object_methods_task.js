
/*
Create an object named student with properties:
name, age, course, and marks.
*/

// method-1
// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:85}
// console.log(student)

//method2
// var std = {}
// std['name'] = 'kavya'
// std['age'] = 21
// std['scourse'] = 'B.Tech'
// std['marks'] = 90
// console.log(std)

//method3
// var std1 = {}
// std1.name = 'laxmi'
// std1.age = 20
// std1.scourse = 'B.Tech'
// std1.marks = 92
// console.log(std1)

/*
Add a new property grade and modify the marks value.
*/

// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// console.log(student)
// student.marks = 85
// student.grade = 'B'
// console.log(student)

/*
Use Object.keys() and Object.values() to display all property names and their values separately.
*/
// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// console.log(student)
// console.log(Object.keys(student))
// console.log(Object.values(student))


/*
Use Object.entries() to print key–value pairs together in array format.
*/

// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// console.log(student)
// console.log(Object.entries(student))

/*
Create another object extraDetails with properties like city and rollNo,
and merge it into the student object using Object.assign().
*/

// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// var std_details = {rollno: 51, city:"hyd"}
// console.log(student)
// console.log(std_details)
// console.log(Object.assign(student,std_details))

/*
Use Object.hasOwnProperty() to check if the student object has the property course and address.
*/

// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// console.log(student)
// console.log(student.hasOwnProperty('scourse'))
// console.log(student.hasOwnProperty('address'))


/*
Make a copy of the student object and apply Object.freeze() on it.
Try adding or modifying properties and observe that no changes happen.
*/

// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// console.log(student)
// Object.freeze(student)
// student.address = 'hyd'
// student.smarks = 65
// console.log(student)


/* Apply Object.seal() on another copy of the object and verify that: */

// var student = {sname:"vidya",sage:22,scourse:"Python full stack",smarks:55}
// console.log(student)
// Object.seal(student)
// student.address = 'hyd'
// student.smarks = 65
// console.log(student)
