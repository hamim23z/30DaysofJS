//Boolean Data Types//
let israining = true
let iscloudy = true
let sunny = false
console.log(israining)
console.log(iscloudy)
console.log(sunny)

/*Truthy Values
- All numbers(positive and negative)
- All strings 
- The boolean true*/

/*Falsy Values
- 0 
- 0n
- Null
- Undefined
- NaN
- The boolean false
- Empty strings*/

//Undefined Values//
let undefined2
console.log(undefined2) //prints out undefined because no value is assigned//

//Null Values//
let empty1 = null
console.log(empty1) //prints out null, there is no value//





//OPERATORS//
//Assignment Operators//

/*
x = y (operator is =) (x = y)
x +=y (operator is +=) (x = x + y)
x-=y  (operator is -=) (x = x - y)
*= (operator is *=) (x = x * y)
/= (operator is /=) (x = x / y)*/


//Arithmetic Operators//
let numOne = 6
let numTwo = 4
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo 
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf)

let pivalue = 3.14
let radius = 100
let areaofcircle = pivalue * radius * radius
console.log(areaofcircle)


//Comparison Operators//
/* 
== (equal in value only)
=== (equal in value and data type, exactly equal)
!= (not equal)
> (greater than)
< (less than)
>= (greater than or equal to)
<= (less than or equal to)*/

console.log(6 == 6) //true//
console.log(6 === 6) //true//
console.log(6 === '6') //false//
console.log(6 != 6) //false, because 6 is equal to 6//
console.log(6 != 9) //true because 6 is not equal to 9//


//Logical Operators//
//Type One: The && operator gets true only if the two operands are true.//
let checking =  4 > 3 && 10 > 5 //true//
console.log(checking)

let checking2 = 4 > 2 && 7 < 1 //false//
console.log(checking2)


//Type Two: The || operator gets true if any of the operand is true.//
let checking3 = 5 > 2 || 11 > 7
console.log(checking3) //true//

let checking4 = 8 < 2 || 3 > 1
console.log(checking4) //true//


//Type Three: The ! operator negates true to false and false to true.//
let checking5 = 4 > 3 //true//
let checking6 = !4 > 3 //false
console.log(checking5)
console.log(checking6)



//INCREMENT OPERATOR//
//Pre Increment//
let count = 0
console.log(++count) //1//
console.log(count) //1//

//Post Increment//
let count1 = 0 
console.log(count1++) //0//
console.log(count1) //1//

//Pre Decrement//
let count2 = 0
console.log(--count2) //-1//
console.log(count2)  //-1//

//Post Decrement//
let count3 = 0
console.log(count3--) //0//
console.log(count3)   //-1//





//Ternary Operators//
let number1 = 5
number1 > 0
  ? console.log(`${number1} is a positive number`)
  : console.log(`${number1} is a negative number`)

let number2 = -5
number2 > 0
  ? console.log(`${number2} is a positive number`)
  : console.log(`${number2} is a negative number`)





//WINDOWS METHODS//
alert('Welcome to Day 4 of JavaScript!')

//Prompt Method//
let randomnumber = prompt('Enter a number from 1-100', 'Number goes here')
console.log()

//Confirm Method//
let confirmation = confirm('Are you done looking at the website?')
console.log()





//DATE AND TIME OBJECTS//
//Time Object//
let now = new Date()
console.log(now)

//Full Year//
let now1 = new Date()
console.log(now1.getFullYear())

//Month//
let now2 = new Date()
console.log(now2.getMonth())
