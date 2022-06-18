//Day3: Level 1

//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName="Anju"
let lastName="Soren"
let country="India"
let city="Ranchi"
let age=25
let isMarried=false
let year=2022

//console.log(typeof firstName,typeof lastName,typeof country, typeof city, typeof age, typeof isMarried, typeof year)

//2. Check if type of '10' is equal to 10
let num1='10'
let num2=10
//console.log(typeof num1 === typeof num2) //false

//3.Check if parseInt('9.8') is equal to 10
let num3=parseInt(9.8)
let num4=10
// console.log(num3)     //9
// console.log(num3===num4)     //false

/*4.Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/

let num5=7;
let num6=parseInt(7.3)
let bee="hive"
let bee1='Hive'
let disk=true
let disk1='true'
let disk2= false
// console.log(num5===num6)    //true
// console.log(bee >= bee1)    //true
// console.log(typeof bee === typeof bee1)     //true
// console.log(bee1===bee)     //false
// console.log(disk1===disk)   //false
// console.log(disk < disk2)   //false


/*5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3       //true
4 >= 3      //true
4 < 3       //false
4 <= 3      //false
4 == 4      //true
4 === 4     //true
4 != 4      //false
4 !== 4     //false 
4 != '4'    //true   
4 == '4'    //false
4 === '4'   //false
Find the length of python and jargon and make a falsy comparison statement. */

let word1='python'
let word2='jargon'
// console.log(word1.length)
// console.log(word2.length)
// console.log(word1===word2)      //false

/*6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12    //true
4 > 3 && 10 > 12    //false
4 > 3 || 10 < 12    //true
4 > 3 || 10 > 12    //true
!(4 > 3)            //false
!(4 < 3)            //true
!(false)            //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4')        //true
There is no 'on' in both dragon and python      //false*/

//7. Use the Date object to do the following activities
//1.What is the year today?
const now = new Date()
console.log(now.getFullYear())

// What is the month today as a number?
console.log(now.getMonth())

// What is the date today?
console.log(now.getDate())

// What is the day today as a number?
console.log(now.getDay())

// What is the hours now?
console.log(now.getHours())

// What is the minutes now?
console.log(now.getMinutes())

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())