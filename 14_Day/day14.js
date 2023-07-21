//ERROR HANDLING//

/* JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.
JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block. */

//BASIC SYNTAX//
/* try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
} */


/*
try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block. 
*/


try {
    let mylastname = 'Choudhury'
    let myfullname = firstName + ' ' + mylastname
} catch (err) {
    console.log(err)
}



try {
    let firstname = 'Hamim'
    let fullname = firstname + ' ' + lastname
} catch (err) {
    console.error(err)
} finally {
    console.log('We can use console.log or console.error')
}



//The catch block take a parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message.//
try {
    let LASTNAME = 'Choudhury'
    let FULLNAME = FIRSTNAME + ' ' + LASTNAME
} catch (err) {
    console.log('Name of the error:', err.name)
    console.log('Error Message:', err.message)
} finally {
    console.log('In any case this command will be executed')
}



/*
throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:
*/
/*throw 'Error2'
throw 42
throw true
throw new Error('Required')
*/




//ERROR TYPES//
//ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.//
let hisfirstname = 'Joe'
let hisfullname = hisfirstname + ' ' + hislastname
console.log(hisfullname)



//SyntaxError: A syntax error has occurred//
let square = 2 x 2
console.log(square)
console.log('30 Days of JavaScript')



//TypeError: A type error has occurred//
let number = 10
console.log(number.toLowerCase())
