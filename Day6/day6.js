//LOOPS//
//For Loops//

/*// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
} */

for(let let1 = 0; let1 <= 5; let1++){
    console.log(let1)
} //will print out: 0 1 2 3 4 5. you start at 0 and go until its less than or equal to 5

for(let let2 = 5; let2 >=0; let2--){
    console.log(let2)
} //will print out: 5 4 3 2 1 0. you start at 5 and go until its less than or equal to 0

for(let let3 = 0; let3 <= 5; let3++) {
    console.log(`${let3} * ${let3} = ${let3 * let3}`)
} 

let contlist = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newarrayaa = []
for(let let4 = 0; let4 < contlist.length; let4++){
    newarrayaa.push(contlist[let4].toUpperCase())
  } console.log(newarrayaa)

let numberz = [1, 2, 3, 4, 5]
let newaarr = []
let sums = 0
for(let let5 = 0; let5 < numberz.length; let5++){
  newaarr.push( numberz[let5] ** 2)

} console.log(newaarr)
