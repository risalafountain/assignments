using 

function getData() {
    fetch ("https://swapi.dev/api/people")
        .then(res => res json ())
        .then(res => console.log (res))
        .catch((err)=> console.log (err))
}

getData()

under Network it monitors requests
keep tap hovered over all
find the xhr requests that's called people/
    header: basic meta data, will find the status code 200, 404, etc; can review the url and see if it was mistyped
    preview: preview of what we requested 
    response: literal response from the server it is one string
    timing: how long it took for the request to complete and come back 
can also change to slow 3g to see how the page will load with different network speeds