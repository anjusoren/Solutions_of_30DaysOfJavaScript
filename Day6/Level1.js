//Exercises : Level1.js

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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0;i<=10;i++){
//     console.log(i)
// }

//let i=0
// while(i<11){
//     console.log(i)
//     i++
// }

// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<11)

// 2.Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let x=10;x>=0;x--){
//     console.log(x)
// }

// let x=10
// while(x>=0){
// console.log(x)
// x--
// }

// let x=10
// do{
//     console.log(x)
//     x--
// }while(x>=0)


// 3.Iterate 0 to n using for loop
// let n =7;
// for(let i=0;i<=n;i++){
//     console.log(i)
// }

// 4.Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######

*/
// let n=5
// let string=""
// for(let i=1;i<=n;i++){
    
//     for(let j=0;j<i;j++){
//         string += "#"
//     }
//     string +="\n"
// }
// console.log(string)

/*5.Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100


for(let i=0;i<11;i++){
    console.log(`${i} X ${i} = ${i*i}`)
}
*/

/*6.Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */

// console.log(`i  i^2  i^3`)
//  for(let i=0;i<11;i++){
//     console.log(`${i}   ${i*i}  ${i*i*i}`)
//  }

//7. Use for loop to iterate from 0 to 100 and print only even numbers
// for(let a=2;a<=100;a++){
//     if(a%2===0){
//         console.log(a)
//     }
// }

//8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let b=0;b<=100;b++){
//     if(b%2!==0){
//         console.log(b)
//     }
// }

//9. Use for loop to iterate from 0 to 100 and print only prime numbers
//unsolved 

// 10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
//  let sum =0;
//  for(let i=1;i<=100;i++){
//      sum = sum+i
//  }
//  console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)


//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumEven =0;
for(let a=0;a<=100;a++){
    if(a%2===0){
        sumEven +=a;
    }
}
let sumOdd =0;
for(let b=0;b<=100;b++){
    if(b%2!==0){
        sumOdd +=b;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)

// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
const array =[sumEven,sumOdd]
console.log(array)

//13. Develop a small script which generate array of 5 random numbers

// let array1=[]
// for(let c=0;c<5;c++){
//     array1[c]=Math.floor(Math.random()*10)
// }

// console.log(array1)

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr=[]
while(arr.length<5){
    let num = Math.floor(Math.random()*100)+1
    if(arr.indexOf(num) === -1)
        arr.push(num)
}
console.log(arr)

// Develop a small script which generate a six characters random id:
// 5j2khz

const result = Math.random().toString(36).substring(2,8)
console.log(result)