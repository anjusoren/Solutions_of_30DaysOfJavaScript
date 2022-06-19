//Exercise: Level 3

// 1.The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 1.Sort the array and find the min and max age
const sortAges = ages.sort()
const minAge = ages[0]
console.log(minAge)
const maxAge = ages[ages.length -1]
console.log(maxAge)
console.log(ages)

// 2.Find the median age(one middle item or two middle items divided by two)
const medianAge = ages.length/2
console.log("Median-Age", ages[medianAge])

// 3.Find the average age(all items divided by number of items)
let sum=0
for(let i=0;i<ages.length;i++){
    sum= sum+ages[i]
}
let averageAge = sum/ages.length
console.log("Average-Age", averageAge)


//4. Find the range of the ages(max minus min)
console.log(`Range of Ages: ${minAge} - ${maxAge}`)


// 5.Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
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

const sliceFirstTen = countries.slice(0,10)
console.log(sliceFirstTen)

//2. Find the middle country(ies) in the countries array
const midNum = Math.floor(countries.length/2)
console.log(midNum)
console.log(countries[midNum])

//3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries.length)
const half = Math.floor(countries.length/2)


if((countries.length)%2 === 0){
    console.log("Here I am")
    const firstHalf =countries.slice(0,(half))
    console.log(firstHalf)
    const secondHalf = countries.slice((half))
    console.log(secondHalf)
}else{
    console.log("Here")
    const firstHalf =countries.slice(0,(half+1))
    console.log(firstHalf)
    const secondHalf =countries.slice((half+1))
    console.log(secondHalf)
}