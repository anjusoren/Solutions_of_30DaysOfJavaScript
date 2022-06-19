//Exercise : Level 2


/*1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
*/
/* Refer to four file to solve this question index.html, countries.js, web_techs.js and main.js */


/*2.First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13 */

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// let withoutPunc = webTechs.join(' ')
// console.log(withoutPunc)
// let text=`I love teaching and empowering people. I teach ${withoutPunc}.`
// console.log(text)
// console.log(text.length)
// let words = text.split(" ")
// console.log(words.length)
// console.log(words)


/*3.In the following shopping cart add, remove, edit items

1.const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] */
// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk','Coffee','Tea','Honey']
const addAtBeg = shoppingCart.unshift('Meat')
console.log(shoppingCart)

// 2.add Sugar at the end of you shopping cart if it has not been already added
// const addAtEnd = shoppingCart.push('Sugar')
// console.log(shoppingCart)

// 3. remove 'Honey' if you are allergic to honey

const removeHoney = shoppingCart.pop()
console.log(shoppingCart)

//4. modify Tea to 'Green Tea'
shoppingCart[3]='Green Tea'
console.log(shoppingCart)

/*4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 */

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

const isThere = countries.includes('Ethiopia')

if(!isThere){
    countries.push('Ethiopia')
}else{
    console.log('ETHOPIA')
}

/*4.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.*/

const isSass = webTechs.includes('Sass')

if(!isSass){
    webTechs.push('Sass')
    console.log(webTechs)
}
else{
    console.log('Sass is a CSS preprocess')
}

/*6.Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
 */

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
