//Exercises: Level 1

//1.Create an empty object called dog
const dog ={}

//2.Print the the dog object on the console
//console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog1 ={
    name:'Husky',
    color:'white',
    legs:4,
    age:3,
    bark : function(){
        return `woof woof`
    }
}

//4. Get name, legs, color, age and bark value from the dog object
// console.log(dog1.name)
// console.log(dog1.legs)
// console.log(dog1.age)
// console.log(dog1.bark())

//5.Set new properties the dog object: breed, getDogInfo
dog1.breed ='German Mixed'

dog1.getDogInfo = function(){
    console.log(`${this.name} is a ${this.breed} dog. He is ${this.age} years old`)
}

dog1.getDogInfo()

console.log(dog1)