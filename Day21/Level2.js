// Exercise: Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//changing color, background, border, font-size, font-family

// const paraAll = document.querySelectorAll('p')
// paraAll.forEach((para,i) =>{
//     if(i%2 ===0){
//         para.style.backgroundColor ='red';
//         para.style.color = 'white';
//         para.style.fontSize = '20px';
//         para.style.fontFamily ="Arial";
//     }else{
//         para.backgroundColor='white';
//         para.style.color = 'red';
//         para.style.fontSize = '40px';
//         para.style.fontFamily ="Monospace";
//     }
// })

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// const allPara =document.querySelectorAll('p')

// allPara.forEach((para,i)=>{
//     if(i%2 === 0){
//         para.style.backgroundColor = "red";
//     }
//     else{
//         para.style.backgroundColor ="green";
//     }
// })


// 3. Set text content, id and class to each paragraph
const allPara = document.querySelectorAll('p')

allPara.forEach((para) =>{
    //para.textContent = 'paragraph text content'
    //para.className="para__class"
    //para.id = "para"
    console.log(para)
})