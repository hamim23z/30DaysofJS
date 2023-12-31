//OBJECTS//
//Variable can be declared globally or locally scope. We will see both global and local scope. Anything declared without let, var or const is scoped at global level.//

//Window Global Object//
a = 'Javascript'
b = 10
function learnscope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b)



//Global Scope//
//A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.//
let c = 'JavaScript'
let d = 10
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    let c = 'Python'
    let d = 100
    console.log(c, d)
  }
  console.log(c, d)
}
letsLearnScope()
console.log(c, d)



//Local Scope//
//A variable declared as local can be accessed only in certain block code.//

//A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc).//
//The scope let and const are the same. The difference is only reassigning. We can not change or reassign the value of the const variable. I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.//










//OBJECTS//
//Creating an Empty Object//
const person = {}



//Object with Values//
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)


const information = {
    fn: 'Hamim',
    ln: 'Choudhury',
    age: 19,
    country: 'United States',
    city: 'New York City',
    skills: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
}
console.log(information)



//Getting Values from Objects//
console.log(information.fn)
console.log(information.skills)
console.log((information.age)) //one method of finding value//

console.log(information['age'])
console.log(information['fn'])
console.log(information['country']) //another method of finding value//



//Creating Object Methods//
getFullName: function getFullName() {
    return `${this.fn} ${this.ln}`
}
console.log(information.getFullName)



//Setting New Key for Objects//
information.nationality = 'Bengali'
information.country = 'United States of America'
information.title = 'Student'
information.skills.push('Python')
information.skills.push('Java')
console.log(information)



//Object Methods//
//Object.assign: Copy an object without modifying the original object//
const moreinformation = {
    firstName: 'Hamim',
    age: 19,
    country: 'USA',
    city:'NYC',
    skills: ['HTML', 'CSS', 'JavaScript'],
    title: 'Student',
    address: {
      street: '123 St',
      pobox: 1234,
      city: 'NYC2'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}
const replica = Object.assign({}, moreinformation)
console.log(replica)


//Object.keys: To get the keys or properties of an object in an array//
let keys = Object.keys(moreinformation)
console.log(keys)

let address = Object.keys(moreinformation.address)
console.log(address)


//Object.values: To get the values of an object as an array//
let values = Object.values(moreinformation)
console.log(moreinformation)


//Object.entries: To get the keys and values in an array//
let entries = Object.entries(replica)
console.log(replica)


//hasownProperty: To check if a specific key or property exists in an object//
console.log(moreinformation.hasOwnProperty('firstName'))
console.log(moreinformation.hasOwnProperty('age'))
console.log(moreinformation.hasOwnProperty('job'))







//LEVEL ONE EXERCISE PROBLEMS//
//Number One//
let dog = {}

//Number Two//
console.log(dog)

//Number Three//
let dog2 = {
    name: 'Hunter',
    legs: 4,
    color: 'White',
    age: 2,
    bark: 'Woof Woof'
}

//Number Four//
console.log(dog2.name)
console.log(dog2.legs)
console.log(dog2.color)
console.log(dog2.age)
console.log(dog2.bark)

//Number Five//
dog2.breed = 'Golden Retriever'
console.log(dog2)

getDogInfo: function getDogInfo() {
    return `${this.name} ${this.breed}`
}
console.log(getDogInfo)









//LEVEL TWO EXERCISE PROBLEMS//
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

//Number One//
let maxSkills = 0;
let skillfulPerson = '';

for (const user in users) {
  const skillsCount = users[user].skills.length;
  
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    skillfulPerson = user;
  }
}
console.log(skillfulPerson);


//Number Two//
let loggedInCount = 0;
let highPointsCount = 0;

for (const user in users) {
  const { isLoggedIn, points } = users[user];
  
  if (isLoggedIn) {
    loggedInCount++;
  }
  
  if (points >= 50) {
    highPointsCount++;
  }
}
console.log('Logged in users count:', loggedInCount);
console.log('Users with >= 50 points count:', highPointsCount);


//Number Three//
const mernStackDevelopers = [];

for (const user in users) {
  const { skills } = users[user];
  
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node.js')
  ) {
    mernStackDevelopers.push(user);
  }
}
console.log(mernStackDevelopers);


//Number Four//
let modifiedusers = {
    ...users,
    Hamim: {
        email: 'hamimc232@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'PHP'],
        age: 19,
        isLoggedIn: false,
        points: 60
    }
}
console.log(modifiedusers)


//Number Five//
let allkeys = Object.keys(users)
console.log(allkeys)


//Number Six//
let allvalues = Object.values(users)
console.log(allvalues)


//Number Seven//
let countries = {
    name: 'Bangladesh',
    capital: 'Dhaka',
    population: '169.4 million',
    languages: ['Bengali', 'Hindi', 'English']
}
console.log(countries)













//LEVEL THREE EXERCISE PROBLEMS//
let personAccount = {
    firstNames: 'Hamim',
    lastNames: 'Choudhury',
    incomes: 'Work',
    expenses: 900,
    totalIncome: 50000,
    totalExpense: 10000,
    accountInfo: 'Checkings Account',
    addIncome: 'Savings',
    addExpense: 'Clothing',
    accountBalance: 'Classified Intel'  
}
console.log(personAccount)



const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//Number Two//
function signUp(user) {
    const existingUser = users2.find((u) => u.email === user.email);
    
    if (existingUser) {
      console.log('User already has an account.');
    } else {
      users2.push(user);
      console.log('User added successfully.');
    }
}

function signIn(email, password) {
    const user = users2.find((u) => u.email === email && u.password === password);
    
    if (user) {
      user.isLoggedIn = true;
      console.log('Sign-in successful.');
    } else {
      console.log('Invalid email or password.');
    }
}


//Number Three//
function rateProduct(productId, userId, rating) {
    const product = products.find((p) => p._id === productId);
    
    if (product) {
      const existingRating = product.ratings.find((r) => r.userId === userId);
      
      if (existingRating) {
        existingRating.rate = rating;
        console.log('Product rating updated successfully.');
      } else {
        product.ratings.push({ userId, rate: rating });
        console.log('Product rated successfully.');
      }
    } else {
      console.log('Product not found.');
    }
}

function averageRating(productId) {
    const product = products.find((p) => p._id === productId);
  
    if (product && product.ratings.length > 0) {
      const sumOfRatings = product.ratings.reduce((total, rating) => total + rating.rate, 0);
      const average = sumOfRatings / product.ratings.length;
      return average.toFixed(2); // Return average rating with 2 decimal places
    } else {
      return 'No ratings available for this product.';
    }
}


//Number Four//
function likeProduct(productId, userId) {
    const product = products.find((p) => p._id === productId);
  
    if (product) {
      const userLiked = product.likes.includes(userId);
  
      if (userLiked) {
        // User already liked the product, so remove the like
        product.likes = product.likes.filter((id) => id !== userId);
        console.log('Product unliked successfully.');
      } else {
        // User has not liked the product, so add the like
        product.likes.push(userId);
        console.log('Product liked successfully.');
      }
    } else {
      console.log('Product not found.');
    }
}
