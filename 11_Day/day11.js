//DESTRUCTURING AND SPREADING//

//Destructuring: Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.//
//Destructuring Arrays//
let numbers = [1, 2, 3]
let [numone, numtwo, numthree] = numbers
console.log(numone, numtwo, numthree)

let names = ['Hamim', 'Joe', 'David', 'Phillip']
let [firstname, secondname, thirdname, fourthname] = names
console.log(firstname, secondname, thirdname, fourthname)

let fullstack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Python, Java']
]
let [frontend, backend] = fullstack
console.log(frontend)
console.log(backend)


//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index//
let names2 = ['Hamim', 'Joe', 'David', 'Phillip']
let [firstname2, secondname2, , fourthname2] = names2
console.log(firstname2, secondname2, fourthname2) //using two commas gets rid of the value at that spot


//We can use default value in case the value of array for that index is undefined://
let morenames = [undefined, 'Brook', 'Giannis']
let [
    firstname3 = 'Hamim', 
    secondname3, 
    thirdname3, 
    fourthname3 = 'Lebron'
] = morenames
console.log(firstname3, secondname3, thirdname3, fourthname3)


//We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).//
let morenumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [number1, number2, number3, ...rest2] = morenumbers
console.log(number1, number2, number3, rest2)
console.log(rest2)



//Destructuring during iteration//
let countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (let [country, city] of countries) {
    console.log(country, city)
}



//Destructuring Objects//
//When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object//
let rectangle = {
    width: 20, 
    height: 10,
    area: 200
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)


//Renaming during structuring//
let anotherrectangle = {
    width: 30,
    height: 20,
    area: 600
}
let {width: w, height: h, area: a, perimeter: p} = anotherrectangle
console.log(w, h, a, p)


//If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration//
let yetanotherrectangle = {
    width2: 10, 
    height2: 30, 
    area2: 300, 
}
let {width2, height2, area2, perimeter2 = 80} = yetanotherrectangle
console.log(width, height, area, perimeter2)


//Object parameter without destructuring//
const rect = {
    width: 20,
    height: 10
}
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rect))


//Object parameter with destructuring//
const calculatePerimeter2 = ({ width, height }) => {
    return 2 * (width + height)
  }
  
console.log(calculatePerimeter2(rect))


//Destructuring object during iteration//
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
},
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
},
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]
    
for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}












//Spread or Rest Operator//
//When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.//

//Spread operator to get the rest of array elements//
let ordernumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let [firstnumber, secondnumber, thirdnumber, ...rest] = ordernumbers
console.log(firstnumber, secondnumber, thirdnumber, rest)


//Spread operator to copy array//
let evens = [2, 4, 6, 8, 10, 12]
let evenumbers = [...evens]

let odds = [1, 3, 5, 7, 9]
let oddnumbers = [...odds]

let allnumbers = [...evens, ...odds]
console.log(evenumbers, oddnumbers, allnumbers)
console.log(evenumbers)
console.log(oddnumbers)
console.log(allnumbers)


//Spread operator to copy object//
let randomuser = {
    name: 'Sebastian',
    age: 29, 
    occupation: 'Director',
    yearsincompany: 7
}
let copieduser = {...randomuser}
console.log(copieduser)

//Modifying or changing the object while copying//
let anotheruser = {
    name: 'Jonathan',
    age: 33, 
    occupation: 'Senior Engineer',
    yearsincompany: 10
}
let copieduser2 = {...anotheruser, email: 'randomuser@gmail.com'}
console.log(copieduser2)



//Spread operator with arrow function//
//Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.//
let sumAllNums = (...args) => {
    console.log(args)
}
sumAllNums(1, 2, 3, 4, 5)










//LEVEL ONE EXERCISE PROBLEMS//
//Number One//
let someconstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanbodytempinc, waterboilingtemp] = someconstants
console.log(e, pi, gravity, humanbodytempinc, waterboilingtemp)

//Number Two//
let samecountries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = samecountries
console.log(fin, est, sw, den, nor)

//Number Three//
let rectangle100 = {
    width4: 20,
    length4: 40,
    area4: 800
}
let {width4, length4, area4} = rectangle100
console.log(width4, length4, area4)



//LEVEL TWO EXERCISE PROBLEMS//
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

//Number One//
for (let {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}

//Number Two//
let usersWithLessThanTwoSkills = users.filter(user => user.skills.length < 2)
console.log(usersWithLessThanTwoSkills);
