//Exercises: level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


//1.create an empty set
// const newSkill = new Set()
// console.log(newSkill) //Set(0) {} --> Empty set

// 2.Create a set containing 0 to 10 using loop
const newNumberSet = new Set()
let count =0
while(count<11){
    newNumberSet.add(count)
    count++
}
//console.log(newNumberSet)

// 3. Remove an element from a set
const removeElement = newNumberSet.delete(5)
console.log(removeElement)
console.log(newNumberSet)

// 4.Clear a set
newNumberSet.clear()
console.log(newNumberSet)

//5. Create a set of 5 string elements from array
const array1 = ['book','pen','pencil','eraser','board']
const stringSet = new Set()
for(const str of array1){
    stringSet.add(str)
}
console.log(stringSet)

// 6.Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway']

const countriesMap = new Map()
for(const country of countries){
    countriesMap.set(country,country.length)
}
console.log(countriesMap)