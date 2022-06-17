//Exercise : Level1
//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge="30 Days of JavaScript"

//2. Print the string on the browser console using console.log()
console.log(challenge)

//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//4.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

//6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,4))

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3))

//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))

//9.Split the string into an array using split() method
console.log(challenge.split(""))

//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "))

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(","))

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
//console.log(challenge.replace("JavaScript","Python"))

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim())

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("3"))

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("t"))

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let word1="30 Days of"
let word2=" JavaScript"

console.log(word1.concat(word2))

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))