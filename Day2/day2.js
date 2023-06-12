//Primitive Data Types Cannot Be Modified//
let js = 'Javascript'
let py = 'Python'
console.log(js==py)

//Non Primitive Data Types Can Be Modified//
let digits = [0, 1, 2]
digits[1] = 10
console.log(digits) //index starts at 0. then 1, then 2, etc//
//Non Primitive Data Types cannot be compared by value, even if everything is the same value(s)

let nums = [1, 2, 3]
let numbers = nums
console.log(nums==numbers) //this is true, because they refer to the same object//




//NUMBERS//
let PI = Math.PI
console.log(PI)

console.log(Math.round(PI)) //3, regular rounding//
console.log(Math.round(9.81)) //10, regular rounding//
console.log(Math.floor(PI)) //3 bc its rounding down//
console.log(Math.ceil(PI)) //4 bc its rounding up//

console.log(Math.min(1, 2, 3, 4, -100)) //minimum value//
console.log(Math.max(100, 200, 4, 700)) //maximum value//

let randomNumber = Math.random()
console.log(randomNumber) //gives a random number between 0 and 1, not including 1//

let random = Math.random()
let randomzerototen = random*11
console.log(randomzerototen) //gives a random number between 0 and 11, not including 11//

let finalrand = Math.floor(randomzerototen)
console.log(finalrand) //gives a random number between 0 and 10, including 10//




//STRINGS//
//Concetenation//
let space = ' '
let first = 'Hamim'
let last = 'Choudhury'
console.log(first + space + last)

//Can also do it like this//
let fullname = first + space + last
let fullinfo = fullname + ' lives in ' + 'New York City.'
console.log(fullinfo)

//Can also do it like this//
console.log(fullname + ' lives in' + ' New York City, Queens.')

//Paragraphs//
let paragraph = 'My name is Hamim Choudhury. \
I go to college. \
I play basketball. '
console.log(paragraph)


//Template Strings//
console.log(`The sum of 3 and 4 is 7.`)
let a = 3
let b = 4
console.log(`The sum of ${a} and ${b} is ${a+b}.`)




//String Methods//
//Length//
let computer ='MacBook'
console.log(computer.length) //the length is used to count all the characters in the string. Returns 7.//


//Accessing Characters//
let language ='Javascript'
let firstLetter = language[0]
console.log(firstLetter) //returns J//

let lastLetter = language[9]
console.log(lastLetter) //returns t//


//UpperCase//
let change = 'Python'
console.log(change.toUpperCase()) //PYTHON//


//LowerCase//
let change2 = 'Weather'
console.log(change2.toLowerCase()) //weather//


//Substr//
let word = 'Everything'
console.log(word.substr(4,6)) //the first number is the starting index, and then its how many characters to slice, returns ything//


//Substring//
let anotherword = 'Everywhere'
console.log(anotherword.substring(0,4)) //the first number is the starting index, and the next is the stopping index but it doesnt include. Returns ever//
console.log(anotherword.substring(4,10)) //Returns ywhere//


//Split//
let sentence = '30 Days of JavaScript'
console.log(sentence.split()) //it becomes an array//
console.log(sentence.split(' ')) //it breaks every word into one word. Returns '30', 'Days', 'Of', 'Javascript'. It's still an array//


//Trim//
let extra = '                   Hello there.                  '
console.log(extra.trim()) //removes any excess white space//


//Includes//
let outline = 'My name is Ronald'
console.log(outline.includes('is')) //returns true//
console.log(outline.includes('Is')) //returns false, because its case sensitive//


//Replace//
let country = 'Greenland'
console.log(country.replace('Green', 'Ice')) //green becomes ice. Return is Iceland.//


//Index Of//
let thesentence = 'Running out of ideas what to write'
console.log(thesentence.indexOf('o')) //returns 8. If there's multiple of the same character, it'll return the first one//


//Concat//
let things = '30'
console.log(things.concat(' Days ', 'Of ', 'JavaScript')) //joins substrings, the result is 30 Days of Javascript//


//StartsWith and EndsWith//
let timeline = 'The 20th Century is long'
console.log(timeline.startsWith('The')) //returns True//
console.log(timeline.endsWith('long')) //returns True//




//Changing Data Types//
let type1 = '10'
let type1int = parseInt(type1)
console.log(type1int) //parseInt is one way to change a string number to an integer//

let type2 = '11'
let type2int = Number(type2)
console.log(type2int) //Number is the second way to change a string number to an integer//

let type3 = '12'
let type3int = +type3
console.log(type3int) //+ is the third way to change a string number to an integer//


//String to Float//
let num4 = '9.81'
let numFloat4 = parseFloat(num4)
console.log(numFloat4) //the process is the same as the changing data types section//

let num5 = '9.82'
let numFloat5 = Number(num5)
console.log(numFloat5) //the process is the same as the changing data types section//

let num6 = '9.83'
let numFloat6 = +num6
console.log(numFloat6) //the process is the same as the changing data types section//


//Float to Integer//
let num7 = 9.81
let numInt7 = parseInt(num7)
console.log(numInt7) //the process is the same as the changing data types section//







//LEVEL ONE EXERCISES//
//Number One//
let challenge = '30 Days Of JavaScript'

//Number Two//
console.log(challenge)

//Number Three//
console.log(challenge.length)

//Number Four//
console.log(challenge.toUpperCase())

//Number Five//
console.log(challenge.toLowerCase())

//Number Six//
console.log(challenge.substring(0,2))

//Number Seven//
console.log(challenge.slice(3,22))

//Number Eight//
console.log(challenge.includes('Script'))

//Number Nine//
console.log(challenge.split())

//Number Ten//
console.log(challenge.split(' '))

//Number Eleven//
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))

//Number Twelve//
console.log(challenge.replace('Javascript', 'Python'))

//Number Thirteen//
console.log(challenge.charAt(15))

//Number Fourteen//
console.log(challenge.charCodeAt('J'))

//Number Fifteen//
console.log(challenge.indexOf('a'))

//Number Sixteen//
console.log(challenge.lastIndexOf('a'))

//Number Seventeen//
let sentence1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence1.indexOf('because'))

//Number Eighteen//
console.log(sentence1.lastIndexOf('because'))

//Number Nineteen//
console.log(sentence1.search('because'))

//Number Twenty//
console.log(challenge.trim())

//Number TwentyOne//
console.log(challenge.startsWith('30'))

//Number TwentyTwo//
console.log(challenge.endsWith('JavaScript'))

//Number TwentyThree//
console.log(challenge.match('a'))

//Number TwentyFour//
let concat1 = '30 Days of'
console.log(concat1.concat(' Javascript'))

//Number TwentyFive//
console.log(challenge.repeat(2))