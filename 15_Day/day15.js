//CLASSES//

/*
JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.

//Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.//

In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object , we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.
*/





//DEFINING A CLASS OR CLASSES//
//To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.//
/* SYNTAX
class ClassName {
    //code
}
*/

class Person {
    //code
}




//Class Instantiation//
//Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new. Let us create a dog object from our Person class//
class Person2 {
    //code
}
let person = new Person2()
console.log(person)




//Class Constructor//
//The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class. The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.//
class Person3 {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = 'Hamim'
      this.lastName = lastName
    }
  }
let person3 = new Person3('John', 'Kennedy')
console.log(person3)


class NewPerson {
    constructor(namefirst, namelast, age) {
    console.log(this)
    this.namefirst = namefirst
    this.namelast = namelast
    this.age = age
    }
}
let newperson1 = new NewPerson('Lebron', 'James', 38)
let newperson2 = new NewPerson('Udonis', 'Haslem', 40)
let newperson3 = new NewPerson('Hamim', 'Choudhury', 19)
console.log(newperson1)
console.log(newperson2)
console.log(newperson3)




//Default Values with Constructor//
class Person100 {
    constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
}
}
let person1 = new Person100() // it will take the default values
let person2 = new Person100('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person1)
console.log(person2)




//Properties with initial value//
//When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.//
class Person200 {
    constructor(firstName2, lastName2, age2, country2, city2) {
      this.firstName2 = firstName2
      this.lastName2 = lastName2
      this.age2 = age2
      this.country2 = country2
      this.city2 = city2
      this.score2 = 0
      this.skills2 = []
    }
    getFullName() {
      const fullName2 = this.firstName2 + ' ' + this.lastName2
      return fullName2
    }
}
let person99 = new Person200('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
let person98 = new Person200('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person99.score2)
console.log(person98.score2)
console.log(person99.skills2)
console.log(person98.skills2)




//getter//
//The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example below//

/*
let person99 = new Person200('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
let person98 = new Person200('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
console.log(person99.getscore2)
console.log(person98.getscore2)
console.log(person99.getskills2)
console.log(person98.getskills2)
*/






//Inheritance//
//Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.//
/* syntax
class ChildClassName extends {
    // code goes here
} 
*/

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
let yeehaw = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(yeehaw)
console.log(yeehaw.saySomething())
console.log(yeehaw.getFullName)
console.log(yeehaw.getPersonInfo)
