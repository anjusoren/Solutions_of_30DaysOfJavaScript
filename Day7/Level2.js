//Exercises: Level 2

//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
//unsolved

/*2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
 */
//unsolved

//3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
/*
function printArray(array){
    let items = array.flat()
    return items
}
const res = printArray(['anju','bobo',[3,4,45]])
console.log(res)
*/

/*4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08*/
/*
function showDateTime () {
    let now = new Date()
    let date = now.getDate().toString().padStart(2, "0")
    let month = now.getMonth().toString().padStart(2,'0')
    let year = now.getFullYear().toString().padStart(2,'0')
    let hour1 = now.getHours().toString().padStart(2,'0')
    let minutes1 = now.getMinutes().toString().padStart(2,'0')
    console.log(`${date}/${month}/${year}   ${hour1}:${minutes1}`)
}

showDateTime()
*/

/*5.Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4*/
/*
function swapValues(a,b){
    let temp;
    temp=a;
    a=b;
    b=temp;
    console.log(`a=>${a}, b=>${b}`)
}
swapValues(3,4)
swapValues(4,5)
*/


/*6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A'] */
/*
function reverseArray(array){
    let newArray=[]
    for(let i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray
}
let a = reverseArray([2,3,1,89,90])
console.log(a)
*/

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

/*
function capitalizeArray(array){
    let pCaps =[]
    for(let item of array){
        pCaps.push(item[0].toUpperCase()+item.slice(1))
    }
    return pCaps
}
let capiArr = capitalizeArray(['frog','sweetpie','home','willow'])
console.log(capiArr)
*/

//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

/*
function addItem(array,arrSubs){
    let newArray = array.concat(...arrSubs)
    return newArray
}
let newp = addItem(['apple','orange','peach','pear'],['tea','coffee','milk'])
console.log(newp)
*/

//9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


function removeItem(array,n){
    
    let newArr = []
    for(let i=0;i<array.length;i++){
        if(i !== n ){
            newArr.push(array[i])
        }
    }
    return newArr
}

let newp = removeItem(['coffee','milk','tea','fries','greenhouse'],1)
console.log(newp)


//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
/*
function sumOfNumbers(num){
    let sum =0
    for(let i=0;i<=num;i++){
        sum = sum+i
    }
    return sum
}

let res = sumOfNumbers(5)
console.log(res)
*/

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
/*
function sumOfOdds(num){
    let oddSum = 0
    for(let i=0;i<=num;i++){
        if(i%2 !== 0){
            oddSum += i
        }
    }
    return oddSum
}

let res= sumOfOdds(10)
console.log(res)
*/

//12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
/*
function sumOfEven(num){
    let evenSum = 0
    for(let i=0;i<=num;i++){
        if(i%2 === 0){
            evenSum += i
        }
    }
    return evenSum
}

let res= sumOfEven(10)
console.log(res)
*/

/*13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.*/
/*
function evensOdds(num){
    let oddA = []
    let evenA =[]
    for(let i=0;i<=num;i++){
        if(i%2 ===0){
            evenA.push(i)
        }else{
            oddA.push(i)
        }
    }
    console.log(`The number of odds are ${oddA.length}.`)
    console.log(`The number of evens are ${evenA.length}.`)
}
evensOdds(100)
*/

/*14.Write a function which takes any number of arguments and return the sum of the arguments
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10 */
/*
const findSum = (...args) =>{
    let sum=0
    for(const ele of args){
        sum += ele
    }
    return sum
}

let sumCall1 = findSum(1,2,3)
console.log(sumCall1)
let sumCall2 = findSum(2,3,4,5)
console.log(sumCall2)
*/

//15.Writ a function which generates a randomUserIp.
/*
function randomUserIp(){
    let arr =[]
    while(arr.length<4){
        let randNum = Math.floor(Math.random()*255) +1 
        if(arr.indexOf(randNum)=== -1)
            arr.push(randNum)
    }
    let ipIn = arr.join('.')
    //console.log(ipIn)
    console.log(`Random Ip: ${ipIn}`)
}
randomUserIp()
*/

//16. Write a function which generates a randomMacAddress
/*
function macAddressA(){
    let arr =[]
    while(arr.length <6){
        let randChar = Math.random().toString(36).substring(2,4)
        if(arr.indexOf(randChar) === -1)
        arr.push(randChar)
    }
    let macS = arr.join(':')
    console.log(macS)
}

macAddressA()
*/

/*17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
console.log(randomHexaNumberGenerator());
'#ee33df' */

/*
function randomHexaNumberGenerator(){
    let randomNumChar = Math.random().toString(36).substring(2,8)
    console.log(`#${randomNumChar}`)
}
randomHexaNumberGenerator()
*/

/*18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
console.log(userIdGenerator());
41XTDbE */
/*
function userIdGenerator(){
    let characterId = Math.random().toString(36).substring(2,9)
    console.log(characterId)
}

userIdGenerator()
*/