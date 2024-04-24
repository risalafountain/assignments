// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/risala/todo") //does a get request to a todo list using the vschool API
        .then(res => listData(res.data)) //when the results come back, call the function listData to get the todo list 
        .catch(err => console.log(err))
}

// LISTS THE TODO TITLES TO THE DOM
function listData(data){ //receives the array
    
    //to prevent duplicates you can do this so it erases the data from the previous submits:
    document.getElementById('todo-list').innerHTML = ""
    //HOWEVER not all browsers support HTML so try this instead:

    //clearList()
    
    for(let i = 0; i < data.length; i++){ //loops through the array
        const h1 = document.createElement('h1') //creates an h1
        h1.textContent = data[i].title //puts the TODOs title as the h1
        document.getElementById('todo-list').appendChild(h1) //puts it on the DOM
    }
}

function clearList(){
    const el = document.getElementById('todo-list') //select the div 
    while(el.firstChild){ //while the element has a .firstChild which is the first h1
        el.removeChild(el.firstChild) //tell element to remove its first child 
    }
}

getData()

// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"] //grab the form off the dom by its name and saving it in  a variable

todoForm.addEventListener("submit", function(e){
    e.preventDefault() //prevents the default so the page doesn't refresh
    
    const newTodo = { //creates a new todo object
        title: todoForm.title.value //user input value applied to the "title" 
    }
    
    todoForm.title.value = "" // resets the input 
    
    axios.post("https://api.vschool.io/risala/todo", newTodo) //makes a post request with the same url, adds a new todo to the list  
        .then(res => getData()) //when it comes back we are calling getData again  
        .catch(err => console.log(err))
})

