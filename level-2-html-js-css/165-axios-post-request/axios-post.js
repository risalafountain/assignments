//post request 
//request Body

// const newTodo = {
//     title: "My Third Todo",
//     description: "This is my third entry.",
//     imgUrl: "https://images.unsplash.com/photo-1689631281436-0123773c8cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
// }

//using axios means we do not have to convert it to JSON manually 
// the convention for axios, whenever data comes back .data is the actual data we are requesting
// axios.post("https://api.vschool.io/risalafountain/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

//add a submit event listener to form 

// const todoForm = document.todoform 

// todoform.addEventListener("submit", function(event) { //fire submit event 
//     event.preventDefault() //prevent the default 
   
//     //capture the new todo values from the form
//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }
//     //send it on the post request as the request body 
//      //server receives change and adds to the database
//     axios.post("https://api.vschool.io/risalafountain/todo", newTodo)
//     .then(response => console.log(response.data)) //send the response and clg the added response
//     .catch(error => console.log(error)) 
// })




// GET all todos
axios.get("https://api.vschool.io/risalafountain/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))