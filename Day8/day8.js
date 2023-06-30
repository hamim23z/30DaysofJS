//OBJECTS//
//Variable can be declared globally or locally scope. We will see both global and local scope. Anything declared without let, var or const is scoped at global level.//

//Window Global Object//
a = 'Javascript'
b = 10
function learnscope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b)



//Global Scope//
//A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.//
let c = 'JavaScript'
let d = 10
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    let c = 'Python'
    let d = 100
    console.log(c, d)
  }
  console.log(c, d)
}
letsLearnScope()
console.log(c, d)



//Local Scope//
//A variable declared as local can be accessed only in certain block code.//

//A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc).//
//The scope let and const are the same. The difference is only reassigning. We can not change or reassign the value of the const variable. I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.//










//OBJECTS//
//Creating an Empty Object//
const person = {}



//Object with Values//
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)


const information = {
    fn: 'Hamim',
    ln: 'Choudhury',
    age: 19,
    country: 'United States',
    city: 'New York City',
    skills: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
}
console.log(information)



//Getting Values from Objects//
console.log(information.fn)
console.log(information.skills)
console.log((information.age)) //one method of finding value//

console.log(information['age'])
console.log(information['fn'])
console.log(information['country']) //another method of finding value//



//Creating Object Methods//
getFullName: function getFullName() {
    return `${this.fn} ${this.ln}`
}
console.log(information.getFullName)



//Setting New Key for Objects//
information.nationality = 'Bengali'
information.country = 'United States of America'
information.title = 'Student'
information.skills.push('Python')
information.skills.push('Java')
console.log(information)



//Object Methods//
//Object.assign: Copy an object without modifying the original object//
const moreinformation = {
    firstName: 'Hamim',
    age: 19,
    country: 'USA',
    city:'NYC',
    skills: ['HTML', 'CSS', 'JavaScript'],
    title: 'Student',
    address: {
      street: '123 St',
      pobox: 1234,
      city: 'NYC2'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}
const replica = Object.assign({}, moreinformation)
console.log(replica)


//Object.keys: To get the keys or properties of an object in an array//
let keys = Object.keys(moreinformation)
console.log(keys)

let address = Object.keys(moreinformation.address)
console.log(address)


//Object.values: To get the values of an object as an array//
let values = Object.values(moreinformation)
console.log(moreinformation)


//Object.entries: To get the keys and values in an array//
let entries = Object.entries(replica)
console.log(replica)


//hasownProperty: To check if a specific key or property exists in an object//
console.log(moreinformation.hasOwnProperty('firstName'))
console.log(moreinformation.hasOwnProperty('age'))
console.log(moreinformation.hasOwnProperty('job'))







//LEVEL ONE EXERCISE PROBLEMS//
//Number One//
let dog = {}

//Number Two//
console.log(dog)

//Number Three//
let dog2 = {
    name: 'Hunter',
    legs: 4,
    color: 'White',
    age: 2,
    bark: 'Woof Woof'
}

//Number Four//
console.log(dog2.name)
console.log(dog2.legs)
console.log(dog2.color)
console.log(dog2.age)
console.log(dog2.bark)

//Number Five//
dog2.breed = 'Golden Retriever'
console.log(dog2)

getDogInfo: function getDogInfo() {
    return `${this.name} ${this.breed}`
}
console.log(getDogInfo)
