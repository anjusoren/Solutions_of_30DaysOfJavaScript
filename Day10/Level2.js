//Exercises: Level 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// 1. Find a union b
// let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
// let C = new Set(c)
// console.log(C)


// 2. Find a intersection b
// let c= a.filter((num )=> B.has(num))
// let C = new Set(c)
// console.log(C)

// 3. Find a with b
let c = a.filter((num) => !B.has(num))
let C = new Set(c)
console.log(C)
