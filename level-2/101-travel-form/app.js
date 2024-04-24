const form = document.getElementById("myForm")
let submit = document.getElementById("submit")

form.addEventListener("submit", (event)=> {
    event.preventDefault()
    //console.log(form.gender.value)
})

function formAlert() {
    let firstName = form.elements["firstName"].value;
    console.log(firstName.value)
    let lastName = form.elements["lastName"].value;
    console.log(lastName.value)
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value; 
    let location = form.elements["location"].value;
    
    //checkbox requires array to see what user selected
    let inputs = []
    for(let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            inputs.push(form.diet[i].value)
        }
    }
    // console.log("this is your for loop", inputs)

    alert(`Please verify your information is correct: \nFirst Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${location} \nDietary Restrictions: ${inputs}`)
}

submit.addEventListener("click", formAlert);