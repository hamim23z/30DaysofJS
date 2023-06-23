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

//While Loops//
let a = 0
while (a<=5) {
    console.log(a)
    a++
} //will print out: 0 1 2 3 4 5

let b = 5
while (b>=0) {
    console.log(b)
    b--
} //will print out: 5 4 3 2 1 0



//Do While Loops//
let c = 0
do {
    console.log(c)
    c++
} while (c<=5)

let d = 5
do {
    console.log(d)
    d--
} while (d>=0)



//For Of Loop//
/* for (const element of arr) {
  // code goes here
} */

let morenumbers = [1, 2, 3, 4, 5]
for(let num of morenumbers) {
    console.log(num)
}

for(let num of morenumbers) {
    console.log(num*num)
}


let techlanguages = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redox',
    'Node',
    'MongoDBB'
]
for (let tech of techlanguages) {
    console.log(tech.toUpperCase())
}



//Break: Used to interrupt a loop//
for (let e = 0; e<=5; e++) {
    if (e===3) {
        break
    }
    console.log(e)
} //if the number 3 is found, it stops before


//Continue: the opposite, it is used to skip certain iterations//
for(let f = 0; f <= 5; f++){
    if(f == 3){
      continue
    }
    console.log(f)
  }

console.log('Hello. Exercises are below.')


//LEVEL ONE EXERCISES//
//Number One//
for (let i=0; i<=10; i++) {
    console.log(i)
}

let z = 0
while (z<=10) {
    console.log(z)
    z++
}

let y = 0
do {
    console.log(y)
    y++
} while (y<=10)


//Number Two//
for(let i=10; i>=0; i--) {
    console.log(i)
}

let x = 10
while (x>=0) {
    console.log(x)
    x--
}

let w = 10
do {
    console.log(w)
    w--
} while(w>=0)


//Number Three//




//Number Four//
for(let i = 1; i<=7; i++) {
    console.log('#'.repeat(i))
}


//Number Five//
for (let i=0; i<=10; i++) {
    console.log(`${i} * ${i} = ${i*i} `)
}


//Number Six//
for (let i=0; i<=10; i++) {
    console.log(`${i} ${i*i} ${i*i*i}`)
}

//Number Seven//
for (let i=0; i<=100; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
}

//Number Eight//
for (let i=0; i<=100; i++) {
    if (i%2 !== 0) {
        console.log(i)
    }
}


//Number Nine//



//Number Ten//
let sumOfNumbers = 0
for (let num = 0; num <= 100; num++) {
  sumOfNumbers = sumOfNumbers + num;
}

console.log("The sum of all numbers from 0 to 100 is:", sumOfNumbers);
