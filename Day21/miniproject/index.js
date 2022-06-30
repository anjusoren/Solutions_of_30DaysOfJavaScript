const allLi = document.querySelectorAll('li')
allLi.forEach((li)=>{
    if(li.textContent.includes('Done')){
        li.style.backgroundColor ='green';
    }else if(li.textContent.includes('Ongoing')){
        li.style.backgroundColor = 'yellow';
    }else if(li.textContent.includes('Coming')){
        li.style.backgroundColor = 'red'
    }
})


function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6,0);
    return `#${randColor.toUpperCase()}`
}
//console.log(generateRandomColor())

setInterval(function(){
const selectNum = document.querySelector('span')
let numberForBAckground = generateRandomColor().toString()
selectNum.style.backgroundColor = numberForBAckground
},1000);


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const now = new Date()
const monthNow = month[now.getMonth()]
const dateToday = now.getDate()
const yearThis = now.getFullYear()
const hourNow = now.getHours()
const minNow = now.getMinutes()
const milliNow = now.getSeconds()
let reqTime = `${monthNow} ${dateToday},${yearThis}      ${hourNow}:${minNow}:${milliNow}`
const displayDate = document.querySelector('h3')
displayDate.textContent = reqTime.toString()
    

setInterval(function(){

    const selectH3 = document.querySelector('h3')
    let h3Background = generateRandomColor().toString()
    selectH3.style.backgroundColor = h3Background

},1000);