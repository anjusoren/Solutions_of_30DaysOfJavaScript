//Exercises : Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1.Find the person who has many skills in the users object.
/*
let maxSkilledPerson 
let max =0

for(const user in users){
    if(users[user].skills.length > max){
        max = users[user].skills.length
        maxSkilledPerson = user
    }
}
console.log(maxSkilledPerson) */

//2.Count logged in users, count users having greater than equal to 50 points from the following object.
/*
let resUser ;
let newArr =[]
for(const user in users){
    
    if((users[user].isLoggedIn === true) && (users[user].points>=50)){
        newArr.push(user)
        //resUser=user
    }
}

console.log(newArr)
*/

//3.Find people who are MERN stack developer from the users object
/*let newArray =[]

for(const user in users){
   
    if(users[user].skills.includes('MongoDB','Express','React','Node')){
        newArray.push(user)
    }
}
console.log(newArray)*/

//4.Set your name in the users object without modifying the original users object
/*
const newUserObj = Object.assign({},users)
newUserObj.Anju ={email:'ana@gmail.com',skills:['HTML','CSS','Javascript','React','Node']}
console.log(newUserObj)
*/

//5. Get all keys or properties of users object

const keys = Object.keys(users)
console.log(keys)

// 6.Get all the values of users object

const values = Object.values(users)
console.log(values)

