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





//MAPS//
//Creating an Empty Map//
let empmap = new Map()
console.log(empmap)



//Creating a Map from an Array//
let morecountries = [
    ['Bangladesh', 'India'],
    ['United States', 'Canada'],
    ['Norway', 'Oslo']
]
let map = new Map(morecountries)
console.log(map)
console.log(map.size)



//Adding Values to a Map//
let countriesmap = new Map()
console.log(countriesmap.size)

countriesmap.set('Turkey', 'Iraq')
countriesmap.set('Greece', 'Ukraine')
countriesmap.set('France', 'Germany')
console.log(countriesmap)
console.log(countriesmap.size)



//Getting Values from Map//
console.log(countriesmap.get('Turkey')) //returns Iraq//



//Checking if Values in a Map//
console.log(countriesmap.has('Turkey')) //true//
console.log(countriesmap.has('Bangladesh')) //false//



//Getting all Values from Map using Loop//
for (let country of countriesmap) {
    console.log(country)
}














//LEVEL ONE EXERCISE PROBLEMS//
//Number One//
let emptyset = new Set()
console.log(emptyset)

//Number Two//
let numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log(numberSet);

//Number Three//
let anotherset = ['hello', 'hola', 'hi']
let set100 = new Set(anotherset)
console.log(set100)
console.log(set100.delete('hi'))
console.log(set100)

//Number Four//
let yetanotherset = [1, 2, 3, 4, 5, 6]
let set200 = new Set(yetanotherset)
console.log(set200)

/*yetanotherset.clear()
console.log(yetanotherset) */

//Number Five//
let techlanguages = ['HTML', 'CSS', 'JS', 'Python', 'Java']
let newset = new Set(techlanguages)
console.log(newset)

//Number Six//
let countriesagain = [
    ['USA', 3],
    ['Bangladesh', 10],
    ['India', 5]
]
let newmap = new Map(countriesagain)
console.log(newmap)










//LEVEL TWO EXERCISE PROBLEMS//
const x = [4, 5, 8, 9]
const y = [3, 4, 5, 7]
const countries7 = ['Finland', 'Sweden', 'Norway']

//Number One//
let z = [...y, ...x]
let X = new Set(x)
let Y = new Set(y)
let Z = new Set(z)
console.log(Z)

//Number Two//
let K = new Set(x)
let L = new Set(y)
let m = x.filter((num) => L.has(num))
let M = new Set(m)
console.log(M)

//Number Three//
let N = new Set(x)
let O = new Set(y)
let p = x.filter((num) => !O.has(num))
let P = new Set(p)
console.log(P)





//LEVEL THREE EXERCISE PROBLEMS//
//Located in countries.js//
