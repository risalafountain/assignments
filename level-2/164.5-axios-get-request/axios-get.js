//get requests with axios 
//https://api.vschool.io/risalafountain/todo
//get all:  an array of items 
axios.get("https://api.vschool.io/risalafountain/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

//get one : single object copy the id of one of the existing to-do and add to the end of the url 

axios.get("https://api.vschool.io/risalafountain/todo/64adbfad78fe452c1149b7f2")
.then(response => console.log(response.data))
.catch(error => console.log(error))

//show it up on the dom so instead of clg the response, write a for loop instead
axios.get("https://api.vschool.io/risalafountain/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))