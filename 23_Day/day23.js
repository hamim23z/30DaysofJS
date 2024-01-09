let grandparent = document.querySelector(".grandparent")
let parent = document.querySelector(".parent")
let child = document.querySelector(".child")



//Event Capturing and Event Bubbling//
/*
grandparent.addEventListener("click", e => {
    e.stopPropagation()
    console.log("Grandparent Capture")
}, { capture: true })

grandparent.addEventListener("click", e => {
    console.log("Grandparent Bubble")
})


parent.addEventListener("click", e => {
    console.log("Parent Capture")
}, { capture: true })

parent.addEventListener("click", e => {
    console.log("Parent Bubble")
})


child.addEventListener("click", e => {
    console.log("Child Capture")
}, { capture: true })

child.addEventListener("click", e => {
    console.log("Child Bubble")
})


document.addEventListener("click", e => {
    console.log("Document Capture")
}, { capture: true })

document.addEventListener("click", e => {
    console.log("Document Bubble")
}) */



//Running an Event Only Once//
/*
grandparent.addEventListener("click", e => {
    console.log("Grandparent Bubble")
})

parent.addEventListener("click", e => {
    console.log("Parent Bubble")
}, {once: true })

child.addEventListener("click", e => {
    console.log("Child Bubble")
})

*/


//Event Delegation//
let divs = document.querySelectorAll('div')

document.addEventListener("click", e => {
    if (e.target.matches("div")) {
        console.log("hello")
    }
})

let newdiv = document.createElement('div')
newdiv.style.width = '200px'
newdiv.style.height = '200px'
newdiv.style.backgroundColor = "purple"
document.body.append(newdiv)
