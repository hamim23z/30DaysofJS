//Writing Clean Code//

//Variables//
let firstName = 'Hamim'
let lastName = 'Choudhury'
let country = 'United States of America'
let city = 'New York City'

const pi = Math.PI
const a = 9.8



//Arrays//
let names = ['Hamim', 'LeBron', 'Jordan', 'Mark']
let numbers = [1, 2, 3, 4, 5, 7.20]
const countries = ['Bangladesh', 'India', 'New Zealand', 'Greenland']



//Functions//
//FullName//
let printfullname = (firstname, lastname) => firstname + ' ' + lastname

//A Number Squared//
let exponent = (n) => n * n





//Loops//
let morenames = ['Stephen', 'Tony', 'Jacknson', 'George']
let len = morenames.length;
for (let i = 0; i < len; i++) {
    console.log(names[i].toUpperCase())
}



//Onjects//
const personinfo = {
    myfirstname: 'Hamim',
    mylastname: 'Choudhury',
    myage: 20,
    myschool: 'City College of New York',
}
for (const key in personinfo) {
    console.log(key, personinfo[key])
}



//Conditionals//
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number.`)
} else {
    console.log(`${num} is a negative number.`)
}

let userinput = prompt('Enter your name:')
if (userinput.length > 10) {
    console.log('Your name is too long. Please enter an abbreviated name.')
} else if (userinput.length <= 10) {
    console.log('You may continue exploring this website.')
}



//Classes//
class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}
