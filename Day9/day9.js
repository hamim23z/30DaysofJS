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
//Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.//

//forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.//
/* Multiple Different Syntax

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

// The above code can be written using arrow function and explicit return
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
