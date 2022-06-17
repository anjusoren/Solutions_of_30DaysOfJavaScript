//Exercise:Level 2
//1. Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let statement= "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
//console.log(statement)

/*2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
let quote = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
//console.log(quote)

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num1=parseInt('10');
let num2=10;
// console.log(typeof(num1)) //string
// console.log(typeof(num2)) //number

// console.log(num1===num2)

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num3 = parseFloat(Math.ceil('9.8'))
let num4 = 10
// console.log(num3 === num4)

//5.Check if 'on' is found in both python and jargon
let str1 = 'python'
let str2 ='jargon'
// console.log(str1.includes('on'))
// console.log(str2.includes('on'))

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence1 = 'I hope this course is not full of jargon'
//console.log(sentence1.includes('jargon'))

//7.Generate a random number between 0 and 100 inclusively.
let random_number = Math.random()*100
//console.log(random_number)

//8.Generate a random number between 50 and 100 inclusively.
let random_number1 = ((Math.random()*(100-50))+50)
//console.log(random_number1)

//9.Generate a random number between 0 and 255 inclusively.
let random_number2 = Math.floor( Math.random()*255)
//console.log(random_number2)

//10.Access the 'JavaScript' string characters using a random number.
let str3 = 'JavaScript'
//console.log(str3[Math.floor(Math.random()*str3.length)])

/*11.Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
 */

// console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase ='You cannot end a sentence with because because because is a conjunction'
//console.log(phrase.lastIndexOf('because'))
console.log(phrase.substring(31,55))