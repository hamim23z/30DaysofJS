//PROMISES//

/*
We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.
*/



//CALLBACKS//
//call back Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error. In this case the err has a value and it will return the err block.//
let dosomething = callback => {
    setTimeout(() => {
      let skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  let callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
dosomething(callback)


//In this case the err is false and it will return the else block which is the result.//





//PROMISE CONSTRUCTOR//
//We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.//

/* Syntax:
let promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})
*/

let dopromiseresolve = new Promise((resolve, reject) => {
    setTimeout(() => {
      let skills3 = ['HTML', 'CSS', 'JS']
      if (skills3.length > 0) {
        resolve(skills3)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  dopromiseresolve
    .then(result => {
      console.log(result)
    })
.catch(error => console.log(error))



//Let us another example when the promise is settled with reject.//
let dopromisereject = new Promise((resolve, reject) => {
    setTimeout(() => {
      let skills4 = ['HTML', 'CSS', 'JS']
      if (skills4.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  dopromisereject
    .then(result => {
      console.log(result)
    })
.catch(error => console.error(error))




//FETCH API//
//The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.//
let url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
.catch(error => console.error(error))
