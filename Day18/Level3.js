//Exercises : Level 3

// 1.Read the cats api and find the average weight of cat in metric unit.
 const url = 'https://api.thecatapi.com/v1/breeds'
 const fetchData = async () => {
     try {
         const response = await fetch(url)
         const cats = await response.json()
         cats.forEach(cat =>{
             console.log(`${cat.name}: ${cat.weight.metric} metric unit`)
         })
        
     }catch(err){
         console.error(err)
     }
 }
 fetchData()
