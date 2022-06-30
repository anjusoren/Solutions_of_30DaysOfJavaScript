//Exercises : Level 1

//1.Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// const firstPara = document.querySelector('p')
// console.log(firstPara)

//2.Get each of the the paragraph using document.querySelector('#id') and by their id
// const paraOne = document.querySelector('#first__para')
// const paraTwo = document.querySelector('#second__para')
// const paraThree = document.querySelector('#third__para')
// const paraFour = document.querySelector('#fourth__para')

// console.log(paraOne)
// console.log(paraTwo)
// console.log(paraThree)
// console.log(paraFour)

//3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// const paragraph = document.querySelectorAll('p')

// paragraph.forEach((para)=>{
//     console.log(para)
// })


//4.Loop through the nodeList and get the text content of each paragraph
// const allPara = document.querySelectorAll('p')

// allPara.forEach((para)=>{
//     console.log(para.textContent)
// })

//5.Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// const para = document.querySelectorAll('p')
// para[3].textContent= "One day Quatum computers and teleporting will be a reality."

//6.Set id and class attribute for all the paragraphs using different attribute setting methods
const allParas = document.querySelectorAll('p')
allParas[0].className = 'firstPara'
allParas[1].className = 'secondPara'
allParas[2].className = 'thirdPara'
allParas[3].className = 'fourthPara'

allParas.forEach((p)=>{
    console.log(p)
})