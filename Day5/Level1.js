//Exercise:Level 1
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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

//  1. Declare an empty array;
  const arr = [];

//  2. Declare an array with more than 5 number of elements
const namesOfCities =['Kolkata','Ranchi','Patna','Jaipur','Kota']

// 3.  Find the length of your array
//console.log(arr.length)   //0
//console.log(namesOfCities.length) //5

//  4. Get the first item, the middle item and the last item of the array
// let mid = Math.floor(namesOfCities.length / 2)
// let last = namesOfCities.length -1
// console.log(namesOfCities[0],namesOfCities[mid], namesOfCities[last])

//  5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// const mixedDataTypes =["Album1", 1980, {instrument1:'drums',instrument2:'flute'},{producer:'A.K.Moti',director:'L.L.Road'},'onTheMarket','GetA Grip',"AlbumSong"]
// console.log(mixedDataTypes.length)

//  6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
 const itCompanies=[ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM' ,'Oracle', 'Amazon' ]
// const newGroup = itCompanies.slice(0,-1)
// console.log(newGroup)
// const split1= itCompanies.pop()
// console.log(split1)
// const sentence =`${newGroup} and ${split1} are big IT companies.`
// console.log(sentence)

//  7. Print the array using console.log()
// console.log(itCompanies)

// 8.  Print the number of companies in the array
// console.log(itCompanies.length)

//  9. Print the first company, middle and last company
// let mid1 = itCompanies.length/2
// let last1 = itCompanies.length -1
// console.log(itCompanies)
// console.log(itCompanies[0],itCompanies[mid1], itCompanies[last1])

//  10. Print out each company
// console.log(itCompanies[0])
// console.log(itCompanies[1])
// console.log(itCompanies[2])
// console.log(itCompanies[3])
// console.log(itCompanies[4])
// console.log(itCompanies[5])

//  11. Change each company name to uppercase one by one and print them out
// console.log(itCompanies[0].toUpperCase())
// console.log(itCompanies[1].toUpperCase())
// console.log(itCompanies[2].toUpperCase())
// console.log(itCompanies[3].toUpperCase())
// console.log(itCompanies[4].toUpperCase())
// console.log(itCompanies[5].toUpperCase())

// 12.  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const sentence1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle',' and',' Amazon',' are',' big IT companies']
// console.log(`${sentence1}`)

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// console.log(itCompanies.includes('Meta'))
// console.log(itCompanies.includes('tata'))
// console.log(itCompanies.includes('Google'))

// 14.  Filter out companies which have more than one 'o' without the filter method
// for(company of itCompanies){
//     if(company.includes('oo')){
//         console.log(`${company}`)  
//     }
// }

//  15. Sort the array using sort() method
// const sortedArray = itCompanies.sort()
// console.log(sortedArray)

//  16. Reverse the array using reverse() method
// const revArray = itCompanies.reverse()
// console.log(revArray)

//  17. Slice out the first 3 companies from the array
//console.log(itCompanies.splice(0,3))

//  18. Slice out the last 3 companies from the array
//console.log(itCompanies.splice(-3))

//  19. Slice out the middle IT company or companies from the array
const mid2 = Math.floor(itCompanies.length/2)
console.log(itCompanies[mid2])

// 20.  Remove the first IT company from the array
console.log(itCompanies)
// const removeFirst = itCompanies.shift()
// console.log(itCompanies)

//  21. Remove the middle IT company or companies from the array
  // let midOut = itCompanies.splice(mid2,mid2)
  // console.log(midOut)
  // console.log(itCompanies)           //unsolved

// 22. Remove the last IT company from the array
const removeLast = itCompanies.pop()
console.log(removeLast)
console.log(itCompanies)

// 23.  Remove all IT companies
const removeAll = itCompanies.splice()
console.log(removeAll)