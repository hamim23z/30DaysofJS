//WEB STORAGES//
/*
Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. We Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.

The data being stored can be accessed using JavaScript, which gives you the ability to leverage client-side scripting to do many things that have traditionally involved server-side programming and relational databases. There are two Web Storage objects:

sessionStorage
localStorage

localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.

The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).
*/



/*
sessionStorage: sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.
*/


/*
localStorage: The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no expiration data. The data will be available on the browser even after the browser is closed. localStorage is kept even between browser sessions. This means data is still available when the browser is closed and reopened, and also instantly between tabs and windows.

Web Storage data is, in both cases, not available between different browsers. For example, storage objects created in Firefox cannot be accessed in Internet Explorer, exactly like cookies. There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()
*/











//HTML5 Web Storage Objects//
/*
window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.
*/


/*
Web Storage objects:
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/




//Setting item to the localStorage//
//We store data in the localStorage using the localStorage.setItem method.//

/* Syntax:
//syntax
localStorage.setItem('key', 'value') */

localStorage.setItem('firstname', 'Hamim')
console.log(localStorage)

localStorage.setItem('age', 19)
console.log(localStorage)



//Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first.//
let myskills = ['HTML', 'CSS', 'JS', 'Python']
let myskillsJSON = JSON.stringify(myskills, undefined, 4)
localStorage.setItem('myskills', myskillsJSON)
console.log(localStorage)



//Storing an object in a localStorage. Before we storage objects to a localStorage, the object has to be stringified.//
let user = {
    firstName: 'Hamim',
    age: 91,
    skills: ['HTML', 'CSS', 'JS', 'SQL']
}
let userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)
console.log('user', userText)



//Getting item from localStorage//
//We get data from the local storage using localStorage.getItem() method.//
/* Syntax: 
localStorage.getItem('key') */

let firstname = localStorage.getItem('firstname')
let age = localStorage.getItem('age')
let myskills2 = localStorage.getItem('myskills')
console.log(firstname, age, myskills2)



//Clearing the localStorage//
//The clear method, will clear everything stored in the local storage//
localStorage.clear()










//LEVEL ONE EXERCISE PROBLEMS//
localStorage.setItem('myfirstname', 'Hamim')
localStorage.setItem('mylastname', 'Choudhury')
localStorage.setItem('mycountry', 'United States')
localStorage.setItem('mycity', 'New York City')
console.log(localStorage)


//LEVEL TWO EXERCISE PROBLEMS//
let student = {
    firstname3 : 'John',
    lastname3 : 'Doe',
    age3: 27,
    skills3: ['HTML', 'CSS', 'JS', 'Java'],
    country3: 'Australia'
}
let studenttext = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studenttext)
console.log(localStorage)


//LEVEL THREE EXERCISE PROBLEMS//
let personAccount = {
    firstname4: 'Jane',
    lastname4: 'Smithson',
    income: ('Work', 300000, 'Stocks', 20000),
    expenses: ('Food', 30000, 'Extras', 40000)
}
let personAccounttext = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem('personAccount', personAccounttext)
console.log(localStorage)
