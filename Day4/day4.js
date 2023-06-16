//CONDITIONALS//

//If Statements//
//The Basic Syntax//
/* if (condition) {
    something here
} */

let number100 = 100
if (number100 > 0) {
    console.log(number100 + ' is a positive number.')
}

let israiningnow = true
if (israiningnow) {
    console.log(israiningnow)
}

//The thing with if statements is that the conditions need to be true. If it is false, then there will be no output.//


//If Else Statements//
/*if (condition) {
    // this part of code runs for truthy condition
  } else {
    // this part of code runs for false condition
  } */
  

let number5 = 5
if (number5 > 0) {
    console.log(number5 + ' is a positive number')
}
else {
    console.log(number5 + ' is a negative number')
}

let numberneg5 = -5
if (numberneg5 > 0) {
    console.log(numberneg5 + ' is a positive number')
}
else {
    console.log(numberneg5 + ' is a negative number')
}


//If Else If Else Statements//
/* if (condition) {
    something here
} else if (condition) {
    something here
} else {
    something here
} */

let z = 5
if (z > 0) {
    console.log(z + ' is a positive number.')
} else if (z < 0) {
    console.log(z + ' is a negative number.')
} else if (z == 0) {
    console.log(z + ' is equal to 0.')
} else {
    console.log(z + ' is not a number at all.')
}


//Switch Statements: They're like If Else If Else statements, but cleaner in a way and they allow you to have different cases.//
/*switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
} */

let dayuserinput = prompt('What day is it today? ')
let day = dayuserinput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday.')
        break

    case 'tuesday':
        console.log('Today is Tuesday.')
        break
    
    case 'wednesday':
        console.log('Today is Wednesday.')
        break

    case 'thursday':
        console.log('Today is Thursday.')
        break
    
    case 'friday':
        console.log('Today is Friday.')
        break

    case 'saturday':
        console.log('Today is Saturday.')
        break

    case 'sunday':
        console.log('Today is Sunday.')
        break

    default:
        console.log('Double check your spelling.')
}


//LEVEL ONE EXERCISES//
//Number One//

let userinputage = prompt('Enter your age. ')
if (userinputage >= 18) {
    console.log('You are old enough to drive. ')
} else {
    let yearstowait = 18 - userinputage
    console.log('You are not yet old enough to drive. You need to wait ' + yearstowait +' more years.')
}


//Number Two//
let youragenow = prompt('Enter your age: ')
let myagenow = 19
let compareages = youragenow - myagenow
console.log('You are ' + compareages + ' years older than me.')


//Number Three//
let a = 4
let b = 3
if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' is less than ' + b)
}