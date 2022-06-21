//Exercises: Level 3

/*1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
' */

/*
function userIdGenerator (takeNumOfChar,takeNumOfIds){
    let arr =[]
    while(arr.length < takeNumOfIds){
        let randomIds = Math.random().toString(36).substring(2,(parseInt(takeNumOfChar)+2))
       arr.push(randomIds)
        // if(arr.indexOf(randomIds) === -1){
        //     let randomIds = arr.join(' ')
        //     console.log(randomIds)
        // }
    }
    return arr
}
let takeNumOfChar = prompt("No.of Characters")
let takeNumOfIds = prompt("Number of Ids:")
console.log(userIdGenerator (takeNumOfChar,takeNumOfIds))
*/

/*2.Write a function name rgbColorGenerator and it generates rgb colors.
rgbColorGenerator()
rgb(125,244,255)*/

/*
function rgbColorGenerator()
{
    let arr =[]
    
    while(arr.length<3){
        let randomNum = Math.floor(Math.random()*255)
        if(arr.indexOf(randomNum) === -1)
        arr.push(randomNum)

        
    }
    console.log(`rgb(${arr})`)
}
rgbColorGenerator()
*/

//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
/*
const hexColors = Math.random().toString(36).toUpperCase().substring(2,8)
console.log(`#${hexColors}`)*/

//4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
/*
function arrayOfRgbColors(num){
    let newArr =[]
    while(newArr.length<num){
        let arr =[]
        while(arr.length<3){
            let randomNum = Math.floor(Math.random()*255)
            if(arr.indexOf(randomNum) === -1){
                arr.push(randomNum)
            }
        }
        newArr.push(`rgb(${arr})`)
    }
    console.log(newArr.join('\n'))

}

arrayOfRgbColors(3)
*/

//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
/*
function shuffleArray(arr1){
    let newAr = []
while(newAr.length<arr1.length){
    let randomN = Math.floor(Math.random()*(arr1.length))+0
    //if(newAr.indexOf(randomN)=== -1){
        newAr.push(arr1[randomN])
   // }
    console.log(randomN)
}

console.log(newAr)
}
shuffleArray([3,5,4,1])
*/

// 9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

/*function factorial(n){
   let answer = 1;
   if(n==0 || n==1){
    return answer
   }else{
    for(var i=n;i>=1;i--){
        answer = answer*i
    }
    return answer
   }
}
console.log(factorial(4))*/

// 10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not
/*
function isEmpty(arr){
    if(arr.length>0){
        console.log("array is not empty")
    }else{
        console.log("array is empty")
    }
}
isEmpty([])
isEmpty([5,6])
*/

//11. Call your function sum, it takes any number of arguments and it returns the sum.
/*function sumOfNum(...args){
    let sum =0;
    for(const ele of args){
        sum += ele
    }
    return sum
}
console.log(sumOfNum(1,2,3,4))
console.log(sumOfNum(1,1,1))
*/

//12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
/*
function sumOfArrayItems(array){
    let sum =0
    array.forEach(function (ar){
        if(typeof ar === 'number'){
            sum += ar
        }else{
            sum =`string`
        }
    })
    return sum;
}
console.log(sumOfArrayItems([1,2,3,4,5,6]))
console.log(sumOfArrayItems([1,2,3,4,5,6,10,10,10]))
*/

//13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
/*
function average(arAv){
        let sum=0
        let averageOf;
        arAv.forEach(function (ar){
            if(typeof ar === 'number'){
                sum += ar
                averageOf = sum/(arAv.length)
            }else{
                sum =`string`
            }
        }) 
        
        console.log(averageOf)
        
   
}
average([1,2,3,4,5,10])
average(['spider',3,3,4,'venom'])
*/

/*14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.*/
/*
function modifyFifth(arr1){
    //let fifth = arr1[4].toUpperCase()
    let newArr =[]
    for(let i=0;i<arr1.length;i++){
        if(i === 4){
            newArr.push(arr1[i].toUpperCase())
        }
        newArr.push(arr1[i])
    }
    let removeFifth = newArr.splice(5,1)
    console.log(newArr)
    //console.log(removeFifth)
    
}
modifyFifth(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])
*/
//15.Write a function called isPrime, which checks if a number is prime number.
/*
function isPrime(num){
    if(num%2 ===0){
        console.log("number is prime")
    }
    else{
        console.log("Number is not prime")
    }
}
isPrime(3)
isPrime(4)
*/
//16.Write a functions which checks if all items are unique in the array.
//unsolved


//17.Write a function which checks if all the items of the array are the same data type.
/*
function sameDataType(arr){
    let newArr =[]
    for(let i=0;i<arr.length;i++){
        newArr.push(typeof arr[i])
        
    }
    console.log(newArr)
    let itemtoComp = newArr[0]
    for(const item in newArr){
        //let itemtoComp = item[0]
        if(item === itemtoComp)
        {
            console.log("All are same")
        }
        else{
            console.log("Not same")
        }
        
    }
}
sameDataType(['a',45,'b','dfnjnj',89])
*/
/*18.JavaScript variable name does not support special 
characters or symbols except $ or _. Write a function 
isValidVariable which check if a variable is valid or 
invalid variable. */
/*
function checkValidVar(stringVar){
 let regEx = /[!@#%^&*()+\-=\[\]{};':"\\|,.<>\/?]*$/;

 if(stringVar.match(regEx)){
    console.log(`${stringVar} is invalid variable `)
 }
 else{
    console.log(`${stringVar} is valid variable `)
 }
   
}
checkValidVar('var2')
checkValidVar('var%#')
*/

/*19.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]*/
/*
function sevenRandomNumbers(){
    let newArr =[]
    while(newArr.length<7){
        let randNum = Math.floor(Math.random()*9)+1
        if(newArr.indexOf(randNum)=== -1){
            newArr.push(randNum)
        }
    }
    console.log(newArr)
}
sevenRandomNumbers()
*/

//20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
/*
function reverseCountries(arr1){
    let newp =[...arr1]
    let revArr=[]
    for(let i=newp.length-1;i>=0;i--){
        revArr.push(newp[i])
    }
    return revArr
}


const res =reverseCountries(["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"])
console.log(res)*/