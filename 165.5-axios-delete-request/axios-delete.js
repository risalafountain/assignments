//DELETE request - use id to specify the resource the endpoint <id> is the placeholder until you can copy the id from the console in the get request  

// axios.delete("https://api.vschool.io/risalafountain/todo/64adbfad78fe452c1149b7f2")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

//GET all
// axios.get("https://api.vschool.io/risalafountain/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

//GET one 
// axios.get("https://api.vschool.io/risalafountain/todo/64adbfad78fe452c1149b7f2")
//     .then(res => console.log(res)) //staus 200 
//     .catch(err => console.log(err))

//to work with a delete button the syntax looks like this, but this will yield an error because there isn't a delete button on the HTML page---this is just for an example 
 
// const button = document.getElementById('delete-button')

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/risalafountain/todo/5d8bd511ee91575e6d49e06e")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })





