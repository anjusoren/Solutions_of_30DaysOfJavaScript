//Exercises: Level 3

// 1. Copy countries array(Avoid mutation)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const newCoun = countries.concat()
console.log(newCoun)

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const newSort = newCoun.sort()
console.log(newSort)

// 3. Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack =['MongoDb','Express','REact','Node']

  const sortWebTechs = webTechs.sort()
  const sortMernStack = mernStack.sort()

  console.log(sortWebTechs)
  console.log(sortMernStack)

// 4.Extract all the countries contain the word 'land' from the countries array and print it as array
// for(const country of countries){
//     if(country.includes('land')){
//         console.log(country)
//     }
// }

//5. Find the country containing the hightest number of characters in the countries array
let maxLen = countries[0].length
let ans = countries[0]
for(let i=0;i<countries.length;i++){
    let maxi = countries[i].length
    if(maxi > maxLen)
    {
        maxLen = maxi
        ans = countries[i]
    }
}
console.log("country with highest number of character: ",ans)


// 6.Extract all the countries contain the word 'land' from the countries array and print it as array
// const landArr = []
// for(const country of countries){
//     if(country.includes('land')){
//         landArr.push(country)
//     }
// }
// console.log(landArr)

//7. Extract all the countries containing only four characters from the countries array and print it as array
// const landArr = []
// for(const country of countries){
//     if(country.length === 4){
//         landArr.push(country)
//     }
// }
// console.log(landArr)


// 8.Extract all the countries containing two or more words from the countries array and print it as array
//unsolved

//9. Reverse the countries array and capitalize each country and stored it as an array

const array = []
for(let i=countries.length-1;i>=0;i--){
    array.push(countries[i])
}

console.log(array)