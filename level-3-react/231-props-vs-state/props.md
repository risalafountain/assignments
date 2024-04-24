Props Vs. State: 
Props SP230.75

"Props" refers to the properties being passed into a component in order for it to work correctly, similiar to how a function receives parameters: "from above". A component receiving props is not allowd to modify those props. (i.e. they are "immutable")


function addTwoNumbers(a, b) {
  **being passed from above" refers to the parameters returned in the body of the function like this**
    return a + b 
}

addTwoNumbers(1,2) //3

you would never want to allow for the input of parameters then assign the parameter a variable which will over ride the inputs like this

function addTwoNumbers(a, b) {
  **assigning a number to the parameter makes no sense**
    a = 42
    return a + b 
}

addTwoNumbers(1,2) //44

In the same way you wouldn't want to assign props like this

function Navbar(props) {
    props.coverImg = "insert something here"
 }

because incoming props should be immutable and never change manually.
**You should never change your props within the body of the function!** 

you CAN change the values that you pass to your components like this 
<Navbar coverImg = "some-img-1" />




