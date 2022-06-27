//Exercises : Level 1


//1.Read the countries API using fetch and print the name of country, capital, languages, population and area.

//const countriesAPI = 'https://restcountries.com/v2/all'

const url = 'https://restcountries.com/v2/all'
const fetchData = async () =>{
    try{
        const response = await fetch(url)
        const countries = await response.json()
        countries.forEach(country => {
            console.log(`${country.name}  ${country.capital}  ${country.population}    ${country.area}`
            )
        })
        
    }catch(err){
        console.error(err)
    }
}
fetchData()

