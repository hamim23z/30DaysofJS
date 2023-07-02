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
