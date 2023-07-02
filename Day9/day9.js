//Higher Order Functions//
//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.//

//Callback//
let callback = (n) => {
    return n**2
}
console.log(callback)


function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3))



//Returning Functions//
let higherorder = n => {
    let dosomething = m => {
        let dowhatever = t => {
            return 2 * n + 3 * m + t
        }
        return dowhatever
    }
    return dosomething
}
console.log(higherorder(2)(3)(10))


const numbers = [1, 2, 3, 4]
let sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))



//Setting Time//
/*In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.


//Setting Interval with setInterval//
/* syntax
function callback() {
    // code goes here
  }
setInterval(callback, duration) */

function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000)



//Setting Time Using setTimeout//
/* syntax
function callback() {
    // code goes here
  }
setTimeout(callback, duration) */

function sayGoodbye() {
    console.log('Goodbye')
}
setTimeout(sayGoodbye, 2000)







//Functional Programming//
//Instead of writing regular loop, latest version of JavaScript introduced lots of built-in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.//

//forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.//
/* Multiple Different Syntax

1. arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

2. // The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

3. // The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr)) */

let sum = 0
let morenumbers = [1, 2, 3, 4, 5]
morenumbers.forEach(num => console.log(num))
console.log(sum)

let sum2 = 0
let morenumbers2 = [1, 2, 3, 4, 5]
morenumbers2.forEach(num => sum += num)
console.log(sum)

let countries = ['Bangladesh', 'Iraq', 'India', 'USA']
countries.forEach((element) => console.log(element.toUpperCase()))



//map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.//
/*Syntax 
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})

Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element); */

let numlist = [1, 2, 3, 4, 5]
let numlistsquared = numlist.map((num) => num * num)
console.log(numlistsquared)

let names = ['Hamim', 'Alexis', 'Johnny', 'Miguel']
let namesmodified = names.map((names) => names.toUpperCase())
console.log(namesmodified)



// filter: Filter out items which full fill filtering conditions and return a new array. //

let differentcountries = ['Turkey', 'Greece', 'Brazil', 'Argentina', 'Finland', 'Iceland']
let countriescontainingi = differentcountries.filter((differentcountries) => 
    differentcountries.includes('i')
)
console.log(countriescontainingi)

let testscores = [
    {name: 'Hamim', scores: 99},
    {name: 'Jeff', scores: 90},
    {name: 'Henry', scores: 85},
    {name: 'Bob', scores: 80}
]
let scoregreaterthan80 = testscores.filter((testscores) => testscores.scores > 80)
console.log(scoregreaterthan80)



// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error. //
/*Syntax
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue) */

const againnumbers = [1, 2, 3, 4, 5]
const againsum = againnumbers.reduce((acc, cur) => acc + cur, 0)
console.log(againsum)



// every: Check if all the elements are similar in one aspect. It returns boolean//
let randomnames = ['Henrietta', 'JayZ', 'Paul', 'Dante']
let checkevery = randomnames.every((randomnames) => typeof randomnames === 'string')
console.log(checkevery)



// find: Return the first element which satisfies the condition//
let ages = [24, 22, 25, 32, 35, 18]
let age = ages.find((age) => age < 20)
console.log(age)



// findIndex: Return the position of the first element which satisfies the condition//
let morerandomnames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let morerandomages = [24, 22, 25, 32, 35, 18]

let result = morerandomnames.findIndex((morerandomnames) => morerandomnames.length > 7)
console.log(result)

let findage = morerandomages.findIndex((morerandomages) => morerandomages < 20)
console.log(findage)



// some: Check if some of the elements are similar in one aspect. It returns boolean//
let bools = [true, true, true, true]
let areSomeTrue = bools.some((b) =>  b === true)
console.log(areSomeTrue)



// sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.//

//Sorting String Values//
let products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) //sorts in alphabetical order//

//Sorting Numerical Values//
let numbers3 = [9.81, 3.14, 100, 37]
console.log(numbers3.sort())
numbers3.sort(function (a, b) {
  return a - b
})
console.log(numbers3)

//Sorting Object Arrays//
const users = [
    { name: 'Caveman', age: 150 },
    { name: 'Brook Lopez', age: 50 },
    { name: 'Grandma', age: 100 },
    { name: 'Austin', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
console.log(users)
