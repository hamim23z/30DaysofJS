//CLOSURE//
//JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.//

function outerfunction() {
    let count = 0;
    function innerfunction() {
        count++
        return count
    }
    return innerfunction
}
let innerfunc = outerfunction()
console.log(innerfunc())
console.log(innerfunc())
console.log(innerfunc())


//Example 2//
function outfunction() {
    let counter = 100;
    function infunction() {
        counter--
        return counter
    }
    return infunction
}
let infunction = outfunction()
console.log(infunction())
console.log(infunction())
console.log(infunction())









//LEVEL ONE EXERCISE PROBLEMS//
function helloout() {
    let number = 100;
    function helloin() {
        number++
        return number
    }
    return helloin
}
let helloin = helloout()
console.log(helloin())
console.log(helloin())
console.log(helloin())




//LEVEL TWO EXERCISE PROBLEMS//
function createClosure() {
    let outerValue = 10;
    function innerFunction1() {
      console.log("Inner Function 1: " + outerValue);
    }
    function innerFunction2() {
      console.log("Inner Function 2: " + outerValue);
    }
    function innerFunction3() {
      console.log("Inner Function 3: " + outerValue);
    }
    return {
      innerFunction1,
      innerFunction2,
      innerFunction3
    };
  }
let closureInstance = createClosure()
closureInstance.innerFunction1()
closureInstance.innerFunction2()
closureInstance.innerFunction3()
