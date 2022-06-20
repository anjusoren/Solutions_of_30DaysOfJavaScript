//Exercises : Level 2

/*1.Develop a small script which generate any number of characters random id:
  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
 */

// const n = Math.floor(Math.random()*100)+1
// console.log(n)
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let res =''
// for(let i=0;i<n;i++){
//     res += characters.charAt(Math.floor(Math.random()*n))
// }
// console.log(res)

/*2.Write a script which generates a random hexadecimal number.
'#ee33df' */

// const hexColor = Math.random().toString(36).substring(2,8)
// console.log(`#${hexColor}`)

/*3.Write a script which generates a random rgb color number.
rgb(240,180,80) */
/*
let arr=[]
while(arr.length <3){
    let num = Math.floor(Math.random()*255)
    arr.push(num)
    
}
const rgbCol = arr.join(',')
console.log(`rgb(${rgbCol})`)*/

/*4.Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
 */

//const arr1 =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const newArr =[]
// const res =newArr.concat(arr1)
// console.log(res)

/*5.Using the above countries array, create an array for countries length'.
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5] */

// const counLength=[]
// for(const arr of arr1){
//     counLength.push(arr.length)
// }
// console.log(counLength)

/*6.Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

//const arr1 =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// const newCountries =[]
// const newArr =[]
// let newp
// for(const count of arr1){
//     newArr.push(count,count.slice(0,3).toUpperCase(),count.length)
    
// }
// console.log(newArr)
// let vec = []
// for(let i=0;i<newArr.length;i++){
//     vec.push(newArr.splice(0,3))
// }
// console.log(vec)

/*7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
['Finland','Ireland', 'Iceland']
 */
 const arr1 =["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// const newArr = []
// for(const country of arr1){
//  if(country.includes('LAND')){
//     newArr.push(country)
//  }
//  else{
//     console.log( 'All these countries are without land')
//  }
// }

// console.log(newArr)

/*8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia'] */

// const newArr = []
// for(const country of arr1){
//  if(country.includes('IA')){
//      newArr.push(country)
//   }
//   else{
//      console.log( 'All these countries are without land')
//   }
//  }

//  console.log(newArr)

/*9.Using the above countries array, find the country containing the biggest number of characters.

Ethiopia */

// let maxLen = arr1[0].length
// let ans = arr1[0]
//     for(let i=0;i<arr1.length;i++){
//     let maxi =arr1[i].length
//     if(maxi>maxLen){
//         maxLen = maxi
//         ans = arr1[i]
//     }
//     }
// console.log(ans)

/*10.Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya'] */
// const newArr =[]
// for(const country of arr1){
//     if(country.length === 5){
//         newArr.push(country)
//     }
// }
// console.log(newArr)

//11.Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

//   let maxLen = webTechs[0].length
//   let ans = webTechs[0]
//   for(let i=0;i<webTechs.length;i++){
//     let maxi=webTechs[i].length
//     if(maxi > maxLen){
//         maxLen = maxi
//         ans = webTechs[i]
//     }
//   }
//   console.log(ans)


/*12.Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
 */

// const newp =[]
// const newArr =[]

// for(const web of webTechs){
//     newp.push([`${web}`,web.length])
// }

// console.log(newp)

/*13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack */
// const mernStach =['MongoDb','Express','REact','Node']
// const newp =[]
// for(const star of mernStach){
//     newp.push(star.charAt(0))
// }
// console.log(newp)
// const newRes = newp.join('')
// console.log(newRes)

/*14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items. */
const webT = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// for(const we of webT){
//     console.log(we)
// }
// for(let i=0;i<webT.length;i++){
//     console.log(webT)
// }

/*15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
 */

// const fruit =  ['banana', 'orange', 'mango', 'lemon']
// for(let i=fruit.length-1;i>=0;i--){
//     console.log(fruit[i])
// }

//16.Print all the elements of array as shown below.

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']  ]

const arrA = fullStack.flat(Infinity)
console.log(arrA)