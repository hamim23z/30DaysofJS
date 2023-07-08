//FUNCTIONS//
//Function Declaration//
/* function functionName() {
  // code goes here
}
functionName() */


//Function without a Parameter and Return//
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
} 
square() //in order for a function to work, you need to call the function at the end, like i did in this line//


function addtwonumbers() {
    let numone = 10
    let numtwo = 20
    let totalsum = numone + numtwo
    console.log(totalsum)
}
addtwonumbers() //same thing, remember to call the function//


function fullnameprint() {
    let first = 'Hamim'
    let last = 'Choudhury'
    let ag = 19
    let printfullname = first + ' ' + last + ', ' + ag
    console.log(printfullname)
}
fullnameprint() //call function//





//Function with Returning Values//
function fullnameagain() {
    let myfirst = 'Hamim'
    let mylast = 'Choudhury'
    let space = ' '
    let myfull = myfirst + space + mylast
    return myfull
}
console.log(fullnameagain()) //for this type, we dont call the function at the end. we simply use return and we console.log the name of the function at the end.//


function addthreenumbers() {
    let onenum = 10
    let twonum = 20
    let threenum = 30
    let total = onenum + twonum + threenum
    return total
}
console.log(addthreenumbers()) //same thing, return what the total value or what you want to solve and then console.log the name of the function at the end.//






//Function with a Parameter(One Parameter)// //A parameter can be a number, string, boolean, or object//
/* function functionName(parm1) {
  //code goes her
}
functionName(parm1) */


function areaofcircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaofcircle(10)) //so with this, when you call the function, you put something in the parenthesis and when you console.log it, you give that something a value and then it will print according to your function//

function squaringnumbers(s) {
    let exponents = s * s
    return exponents
}
console.log(squaringnumbers(20)) //the same process as above, we put something in the function and we return it (return what we want to solve) and finally we console.log it with an official value//






//Function with Parameters(Two Parameters)
/* function functionName(parm1, parm2) {
  //code goes here
}
functionName(parm1, parm2) */


function sumoftwonumbers(numuno, numdos) {
    let totalsumagain = numuno + numdos
    console.log(totalsumagain)
}
sumoftwonumbers(40, 40) //so the overall process is the same as a function with one parameter. but in this case, we put two values in the function and then we return or console.log it. however we have to call the function at the end with values//


function sumtwonumbers(numberone, numbertwo) {
    let sum = numberone + numbertwo
    return sum
}
console.log(sumtwonumbers(40, 50)) //this is another way to do it with return//






//Funtion with Many Parameters(Multiple)//
/*function functionName(parm1, parm2, parm3,...){
    //code goes here
  }
  functionName(parm1,parm2,parm3,...) */


let morenumbers = [1, 2, 3, 4, 5]
function sumarrayvalues(arr) {
    let summ1 = 0
    for (let i=0; i<arr.length; i++) {
        summ1 = summ1 + arr[i]
    }
    return summ1
}
console.log(sumarrayvalues(morenumbers))






//Funtion with Unlimited Parameters (With Regular Function)//
function sumallnums() {
    console.log(arguments)
}
sumallnums(1, 2, 3, 4)


function sumallnumsagain() {
    let sumagain = 0
    for (let i=0; i<arguments.length; i++) {
        sumagain = sumagain + arguments[i]
    }
    return sumagain
}
console.log(sumallnumsagain(1, 2, 3, 4))
console.log(sumallnumsagain(1, 1, 1, 1, 1))






//Function with Unlimited Parameters (With Arrow Function)//
/* const sumAllNums = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4] */


let sumallnumsyetagain = (...args) => {
    let sum = 0
    for (let element of args) {
        sum = sum + element
    }
    return sum
}
console.log(sumallnumsyetagain(10, 20, 10))






//Anonymous Function. No name Function//
let anonymousfunc = function() {
    console.log('I am an anon function and my value is stored in anonymousfunc'
    )
}
console.log(anonymousfunc)






//Expression Funtions. Anon functions that are assigned to a variable//
let squareagain = function(n) {
    return n*n
}
console.log(squareagain(4))






//Self Invoking Functions//
let squarednum = (function(n) {
    return n*n
})(10)
console.log(squarednum)






//Arrow Functions: Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences. Arrow function uses arrow instead of the keyword function to declare a function.*/

//Normal Function//
function squared(d) {
    return d * d
}
console.log(squared(7))

//Arrow Function//
let squared2 = d => {
    return d * d
}
console.log(squared2(9))






//Funtion with Default Parameters//
/* // syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg) */


function greetings(name = 'Hamim') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}
console.log(greetings())
console.log(greetings('Jeffery'))


function calculateAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
}
console.log('Age: ', calculateAge(2004))






//Arrow Functions//
/* // syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg) */

let greetings2 = (name2 = 'Peter') => {
    let message2 = name2 + ', welcome to 30 Days Of JavaScript!'
    return message2
}
console.log(greetings2())
console.log(greetings2('Asabeneh'))


let calculateAge2 = (birthYear2, currentYear2 = 2030) => currentYear2 - birthYear2
console.log('Age: ', calculateAge2(2000))












//LEVEL ONE EXERCISE PROBLEMS//
//Number One//
function myfullname() {
    let myfirstname = 'Hamim'
    let mylastname = 'Choudhury'
    let space =' '
    let combinednames = myfirstname + space + mylastname
    return combinednames
}
console.log(myfullname())

//Number Two//
function myfullnameagain (myfirstname2, mylastname2) {
    let totalname = myfirstname2 + mylastname2
    return totalname
}
console.log(myfullnameagain('Hamim', ' Choudhury'))

//Number Three//
function addnumbers(addone, addtwo) {
    let totaladd = addone + addtwo
    return totaladd
}
console.log(addnumbers(6, 6))

//Number Four//
function areaofrectangle() {
    let length = 7
    let width = 8
    let totalarea = length * width
    return totalarea
}
console.log(areaofrectangle())

//Number Five//
function perimeterofrectangle() {
    let length2 = 9
    let width2 = 2
    let totalperim = 2 * (length2 + width2)
    return totalperim
}
console.log(perimeterofrectangle())

//Number Six//
function volumeofrectprism(length3, width3, height3) {
    let totalvolume = length3 * width3 * height3
    return totalvolume
}
console.log(volumeofrectprism(2, 3, 4))

//Number Six//
function volumeofrectprism(length3, width3, height3) {
    let totalvolume = length3 * width3 * height3
    return totalvolume
}
console.log(volumeofrectprism(2, 3, 4))

//Number Seven//
function areaofcirc(r) {
    let totalarea = Math.PI * r * r
    return totalarea
}
console.log(areaofcirc(10))

//Number Eight//
function circumofcircle(z) {
    let circumference = Math.PI * z * 2 
    return circumference
}
console.log(circumofcircle(2))

//Number Nine//
function densitycalc(mass, volume) {
    let totaldensity = mass/volume
    return totaldensity
}
console.log(densitycalc(100, 25))

//Number Ten//
function totalspeed() {
    let distance = 350
    let timetaken = 35
    let speedcalc = distance/timetaken
    return speedcalc
}
console.log(totalspeed())

//Number Eleven//
function substanceweight() {
    let mass = 40
    let gravity = 7.981
    let totalsubweight = mass * gravity
    return totalsubweight
}
console.log(substanceweight())

//Number Twelve//
function convertcelsiustofarenheit() {
    let celsius = 300
    let finalcelstofaren = (celsius * 9/5) + 32
    return finalcelstofaren
}
console.log(convertcelsiustofarenheit())

//Number Thirteen skipped because it's practically the same as Number Fourteen//

//Number Fourteen//
function checkSeason(month) {
month = month.toLowerCase();
  
if (month === 'december' || month === 'january' || month === 'february') {
    return 'Winter';
} else if (month === 'march' || month === 'april' || month === 'may') {
    return 'Spring';
} else if (month === 'june' || month === 'july' || month === 'august') {
    return 'Summer';
} else if (month === 'september' || month === 'october' || month === 'november') {
    return 'Autumn';
} else {
    return 'Invalid month';
}
}
console.log(checkSeason('january'))
console.log(checkSeason('august'))
console.log(checkSeason('march'))

//Number Fifteen//
function findMax(a, b, c) {
if (a >= b && a >= c) {
    return a;
} else if (b >= a && b >= c) {
    return b;
} else {
    return c;
}
}
console.log(findMax(1, 2, 3))
