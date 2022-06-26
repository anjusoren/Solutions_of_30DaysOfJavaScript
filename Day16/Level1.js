//Exercises : Level 1

//1. Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const arrToJSON= JSON.stringify(skills)
console.log(arrToJSON)

//2.Stringify the age variable
let age = 250;
const ageStringify = JSON.stringify(age)
console.log(ageStringify)

//3.Stringify the isMarried variable
let isMarried = true
const isMarriedStringify = JSON.stringify(isMarried)
console.log(isMarriedStringify)

//4.Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

const studentStringify = JSON.stringify(student)
console.log(studentStringify)