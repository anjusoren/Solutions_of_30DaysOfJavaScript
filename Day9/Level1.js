//Exercises : Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1.Explain the difference between forEach, map, filter, and reduce.

// forEach : It is used only with arrays. We use forEach to 
// iterate an array ElementInternals.
/*
let sum=0
const numbers1 =[1,2,3,4,5]
numbers1.forEach(num => console.log(num))
numbers1.forEach(num => sum+=num)
console.log("sum: ",sum)
*/

// map: map is used to iterate an array elements and modify the 
// array elements. It takes a callback function with elements, index,
// array parameter and return a new array

// const modifiedArray = arr.map(function (element, index, arr){
//     return element
// })
/*
const numbers2 =[1,2,3,4,5,6]
const numbersSquare = numbers2.map((num) => num*num)
console.log(numbersSquare)
*/

// filter: filter is used to filter out items which full-fill filtering
// conditions and return a new Array
/*
const countriesContainingLand = countries.filter((country)=>
    country.toLowerCase().includes('land')
)
console.log(countriesContainingLand)
*/

// reduce: reduce takes a callback function. The call back function
// takes accumulator, current and optional initial values as a
// parameter and returns a single value.
/*
Array.reduce((acc, cur) =>{
    //some operations goes here before returning a value
    return
}, initialValue)*/
/*
const numbers3 = [1,2,3,4,5]
const sum = numbers3.reduce((acc, cur)=> acc + cur,0)
console.log(sum)*/

//2.Define a callback function before you use it in forEach, map, filter or reduce.
// Callback function: A callback is a function which can be passed
// as parameter to other function.
/*
const callback = (n) =>{
    return n**2
}

function cube(callback, n){
    return callback(n)*n
}

console.log(cube(callback ,3)) */

//3. Use forEach to console.log each country in the countries array.
//countries.forEach((country) => console.log(country))

// 4.Use forEach to console.log each name in the names array.
//names.forEach(name => console.log(name))

// 5. Use forEach to console.log each number in the numbers array.
//numbers.forEach((number) => console.log(number))

// 6.Use map to create a new array by changing each country to uppercase in the countries array.
const countryToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countryToUpperCase)

//7. Use map to create an array of countries length from countries array.
const countryLength = countries.map((country) => country.length)
console.log(countryLength)

// 8.Use map to create a new array by changing each number to square in the numbers array
const numberSquares = numbers.map((num)=> num*num)
console.log(numberSquares)

// 9.Use map to change to each name to uppercase in the names array
const nameUpper = names.map((name) => name.toUpperCase())
console.log(nameUpper)

// 10.Use map to map the products array to its corresponding prices.
const priceProduct = products.map((product) =>{
    return `${product.product}:${product.price}`
})
console.log(priceProduct)


//11. Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((country)=> country.toLowerCase().includes('land'))
console.log(countriesContainingLand)

//12. Use filter to filter out countries having six character.
const countriesOfSixChar = countries.filter((country)=> country.length===6)
console.log(countriesOfSixChar)

//13. Use filter to filter out countries containing six letters and more in the country array.
const countriesOfSixCharOrMore = countries.filter((country) => country.length>=6)
console.log(countriesOfSixCharOrMore)

// 14.Use filter to filter out country start with 'E';
const coutriesStartsWIthE = countries.filter((country)=>country.startsWith('E'))
console.log(coutriesStartsWIthE)

//15. Use filter to filter out only prices with values.
const priceWIthValues = products.filter((product)=> product.price>0)
console.log(priceWIthValues)


// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const array =['arrat','dal','fish','meat',12,45]
const getStringLists  = array.filter((item)=> typeof item === 'string')
console.log(getStringLists)

//17. Use reduce to sum all the numbers in the numbers array.
const reduceToSum = numbers.reduce((acc,cur)=> acc+cur,0)
console.log(reduceToSum)

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
//console.log(countries)
const reduceConcat = countries.reduce((acc,cur)=>{
    acc= countries.splice(0,countries.length-1)
    cur= countries[countries.length-1]
    return `${acc} and ${cur} are north European countries`
})
console.log(reduceConcat)

// 19.Explain the difference between some and every
//some: It checks whether some f the elements are similar in one aspect
const bools = [true, true, true, true]
// const areSomeTrue = bools.some((b)=> b===true)
// console.log(areSomeTrue)

//every : It checks if all the elements are similar in one aspect
// const areEveryTrue = bools.every((b)=> b=== true)
// console.log(areEveryTrue)


// 20.Use some to check if some names' length greater than seven in names array
// const checkSomeNameLength = names.some((name)=> name.length>7)
// console.log(checkSomeNameLength)

//21. Use every to check if all the countries contain the word land
// const checkEveryCountryLand = countries.every((country)=> {
//     country.toLowerCase().includes('land')
//     console.log(country)
// })
// console.log(checkEveryCountryLand)

//22. Explain the difference between find and findIndex.
//find: It returns the first element which satisfies the condition
 const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age)=> age<20)
 console.log(age)

//findIndex: It returns the position of first element which satisfies the condition
// const ageLessThan = ages.findIndex((age)=> age<20)
// console.log(ageLessThan)

//23. Use find to find the first country containing only six letters in the countries array
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

 const findCountr = countries1.find((country)=> country.length===6)
 console.log(findCountr)

//24. Use findIndex to find the position of the first country containing only six letters in the countries array
const findPosition = countries1.findIndex((country)=> country.length===6)
console.log(findPosition)

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries1.findIndex((country)=>{
    return country.includes('Norway')
})
console.log(findNorway)

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const posOfRussia = countries1.findIndex((country)=>{
    return country.includes('Russia')
})
console.log(posOfRussia)


