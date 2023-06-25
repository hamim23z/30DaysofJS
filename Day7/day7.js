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
