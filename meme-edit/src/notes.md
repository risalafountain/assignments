HTTP REQUEST 
https://api.imgflip.com/get_memes

TIP: 
Do not set  the ID from the meme image as the ID for each created meme. This will cause issues if 2 or more memes use the same image. 


270.5 
# a user will see a meme image on page load
1. create inputs in return--store in div named form
    //use the div tag instead of form tag since there will be a button which will refresh the page unless stopped

2. create an object in state for meme w/ properties of topText, bottomText, randomImage

3. create empty array to hold all meme images

4. useEffect to fetch data from the api. set dependencies to    empty array 

5. create button and onClick 

# a user can click "refresh meme image" to load a new one 

272.5
# a user will see a form with two inputs and a submit button 
# inputs will be: top text/bottom text 
# A user will be able to see a preview of their meme

274.5 
# a user will be able to add created memes to a list 
# a user will be able to delete memes from the list 

276.5
# a user will be able to edit an existing meme

from the state and props across depths workshop 
--rendering a list in react--use the .map method (to loop through the array of objects and convert each object into a jsx element and render a single item)
--componenet always takes props as an argument 
    --takes an input array 
define what the items are in list 
in app jsx
<List items={[{title: 'test, descriptions: 'test'}]}/>
--

the list componenent knows that if you feed me items i'm going to render the lists
    <div> props.items.map(item)

need to have a single item component 
const Item = () => {
    return (
        <div>
        //title
        //description
        //delete button
        //edit button (toggle an edit)
        </div>
    )
}

create the form and stuff BEFORE adding state

render a form in each item 
make a form in single item 
<form> 
    <label html >
    edit title 
    edit description 
    save button

show and hide the edit form 
    in item in order to hide the form, make it go away with conditional rendering (false or t in the item component itself 
onCLick={() => setShorue && (form data/info here ))
    need a value to switch the form on and off How? 
    maintain state to determine whether or not to show our form 
    const [showForm, setshowForm]=useState(false)
    have onclick function on edit (set show form to the opposite of what it was before )
    state vaslue liveswForm(show => !show)}>{showForm? "hide form" : "edit form"}

handleClickDelete =() => {}
props.deleteItem(props._id)

edit form need to manage the internal state of the inputs and when i hit save 

create edit form component to make it easier look cleaner 

all the work we did in edit form 
(showForm && Edit form)

//change handler  
//submit handler 
//prefill values with item that we're editing 

where to put state, if i'm dealing with state, you only need to put your state highest up iun the tree necessary so that all components that need it can use it 

const fiels, set fiels = useSate ({titile: props.title, desprioiptions :L props.description })

const handle change = e => {
    const [name, , value] = e. target (from the dom element)

    (set fields to the existing, or new value
    )

    setFields(prev => ({...prev, [name] : value}))
}

setup handle submiot function 
const handlesubmit =() => {
    --take id of the thing we want
    props.edit.item(props._id, fields)
}

go to form onsubmit={handlesubmit}
e.prevent.defualt  

--make button a submit typoe
in item feed edit form the things it needs {_id={props._id} 
title={propls.title} 
description ={props.description}}

--in app comp
const [items, setItems] = useState ([])

//fetch request
//axios.get
//set state with resulting data
const getallitems =() => {

}

prop drilling 

BIGGEST TAKEAWAYS
1. memorization is not important just understand the underlying concepts to apply to new projects 

1. useState hook : always put state and methods for updating state at the highest shared ancestor among the componenets that need to use it 
2. props: send props to send it downward to the tree 
3. prop drilling: what is it 