//CONSOLE OBJECT METHODS//

//console.log()//
//We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.//
console.log('This is 30 Days of Javascript')

//Substitution//
console.log('%d %s of JavaScript', 30, 'Days')

//CSS//
console.log(`%c30 Days of JavaScript`, 'color:pink')



//console.warn()//
//We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.//
console.warn('NUCLEAR THREAT IMMINENT')
console.warn('The Lakers will be winning the 2023-24 NBA Championship!')



//console.error()//
//The console.error() method shows an error messages.//
console.error('Error is different from warn.')
console.error('Error messages are red, warn messages are yellow.')



//console.table()//
//The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.//
let names = ['Alex', 'Brian', 'Chris', 'David']
console.table(names) //has two columns//

//With an Object//
let completeuser = {
    name: 'Hamim',
    occupation: 'Intern',
    age: 19,
    city: 'New York City'
}
console.table(completeuser) //has two columns//

let countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries) //has three columns//

let users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
console.table(users) //has six columns//



//console.time()//
//Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.//
let morecountries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < morecountries.length; i++) {
    console.log(morecountries[i][0], morecountries[i][1])
  }
console.timeEnd('Regular for loop')



//console.info()//
//It displays information message on browser console.//
console.info('This course is called 30 Days of JavaScript, just in case you didnt know.')
console.info('This is Day #13 of the course.')



//console.assert()//
//The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.//
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(2 > 4, '2 is not greater than 4')



//console.group()//
//The console.group() can help to group different log groups. Copy the following code and paste it on browser console to the groups.//
const names2 = ['Asabeneh', 'Brook', 'David', 'John']
const countries2 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users2 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names2)
console.groupEnd()

console.group('Countries')
console.log(countries2)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users2)
console.groupEnd()



//console.count()//
//It prints the number of times the console.count() is called. It takes a string label parameter. It is very helpful to count the number of times a function is called. In the following example, the console.count() method will run three times.//
let func = () => {
    console.count('Function has been called this many times')
}
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()



//console.clear()//
//The console.clear() cleans the browser console.//

//I will not be doing this but its straightforward and I don't want to clear my console.//
