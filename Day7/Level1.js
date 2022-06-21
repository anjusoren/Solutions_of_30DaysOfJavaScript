// Exercises: Level 1

//1.Declare a function fullName and it print out your full name.
/*
function fullName(){
    let name = "Anju Soren"
    console.log(name)
}
fullName()
*/

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
/*
function fullName(firstName, lastName)
{
    let fullname = firstName+" "+lastName
    console.log(fullname)
}
fullName("Anju", "Soren")
*/

//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
/*
function addNumbers(a,b){
 let sum = a+b
 console.log(sum)
}
addNumbers(10,20)
*/

//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
/*
function areaOfRectangle(length, width){
    let area = length * width
    console.log(area)
}
areaOfRectangle(10,20)
*/

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
/*
function perimeterOfRectangle(length, width){
    let perimeter = 2*(length + width)
    console.log(perimeter)
}
perimeterOfRectangle(10,20)
*/

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
/*
function volumeOfRectPrism(length, width, height){
    let volume = length*width*height
    console.log(volume)
}
volumeOfRectPrism(10,20,30)
*/

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
/*
const areaOfCircle = (r) =>{
    let area= 3.14*r*r
    console.log(area)
}
areaOfCircle(10)
*/

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
/*
const circumOfCircle = (r) =>{
    let circumference = 2*3.14*r
    console.log(circumference)

}
circumOfCircle(4)
*/

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
/*
const densityOfItem = (mass, volume) =>{
    let density = mass/volume
    console.log(density)
}
densityOfItem(10,19)
*/

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
/*
const speedOfObject =(totalDistance, totalTime) =>{
    let speed = totalDistance/totalTime
    console.log(speed)
}
speedOfObject(100,10)
*/

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
/*
const weightOfObject = (mass) =>{
    const gravity = 9.8
    let weight = mass*gravity
    console.log(weight)
}
weightOfObject(30)
*/

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
/*
const convertCelsiusToFahrenheit = (celciusDeg) => {
    let fahrenheitDeg = celciusDeg * (9/5)+32
    console.log(fahrenheitDeg)
}
convertCelsiusToFahrenheit(32)
*/

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
/*The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
/*
const bodyMassIndex = (weightinKg,heightinM) =>{
    let bmi = weightinKg /(heightinM * heightinM)
    console.log(bmi)
    if(bmi < 18.5){
        console.log('Underweight')
    }
    else if(bmi >= 18.5 && bmi<=24.9){
        console.log("Normal weight")
    }
    else if(bmi >=25 && bmi<=29.9){
        console.log('Overweight')
    }
    else if(bmi>=30){
        console.log('Obese')
    }
}
bodyMassIndex(63,1.5)
*/
//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

/*
function checkSeason(month){
    let monthCheck = month.toLowerCase()
    switch(monthCheck){
            case 'december':
             case 'january':
             case 'february' :
                 console.log("Winter")
                break
            case 'september':
            case 'october':
             case 'november':
                 console.log("Autumn")
                 break
             case 'march':
             case 'april':
             case 'may':
                 console.log("Spring")
                 break
             case 'june':
             case 'july':
             case 'august':
                 console.log("Summer")
                 break
             default:
                prompt("Enter the name of the month correctly.")
         }
}
checkSeason('january')
checkSeason('jaNuarY')
*/

/* 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/

function findTheLargest(a,b,c){
    let max = (a>b)?(a>c?a:c):(b>c?b:c)
    console.log(max)
}
findTheLargest(0,10,5)
findTheLargest(0,-10,-2)