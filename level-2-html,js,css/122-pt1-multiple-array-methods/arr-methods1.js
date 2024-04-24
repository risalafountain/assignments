var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


//return a list of everyone over 18 [reduce]
//sort alphabetically by last name  [sort]
//embed into a string that looks like <li> element []

// console.log("Hello World ")
// console.log(peopleArray)
////nothing works after this line! everything in the function is broken maybe?

function sortedOfAge(arr){
    //attempt 3     
    const over18 = arr.reduce (function (final, user){
        if (user.age >= 18){
            console.log(`<li> ${user.firstName} ${user.lastName} is ${user.age} <li>`)
        }  
        return final
    }, [ ]).sort(function (a, b) {
        return a.lastName - b.lastName
    })
    return over18
}
console.log(sortedOfAge(peopleArray));
 
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 