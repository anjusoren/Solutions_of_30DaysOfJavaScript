//Exercises: Level 2
/*1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100 */

// const base=prompt("Enter base:","enter number here")
// const height=prompt("Enter height:","enter number here")
// const area = prompt(base*height)


/*2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12*/

// const sideA = prompt("Enter side a:","enter number here")
// const sideB = prompt("Enter the side b:", "Enter the number here")
// const sideC= prompt("Enter the side c:","Enter the number here")
// const perimeter = prompt(parseInt(sideA)+parseInt(sideB)+parseInt(sideC))

/*3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */
// const length = prompt("Enter the length","Number here")
// const width = prompt("Enter the width:","Number here")
// const area = prompt(length*width)
// const perimeter = prompt(2*(parseInt(length)+parseInt(width)))

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const r = prompt("Enter the radius","Radius here")
// const Pi= 3.14
// const area= prompt("Radius: " + Pi*r*r)
// const perimeter = prompt("Perimeter: "+ 2*Pi*r)

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x = prompt("Enter the x: ","x here")
// let y = prompt("y-intercept of x: "+ (2*x -2))

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// let x1 = 2;
// let x2 = 6;
// let y1 = 2;
// let y2 = 10;
// const slopeM = (y2 - y1)/(x2 - x1)
// console.log("slope m: ",slopeM)

//7.Compare the slope of above two questions.
//unsolved

//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = prompt("enter the value of x:")
// let y = x*x + 6*x + 9
// let valueY = prompt("y : "+y) 
// //x = -3    y=0

/*
Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
 */

// let hours = prompt("Enter hours:")
// let ratePerHour = prompt("Enter rate per hour:")
// let WeeklyEarning  = prompt("Your weekly earning is "+ (hours * ratePerHour))

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
// function yourNameLen(name){
//     if(name.length >7){
//         return "Your Name is long"
//     }
//     return "Your Name is Short"
// }
// const nameIs = yourNameLen('godzilla')
// console.log(nameIs)

/*11.Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/

// function CheckLongerName(firstName,lastName)
// {
//     if(firstName.length >lastName.length ){
//         return `Your first name, ${firstName} is longer than your family name, ${lastName} `
//     }
//     return  `Your family name, ${lastName} is longer than your first name, ${firstName} `

// }

// let firstName =  'Asabeneh'               //"Godzilla"
// let lastName =   'Yetayeh'               //"FirebornDragon"
// const result = CheckLongerName(firstName,lastName);
// console.log(result)

/*12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.*/


// let myAge = 250
// let yourAge = 25
// let ageDiff = myAge - yourAge

// console.log(`I am ${ageDiff} years older than you.`) 

/*13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */

//const userBorn = prompt("Enter birth year: ")

// function messageForYou(userBorn){
//     //const userBorn = prompt("Enter birth year: ")
//     let today = new Date()
//     let age = today.getFullYear() - userBorn
//     let yearsOf = 18 - age
//     if(age >18){
        
//         return prompt(`You are ${age}.You are old enough to drive.`)
//     }
//     return prompt(`You are ${age}.You will be allowed to drive after ${yearsOf} years.`)
// }
// const userBorn = prompt("Enter birth year: ")
// const res = messageForYou(userBorn)
// console.log(res)


/*14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds. */

// const num = prompt("Enter number of years you live:")
// const numOfSecond = num * 12 * 365 * 30 *4 *24
// const now = new Date()
// const secondsYouLive = now.getSeconds() * numOfSecond;
// const result = prompt(`You lived ${secondsYouLive} seconds.`)


/*15.Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */

const now = new Date()
let year = now.getFullYear()
let month = now.getMonth() +1
let date = now.getDate()
let hour = now.getHours()
let minutes = now.getMinutes()
const form1 = `YYYY-MM-DD HH:mm  ${year}-${month}-${date}  ${hour}:${minutes}`
const form2 = `DD-MM-YYYY HH:mm  ${date}-${month}-${year}  ${hour}:${minutes}`
const form3 = `DD/MM/YYYY HH:mm  ${date}/${month}/${year}  ${hour}:${minutes}`
console.log(form1)
console.log(form2)
console.log(form3)