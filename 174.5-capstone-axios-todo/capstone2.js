const todoDiv = document.getElementById('todoList')

//get the todos from the database
//see current list of todos

function getData(){
    axios.get("https://api.vschool.io/risalaf/todo") //does a get request to a todo list using the vschool API
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}


//todo show up as soon as the page loads 
//list the todo titles to the dom 
axios.get("https://api.vschool.io/risalaf/todo")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
            const div = document.createElement('div')
            todoDiv.appendChild(div)
            //display img
            const img = document.createElement("img")
            img.src = response.data[i].imgUrl
            img.style.width = "100px"
            img.style.height = "100px"
            img.style.paddingRight = "15px"
            img.style.paddingBottom = "15px"
            img.style.float = 'start'
           // img.style.margin = "15px"
            div.appendChild(img)

            //list item title
            const h2 = document.createElement('h2')
            h2.style.margin = "0px"
            h2.style.fontSize = "medium"
            h2.textContent = response.data[i].title
           // h1.style.float = "left"
            div.appendChild(h2)

            //list item description
            const h5 = document.createElement('h5')
            h5.style.margin = "0px"
            h5.style.fontStyle = "italic"
            h5.textContent = response.data[i].description
            div.appendChild(h5)
            
            //list item price
            const cost = document.createElement("h2")
            cost.textContent = ` $${response.data[i].price}`
            cost.style.float =  "inherit"
            cost.style.fontSize = "small"
            cost.style.margin = "0px"
            div.appendChild(cost)
           
            //create a completed button
            const completeBtn = document.createElement("button")
            completeBtn.innerText = "Done"
            //completeBtn.style.width = "50px"
            completeBtn.style.float = "end"
            div.appendChild(completeBtn);
            
            //strikethrough completed todo
            completeBtn.addEventListener("click", function () {
                h2.style.textDecoration = "line-through"
            })

            //create a reset button 
            const resetBtn = document.createElement("button")
            resetBtn.innerText = "Reset"
            //resetBtn.style.width = "50px"
            resetBtn.style.float = "end"
            resetBtn.style.margin = "10px"
            div.appendChild(resetBtn)

            //remove line through
            resetBtn.addEventListener("click", function (){
                h2.style.textDecoration = ""
            })
        }
    })
    .catch(error => console.log(error))

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
        newTodo.imgUrl.value ="",
        newTodo.title.value = "",
        newTodo.description.value = "",
        newTodo.price.value = ""

        //make a post request with the same url and add new todo to the list
        axios.post("https://api.vschool.io/risalaf/todo", newTodo)
        //when the request comes back we are calling the getData function again
        .then(response => getData()) 
        .catch(err => console.log(err))
    })


