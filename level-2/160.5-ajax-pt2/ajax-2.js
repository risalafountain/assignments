//VOCABULARY
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
//xhr.open()
//khr.send()
//xhr.responseText

// url: https://swapi.co/api/people/1


// const xhr = new XMLHttpRequest()

//method. // url //                   //asynchronous?
// xhr.open("GET","https://swapi.dev/api/people/1/", true) 
//takes three arguments what type of request are we making all caps, url we are requesting to, and whether or not we want it asynchronous 

// xhr.send()
//once the if statement evaluates to true then we will have a response 

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(data)
//     }else if (xhr.readyState === 4 && xhr.status !== 200){
//         console.log(data)
//     }
// }
//will return as as string. (JSON) so we need to convert it 
//to get the data to show up on on HTML page 

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         showData(data)
//     } 
// }

// function showData(luke) {
//     const h1 = document.createElement('h1')
//     h1.textContent = luke.name
//     document.body.appendChild(h1)
// }

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://swapi.dev/api/people", true)
xhr.send()

//adjust function to receive data.results list all ten names to the document 
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.results) //our array send it to showData
    }
}

function showData(arr) {
    for (let i =0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)   
    }
}
// function showData(arr){
//     for(let i = 0; i < arr.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
//     }
// }