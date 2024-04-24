const xhr = new XMLHttpRequest

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status ===200){
        const JSONdata = xhr.responseText //responseText holds whatever comes back from the server
        //console.log(JSONdata) //this works
        const parsedData = JSON.parse(JSONdata)
        console.log(parsedData) //this works
       
        const arr = parsedData.objects[0].pokemon  
        for (let i = 0; i < arr.length; i++) {
            const h1 = document.createElement('h1')
            h1.textContent = arr[i].name
            console.log(arr[i].name)
            document.body.appendChild(h1)   
           }
    }
}
