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
            img.style.float = 'left'
            div.appendChild(img)

            //list item title
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            div.appendChild(h1)
            
            //list item price
            const cost = document.createElement("h1")
            cost.textContent = `$ ${response.data[i].price}`
            div.appendChild(cost)
           
            //create a completed button
            const completeBtn = document.createElement("button")
            completeBtn.innerText = "Done"
            completeBtn.style.width = "50px"
            div.appendChild(completeBtn);
            
            //strikethrough completed todo
            completeBtn.addEventListener("click", function () {
                h1.style.textDecoration = "line-through"
            })

            //create a reset button 
            const resetBtn = document.createElement("button")
            resetBtn.innerText = "Reset"
            resetBtn.style.width = "50px"
            div.appendChild(resetBtn)

            //remove line through
            resetBtn.addEventListener("click", function (){
                h1.style.textDecoration = ""
            })

        }
    })
    .catch(error => console.log(error))



