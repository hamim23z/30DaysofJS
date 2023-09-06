//Document Object Model - Day 1//

//GETTING ELEMENT//


//Getting Elements by Tag Name//
//getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.//
document.getElementsByTagName('tagname')

let allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
}




//Getting Elements by Class Name//
//getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements.//
document.getElementsByClassName('classname')

let allTitles2 = document.getElementsByClassName('title')
console.log(allTitles2)
console.log(allTitles2.length)
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]) // prints each elements in the HTMLCollection
}




//Getting Elements by ID//
//getElementsById() targets a single HTML element. We pass the id without # as an argument.//
document.getElementById('id')

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>




//Getting Elements by querySelectors//
//querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.//
let firstTitle2 = document.querySelector('h1')
let firstTitle3 = document.querySelector('first-title')
let firstTitle4 = document.querySelector('.title')
console.log(firstTitle2)
console.log(firstTitle3)









//Adding Attribute//
//The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.//
let titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')









//Adding Text to an HTML Document//
//Adding Text using textContent//
//The textContent property is used to add text to an HTML element.//
let titles2 = document.querySelectorAll('h1')
titles2[3].textContent = 'Fourth Title Hello'




//Adding Text Content using InnerHTML//
//innerHTML can add a text or HTML element or elements as a child.//
const titles3 = document.querySelectorAll('h1')
titles3[4].textContent = 'Fifth Title'









//Adding Style//
//Adding Style Color//
const titles4 = document.querySelectorAll('h1')
titles4.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.color = 'blue'
    } else {
        title.style.color = 'red'
    }
})




//Adding Style Background Color//
const titles5 = document.querySelectorAll('h1')
titles5.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.backgroundColor = 'grey'
    } else {
        title.style.backgroundColor = 'black'
    }
})
//same process as color, just has a different . at the end//




//Adding Style Font Size//
const titles6 = document.querySelectorAll('h1')
titles6.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.fontSize = '50px'
    } else {
        title.style.fontSize = '25px'
    }
})
