//ARRAYS//

//Creating an Empty Array//
let emptyarray1 =  new Array()
console.log(emptyarray1)

//The most common way to write arrays is with square brackets//
let mainarray = []
console.log(mainarray)


//Arrays with Values//
let arrayfruits = ['Apples', 'Oranges', 'Banana', 'Watermelon']
console.log('arrayfruits:', arrayfruits)
console.log('Number of fruits:', arrayfruits.length)

//Arrays Can Have Different Data Types//
let arraydifferent = [
    'Hamim',
    18,
    false,
    {skills: ['HTML', 'CSS', 'JavaScripts']}
]
console.log(arraydifferent)


//CREATING AN ARRAY USING SPLIT//
let languagejs = 'Javascript'
console.log(languagejs.split(''))

let list = 'Awesome, Banana, Cars, Eggs'
console.log(list.split(','))

let favsentence = 'Welcome to 30 Days of Javascript'
console.log(favsentence.split(' '))


//ACCESSING ARRAY ITEMS USING INDEX//
let accessitems = ['Audi', 'BMW', 'Chevy', 'Dodge']
console.log(accessitems)

let firstitem = accessitems[0]
console.log(firstitem)

let seconditem = accessitems[1]
console.log(seconditem)

let thirditem = accessitems[2]
console.log(thirditem)

let fourthitem = accessitems[3]
console.log(fourthitem)


//MODIFYING ARRAY ELEMENTS//
let modifyarray = [1, 2, 3, 4, 5, 10]
modifyarray[5] = 6
console.log(modifyarray)

let modifyarray2 = [
    'Hello',
    'Hi',
    'Greetings',
    'How are you?',
    'Goodbye'
]
modifyarray2[4] = 'Hola!'
console.log(modifyarray2)


//METHODS TO MANIPULATE ARRAYS//
//Array: To Create an Array//
let emptyarrayvalues = Array(8)
console.log(emptyarrayvalues) //will print out empty x8

//Fill: Fill all the Array Elements with a Static Value//
let fillarray = Array(9).fill('X')
console.log(fillarray) //will print out x, 9 times

//Concat: To Concatenate Two Arrays//
let firslist = [1, 2, 3]
let secondlist = [4, 5, 6]
let thirdlist = firslist.concat(secondlist)
console.log(thirdlist) //joins the two arrays and will print out 1, 2, 3, 4, 5, 6

//Length: To know the size of the array//
let arraylength = [1, 2, 3, 4, 5, 6, 7]
console.log(arraylength.length) //7 is the size of the array

//IndexOf: To check if an item exists and returns the index.//
let arrayindex = [1, 2, 3, 4, 5]
console.log(arrayindex.indexOf(3))
console.log(arrayindex.indexOf(6)) //if it doesnt exist, it returns -1

//Last IndexOf: Gives the position of the last item in the array//
let arraylast = [1, 2, 3, 4, 1, 7, 3]
console.log(arraylast.lastIndexOf(1)) //will return 4

//Includes: To check if an item exists in an array//
let americanstates = [
    'New York',
    'Texas',
    'Florida',
    'Nevada',
    'California'
]
console.log(americanstates.includes('Texas'))
console.log(americanstates.includes('New Jersey'))

//Array is Array: To check if the data type is an array//
let testingarray = [1, 2, 3, 4]
console.log(Array.isArray(testingarray)) //true

let testingarray2 = 'Hi'
console.log(Array.isArray(testingarray2)) //false

//toString: Converts Array to String//
let changingarray = [10, 9, 8, 7, 6, 5]
console.log(changingarray.toString())

let changingarray2 = 'Hello, How are You?'
console.log(changingarray2.toString())

//Push: Adds item in the end of an array//
let fruits2 = ['banana', 'orange', 'mango', 'lemon']
fruits2.push('apple')
console.log(fruits2)

//Pop: Removes the item at the end of an array//
let numbersagain = [1, 2, 3, 4, 5]
numbersagain.pop() 
console.log(numbersagain) 

//Shift: Removes the item at the beginning of an array//
let numbers9 = [1, 2, 3, 4, 5]
numbers9.shift() 
console.log(numbers9) 

//Unshift: Adds item in the beginning of an array//
let numbers8 = [1, 2, 3, 4, 5]
numbers8.unshift(0) 
console.log(numbers8)


//ARRAY OF ARRAYS//
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let backEnd = ['Node','Express', 'MongoDB']
let fullStack = [frontEnd, backEnd]
console.log(fullStack)





//LEVEL ONE EXERCISES//
//Number One//
let emptyarrayagain = []
console.log(emptyarrayagain)

//Number Two//
let declarearray = [1, 2, 3, 4, 5]

//Number Three//
console.log(declarearray.length)

//Number Four//
let firstitem1 = declarearray[0]
let seconditem1 = declarearray[2]
let thirditem1 = declarearray[4]
console.log(firstitem1)
console.log(seconditem1)
console.log(thirditem1)

//Number Five//
let mixedDataTypes = [
    'Hello',
    20,
    false,
    true,
    'Goodbye',
    ['This is cool']
]
console.log(mixedDataTypes.length)

//Number Six//
let itCompanies= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Number Seven//
console.log(itCompanies)

//Number Eight//
console.log(itCompanies.length)

//Number Nine//
let firstcomp = itCompanies[0]
let secondcomp = itCompanies[3]
let thirdcomp = itCompanies[6]
console.log(firstcomp)
console.log(secondcomp)
console.log(thirdcomp)

//Number Ten//
let comp1 = itCompanies[0]
let comp2 = itCompanies[1]
let comp3 = itCompanies[2]
let comp4 = itCompanies[3]
let comp5 = itCompanies[4]
let comp6 = itCompanies[5]
let comp7 = itCompanies[6]
console.log(comp1 + comp2 + comp3 + comp4 + comp5 + comp6 + comp7) //it's just repetitive when I print console.log every line//

//Number Eleven//
itCompanies[0] = 'FACEBOOK'
itCompanies[1] = 'GOOGLE'
itCompanies[2] = 'MICROSOFT'
itCompanies[3] = 'APPLE'
itCompanies[4] = 'IBM'
itCompanies[5] = 'ORACLE'
itCompanies[6] = 'AMAZON'
console.log(itCompanies)

//Number Twelve//
console.log(itCompanies + ' are big IT companies.')

//Number Thirteen//
let itCompanies2= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
if (itCompanies2.includes('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')) {
    console.log('The company is found in this list.')
} else {
    console.log('The company is not in this list.')
}

//Number Fourteen//


//Number Fifteen//
console.log(itCompanies.sort())

itCompanies.sort()
console.log(itCompanies)

//Number Sixteen//
console.log(itCompanies.reverse())

//Number Seventeen//
console.log(itCompanies.slice(0, 3)) //still using the reverse function, so answer may vary

//Number Eighteen//
console.log(itCompanies.slice(4, 7)) //still using the reverse function, so answer may vary

//Number Nineteen//
console.log(itCompanies.slice(3, 4)) //still using the reverse function, so answer may vary

//Number Twenty//
itCompanies.shift()
console.log(itCompanies)

//Number Twenty One//
itCompanies.splice(3,4)
console.log(itCompanies)

//Number Twenty Two//
itCompanies.pop()
console.log(itCompanies)

//Number Twenty Three//
itCompanies = []
console.log(itCompanies)
