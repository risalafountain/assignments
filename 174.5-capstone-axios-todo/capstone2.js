//**the data I am entering is being attached to the dom twice. how can i fix this?
   // the clear list function is in place to prevent this. what am I missing there?

//page must be refreshed before I can see the effects of the new todo or the deleted although they are being logged in the console
const todoDiv = document.getElementById('todoList')

//get the todos from the database
//see current list of todos
function getData(){
     axios.get("https://api.vschool.io/risalaf/todo") //does a get request to a todo list using the vschool API
         .then(response => listData(response.data))
         .catch(error => console.log(error))
 }

//todo show up as soon as the page loads 
//list the todo titles to the dom 

function listData(data) {
     clearList()
for (let i = 0; i < data.length; i++) {
        createToDo(data[i])
}}

function clearList(){
    const el = document.getElementById('todoList') //select the div 
    while(el.firstChild){ //while the element has a .firstChild which is the first title
        el.removeChild(el.firstChild) //tell element to remove its first child 
    }
}

getData()

//taking each object from the data list as a parameter
function createToDo(item){ 
    const div = document.createElement('div')
    //append all divs to todoDiv
    todoDiv.appendChild(div)
    //display img
    const img = document.createElement("img")
    img.src = item.imgUrl
    img.style.width = "100px"
    img.style.height = "100px"
    img.style.paddingRight = "15px"
    img.style.paddingBottom = "15px"
    img.style.float = 'start'
    // img.style.margin = "15px"
    div.appendChild(img)
    
    //list item title
    const title = document.createElement('h2')
    title.style.margin = "0px"
    title.style.fontSize = "medium"
    title.textContent = item.title
    // h1.style.float = "left"
    div.appendChild(title)
        
    //list item description
    const description = document.createElement('h5')
    description.style.margin = "0px"
    description.style.fontStyle = "italic"
    description.textContent = item.description
    div.appendChild(description)
    
    //list item price
    const cost = document.createElement("h2")
    cost.textContent = ` $${item.price}`
    cost.style.float =  "inherit"
    cost.style.fontSize = "small"
    cost.style.margin = "0px"
    div.appendChild(cost)
    
    //create a completed checkbox
    const checkBoxStatus = document.createElement("input")
    checkBoxStatus.setAttribute("type", "checkbox")
    checkBoxStatus.style.width = "20px"
    checkBoxStatus.style.height = "20px"
    //checkBoxStatus.style.width = "50px"
    checkBoxStatus.style.float = "end"
    div.appendChild(checkBoxStatus);
     
    if (item.completed === true) {
        title.style.textDecoration = "line-through"
        checkBoxStatus.checked = true
    }

    //strikethrough completed todo or no change if unchecked
    checkBoxStatus.addEventListener("click", function () {
        if (checkBoxStatus.checked) {
            title.style.textDecoration = "line-through"
            const updates = {
                        completed : true,
                    }
                    axios.put(`https://api.vschool.io/risalaf/todo/${item._id}`, updates)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                    console.log("the check box is checked")
                } else if (! checkBoxStatus.checked) {
                    title.style.textDecoration = "none"
                    const updates = {
                        completed : false,
                    }
                    axios.put(`https://api.vschool.io/risalaf/todo/${item._id}`, updates)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
                    console.log(("the check box is unchecked"))
                }
            })
          
    //create a delete button 
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    div.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", function (){
        axios.delete(`https://api.vschool.io/risalaf/todo/${item._id}`)
        .then(response => getData())
        .catch(error => console.log(error))
    })
   } 

    //new var for user inputted data
    const formInput = document["todoForm"] 
    formInput.addEventListener("submit", function(e){
    //prevents the default so the page doesn't refresh
    e.preventDefault()
    
    //create a new to do object
    const newTodo = {
        //use this format <name from postman>: formInput.<var name>.value
        imgUrl: formInput.imgUrl.value,
        title: formInput.title.value,
        description: formInput.description.value,
        price: formInput.price.value
    }
    console.log(newTodo)
    
    //reset the input after submit
    formInput.imgUrl.value =""
    formInput.title.value = ""
    formInput.description.value = ""
    formInput.price.value = ""
    
    //make a post request with the same url and add new todo to the list
    axios.post("https://api.vschool.io/risalaf/todo", newTodo)
    //when the request comes back we are calling the getData function again
    .then(response => getData()) 
    .catch(err => console.log(err))
})



