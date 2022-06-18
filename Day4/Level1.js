//Exercises: Level 1
/*1.Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive.*/

// let age = prompt("Enter your age: ")
// let waitYrs = 18 - age;
// if(age >18){
//     prompt("You are old enough to drive.")
// }else
//{
//     prompt(`You are left with ${waitYrs} years to drive. `)
// }


/*2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
Enter your age: 30
You are 5 years older than me.*/

// let myAge=25
// let yourAge = prompt("Enter your age: ")
// let diff = myAge-yourAge
// let diff1 = yourAge-myAge
// if(myAge > yourAge){
//     prompt(`You are ${diff} years younger than me.`)
// }else{
 //   prompt(`You are ${diff1} years older than me`)
//}


/*3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3 */

// let a=4
// let b=3

// let max;
// if(a>b){
//     console.log("a is greater than b")
// }
// else{
//     console.log("b is greater than a")
// }

// let max1 = a>b?console.log("a is greater than b"):console.log("b is greater than a")


/*4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number
Enter a number: 9
9 is is an odd number.*/

// let num = prompt("Enter the number")
// even = num%2===0
// if(!even){
//     prompt(`${num} is odd.`)
// }else{
//     prompt(`${num} is even.`)
// }
