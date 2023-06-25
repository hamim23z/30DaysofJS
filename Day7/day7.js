//FUNCTIONS//
//Function Declaration//
/* function functionName() {
  // code goes here
}
functionName() */


//Function without a Parameter and Return//
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
} 
square() //in order for a function to work, you need to call the function at the end, like i did in this line//


function addtwonumbers() {
    let numone = 10
    let numtwo = 20
    let totalsum = numone + numtwo
    console.log(totalsum)
}
addtwonumbers() //same thing, remember to call the function//


function fullnameprint() {
    let first = 'Hamim'
    let last = 'Choudhury'
    let ag = 19
    let printfullname = first + ' ' + last + ', ' + ag
    console.log(printfullname)
}
fullnameprint() //call function//





//Function with Returning Values//
function fullnameagain() {
    let myfirst = 'Hamim'
    let mylast = 'Choudhury'
    let space = ' '
    let myfull = myfirst + space + mylast
    return myfull
}
console.log(fullnameagain()) //for this type, we dont call the function at the end. we simply use return and we console.log the name of the function at the end.//


function addthreenumbers() {
    let onenum = 10
    let twonum = 20
    let threenum = 30
    let total = onenum + twonum + threenum
    return total
}
console.log(addthreenumbers()) //same thing, return what the total value or what you want to solve and then console.log the name of the function at the end.//






//Function with a Parameter(One Parameter)// //A parameter can be a number, string, boolean, or object//
/* function functionName(parm1) {
  //code goes her
}
functionName(parm1) */


function areaofcircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaofcircle(10)) //so with this, when you call the function, you put something in the parenthesis and when you console.log it, you give that something a value and then it will print according to your function//

function squaringnumbers(s) {
    let exponents = s * s
    return exponents
}
console.log(squaringnumbers(20)) //the same process as above, we put something in the function and we return it (return what we want to solve) and finally we console.log it with an official value//
