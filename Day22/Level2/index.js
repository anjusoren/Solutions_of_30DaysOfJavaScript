let div = document.querySelector("div")
let span = document.querySelector("span")

let dispName 
for(let {name} of countries_data){
    dispName = document.createElement('div')
    dispName.textContent = name
    dispName.style.margin = '1em'
    dispName.style.backgroundColor = 'rgba(228,233,237,1)'
    dispName.style.width ='12rem'
    //dispName.style.height = '11%'
    dispName.style.justifyContent = 'center'
    dispName.style.padding = '2.25em'
    dispName.style.fontFamily = 'Arial'
    dispName.style.fontWeight = '500'
    dispName.style.boxShadow = '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'
    div.appendChild(dispName)
    
}

let count = countries_data.length
let numberOfCountries = document.createElement('span')
numberOfCountries.textContent = count
span.appendChild(numberOfCountries)

/*
for(const {name,languages,capital} of countries_data){
    console.log(name)
}*/