//Exercises : Level 2

//1.Override the method you create in Animal class
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
    getLegs(){
        const leg = this.name + " has "+ this.legs+"."
    }
}

class Cat extends Animal{
constructor(name,age,color,animal,eyeColor,likes){
    super(name,age,color,animal)
    this.eyeColor = eyeColor
    this.likes = likes
    this.animal = animal
}
saySomething(){
    console.log("Check I am working fine")
}
getFullInfo(){

    let info = this.name +' is a '+ this.animal+'. He has '+this.eyeColor+' eyes.'+ 'He likes to eat '+this.likes+'.'
    return info
}
}

const animal1 = new Cat('Coco',4,'black','cat','hazel','fish')
console.log(animal1.getFullInfo())
console.log(animal1.color)