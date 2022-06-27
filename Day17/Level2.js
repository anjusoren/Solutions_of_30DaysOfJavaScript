//Exercises : Level 2

//1.Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student ={
    firstName : 'Kirti',
    lastName : 'M.',
    age : 24,
    skills : ['HTML','CSS','JavaScript','React'],
    country : 'India'
}

const studentText = JSON.stringify(student)
localStorage.setItem('student',studentText)
console.log(localStorage)