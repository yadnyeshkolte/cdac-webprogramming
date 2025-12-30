const data = require('./movies.json');//Used to include an external Js based files in ur code. 
for(const movie of data){
    console.log(`${movie.Title} directed by ${movie.Director}`)
}