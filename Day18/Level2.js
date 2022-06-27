//Exercises : Level 2

//1.Print out all the cat names in to catNames variable.

//const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const url = 'https://api.thecatapi.com/v1/breeds'
const catNames = async () => {
    try{
        const response = await fetch(url)
        const cats = await response.json()
        cats.forEach(cat =>{
            console.log(`${cat.name}`)
        })
    }catch (err){
        console.error(err)
    }
}
catNames()