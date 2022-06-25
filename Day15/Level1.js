//Exercises : Level 1

//1.Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name,age,color,legs,animal){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.animal = animal
    }
    getFullInfo(){
        const info = this.name + ' is a '+this.animal+' and is '+this.age + ' years old.'
        return info
    }
}
const animal1 = new Animal('Haru',2,'black',4,'dog')
console.log(animal1.getFullInfo())

//2.Create a Dog and Cat child class from the Animal Class.

const Dog = new Animal('Vivi', 4,'white',4,'dog')
console.log(Dog.getFullInfo())

const Cat = new Animal('Nini',1,'black',4,'cat')
console.log(Cat.getFullInfo())