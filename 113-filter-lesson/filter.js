// .filter()

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if(num % 2 === 0){
//         return true
//     }
// })

//console.log(result) // [2, 4, 6, 8, 10] this will be the outcome whether we decide to return true or return num 

//cannot alter the nums themselves (e.g. return num + 10) because it would still yield [2,4,6,8,10]

//ES6 syntax ()
//--get rid of the function word, add =>, get rid of extra () since there is only a single argument, get rid of 'if' and 'return' and pull up to the same line
//const result = arr.filter(num => num % 2 === 0 )
//console.log(result) //[2, 4, 6, 8, 10]


const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

// check if a movie's genre is action

// const actionMovies = movies.filter(function (film) {
//     if (film.genre === "action") {
//         return film
//     }
// })

//console.log(actionMovies) // [{ name: 'movie2', genre: 'action' },{ name: 'movie3', genre: 'action' }]

//ES6 Syntax (get rid of bracket, if statement, (), return statement)

const actionMovies = movies.filter (film => film.genre === "action")

console.log(actionMovies) //[{ name: 'movie2', genre: 'action' },{ name: 'movie3', genre: 'action' }]











