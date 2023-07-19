//PUT request with axios
    //needs an id <id> placeholder
    //an object {} for placeholder 
    //.then to come back with response data (an updated version of the object)
    //run get request and pick an id

//build the object 
// const updates = {
//     title: "This is me CHANGING THE TITLE!!!!"
// }

//updates are the body of our request 
// axios.put("https://api.vschool.io/risalafountain/todo/64b6f1d878fe452c1149c530", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

//this is how it looks in JS 

// const person = {
//     name: "steve",
//     age: 20
// }

// const updates = {
//     name: "dan"
// }

// const result = Object.assign(person, updates)
// console.log(result) // {name: "dan", age: 20}




//GET all
axios.get("https://api.vschool.io/risalafountain/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))

//in an application we would collect the data from the user's input (maybe through a form?)
//then we are gonna send a put request and send the inputs they gave us 