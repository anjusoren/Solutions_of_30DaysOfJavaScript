let body = document.querySelector("body")
let div = document.querySelector("div")

let numbers 
for(let i=0; i<=100;i++){
numbers = document.createElement('div')
numbers.className = 'num'
 numbers.style.fontSize = '45px'
// numbers.style.background ='yellow'
numbers.textContent = i
numbers.style.width = '150px'
numbers.style.height = '150px'
numbers.style.margin = '8px'
div.appendChild(numbers)

if(i%2===0){
    numbers.style.background ="green"
}
else if(i%2 !==0){
   
    numbers.style.background = "yellow"
}

}
