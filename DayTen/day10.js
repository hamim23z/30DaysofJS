//SETS AND MAPS//

//Set: is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.//
//Creating an Empty Set//
let companies = new Set()
console.log(companies)



//Creating a Set from an Array//
let languages = [
    'English', 
    'Bengali',
    'French',
    'Spanish',
    'English',
    'Spanish'
]
let setoflanguages = new Set(languages)
console.log(setoflanguages)

for (let language of setoflanguages) {
    console.log(language)
}



//Adding an Element to a Set//
let companies2 = new Set()
console.log(companies2.size)

companies2.add('Meta')
companies2.add('Tesla')
companies2.add('Google')
console.log(companies2.size)
console.log(companies2)

//We can also use loop to add element to a set.//
let companies3 = ['Microsoft', 'Adidas', 'Nike', 'NBA']
setofcompanies = new Set()
for (let company of companies3) {
    setofcompanies.add(company)
}
console.log(setofcompanies)



//Deleting an Element from a Set//
console.log(companies2.delete('Google'))
console.log(companies2)



//Checking an Element in a Set//
console.log(companies2.has('Apple')) //false//
console.log(companies2.has('Tesla')) //true//



//Clearing a Set//
companies2.clear()
console.log(companies2)



//Other use case of set. For instance to count unique item in an array.//
let numbers = [5, 3, 2, 5, 5, 9, 4, 5]
let setofnumbers = new Set(numbers)
console.log(setofnumbers)



//Union of Sets: To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)//
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)



//Intersection of Sets: To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)//
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]
let D = new Set(d)
let E = new Set(e)
let f = d.filter((num) => E.has(num))
let F = new Set(f)
console.log(F)



//Difference of Sets: To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)//
let g = [1, 2, 3, 4, 5]
let h = [3, 4, 5, 6]

let G = new Set(g)
let H = new Set(h)

let j = a.filter((num) => !H.has(num))
let J = new Set(j)
console.log(J)
