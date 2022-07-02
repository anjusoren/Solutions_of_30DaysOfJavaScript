
let h2 = document.querySelector('h2')
//press any keyboard key
let divh1 = document.getElementById('changing__space') 
 
document.body.addEventListener('keypress',e =>{
    keyNum = e.keyCode
    keyVal = String.fromCharCode(e.keyCode)
    //console.log(keyNum)
    //console.log(keyVal)
    if(keyNum === 13)
    {
        keyVal = 'Enter'
    }
    else if(keyNum === 32){
        keyVal = "Space"
    }
    h2.textContent =keyNum.toString()
    h2.style.color ="green"
    divh1.textContent = `You pressed ${keyVal}`
    //divh1.style.color ="green"
    
})