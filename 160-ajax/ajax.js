//how do we create a request (xhr)
//what parts of this object are important for our request

//xhr.onreadystatechange--not camelcased

const xhr = new XMLHttpRequest()

//everytime the server makes progress on a request, the onreadystatechange will  called the function 

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200) {
        //how to handle the data
        //look at the properties 
    }
}

//xhr.readyState
    //stage 1-request has been sent 
    //stage 2- 
    //stage 3-
    //stage 4- the server has responded and it is time to handle our data. in order to make sure the request did what we expected it to is the status that comes back from the server 

//xhr.status

    //200 - all is ok 
    //201- post request successfully added to a database
    //404 - not found 
    //500 - something went wrong in the server 
//teh ready stat