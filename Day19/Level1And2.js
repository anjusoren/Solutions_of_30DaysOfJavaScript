// Exercises: Level 1

//1. Create a closure which has one inner function
/*
function outerFunction(){
    let count = 4
    function innerFunction(){
            count--
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
*/

// Exercises: Level 2

// 1. Create a closure which has three inner functions
function outerFunction(){
    let count = 5;
    function plusOne(){
        count++
        return count
    }

    function minusOne(){
        count--
        return count
    }

    function whileLoop(){
        while(count<=10){
            count++
            console.log("hello")
            
        }
        
    }
    return {
        plusOne: plusOne(),
        minusOne :minusOne(),
       whileLoop : whileLoop()
    }
}
const innerFunc = outerFunction()
console.log(innerFunc.plusOne)
console.log(innerFunc.minusOne)
console.log(innerFunc.whileLoop)