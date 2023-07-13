/*
# Fetch
    - Fetch is an api that you can use to make HTTP requests from a javascript application.
    - While similar to the XHR object, it expands on that to have more features including being promise based.
    - Fetch is a native API, meaning you do not need to install anything to use it! 
after this we will be using axios throughout the rest of the course. this is just a very simple intro to fetch 
*/

//defaults to get 
// fetch("https://rickandmortyapi.com/api/character")
//     .then(res => res.json() ) //gets the response as json and parses it so we can use it in js 
//     .then(res => console.log(res.results)) //this will be the js version of whatever was received from the fetch request
//     .catch(err => console.log(err))

//here is what you would use if you wanted to use POST    
// fetch("https://rickandmortyapi.com/api/character", {
//     method: "post",
//     body: JSON.stringify({})
// })
//     .then(res => res.json() ) //gets the response as json and parses it so we can use it in js 
//     .then(res => console.log(res.results)) //this will be the js version of whatever was received from the fetch request
//     .catch(err => console.log(err))

//to send it to web page set up a for loop  and create an h1  then add the name as the text content and put the h1 on the page 

fetch("https://rickandmortyapi.com/api/character") //get the array 
    .then(res => res.json()) //bring it back and convert it to json and parse it 
    .then(res => { //receive it as js 
        
        for(let i = 0; i < res.results.length; i++){ //loop over its results 
            const h1 = document.createElement('h1')
            h1.textContent = res.results[i].name
            document.body.appendChild(h1) //get all the names to show up on the page 
        }
        
    })
    .catch(err => console.log(err))

    
