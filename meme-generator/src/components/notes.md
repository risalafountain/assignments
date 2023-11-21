so far we have only done static websites
Read-only: no changes in data 
EX: blogs, news sites, recipes,


dynamic websites
Read-Write: ability to change data 
highly interactive 
displays your data 
EX: bank website, AirBnb, social media

Meme Generator: 
reach out to api and get 100 meme images 
choose text on top and bottom 

What we'll learn 
--event listeners 
--state
--conditional rendering 
--forms
--side effects 

Break the app down into smaller pieces 
Start w/ header since it is static and we already know how to do that. 

PROJECT ANALYSIS--228.75
1. when the app loads, it is immediately going to makea call to API "image flip"
2. tapping get new meme image will randomly generate one
    -create event listener and run "some kind of logic" once the button is clicked 
3. typing in each input box will apply it to the top and bottom of image

GET RANDOM MEME--229.75
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */

OUR CURRENT CONUNDRUM--see 230-conundrum
/**235.75-Add Images to the Meme Generator

* Challenge: Save the random meme URL in state
* - Create new state called `memeImage` with an empty string as default
* - When the getMemeImage function is called, update the `memeImage` state to be the random chosen
*   image URL * - Below the div.form, add an <img /> and set the src to the new `memeImage` state you created
*add some styling to make sure the image stays within its boundaries
*/        

/**project startup
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 * 
 * best to layout using grid in css
 * 
 *     function getMemeImage() {
        // access the arr and get an object
        const memesArray = memesData.data.memes
        // randomize Selection
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // console.log(randomNumber)
        // get image object by index into memeas array and index of random number
        const url = memesArray[randomNumber].url //this line is incomplete!
        //console.log(url)
    }

 */


239.25-REFACTOR STATE 
* Challenge: Update our state to save the meme-related data as an object called `meme`. It should have the following 3 properties:
     * topText, bottomText, randomImage.

OLD VERSION :
    const [memeImage, setMemeImage] = React.useState("")

UPDATED VERSION:
--use object instead of string 
    const [memeImage, setMemeImage] = React.useState({})

--put in the three properties we want in curly braces 
    const [memeImage, setMemeImage] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

--another state var to access all meme images--initial value will be our memes data arr
--anywhere that we were using memesData, replace with all MemeImages

The 2 text states can default to empty strings for now, amd randomImage should default to "http://i.imgflip.com/1bij.jpg"

Next, create a new state variable called `allMemeImages`
which will default to `memesData`, which we imported above

Lastly, update the `getMemeImage` function and the markup 
to reflect our newly reformed state object and array in the
correct way.

260.5--add image to text 
at the moment the text is hardcoded and styled  in 
    <h2 className="meme--text top">One does not simply</h2>
    <h2 className="meme--text bottom">Walk into Mordor</h2>

Challenge: 
1. set the text inputs to save to the 'topText' and 'bottomText' state variables 
    a. add the properties that we need to the inputs from state 
        name="topText"
        name="bottomText"
    b. add the value properties so they can be controlled components
        value={meme.topText}
        value={meme.bottomText}
    c. create onChange event handler , pull in event to get the name and value. destructure and pull from event.target 
        function handleChange(event){
            const {name, value} = event.target 
        }
    d. follow exactly how we did getMemeImage with setMeme
        it reads like this: 
        -set the meme -access the previous version of the meme -return an object (an implicit return = wrapping ({object}) in ()) -copy over all the properties of the previous meme -change either the topText or the bottomText property depending on which name gets pulled in from event.target. --use computed property name and set (:) the value to value -
        setMeme(prevMeme => ({
            ..prevMeme,
            [name] : value
        }))
2. replace the hardcoded text on the image with the text being saved to state 
    e. replace hardcoded text to look at the object values in state 
        {meme.topText}, {meme.bottomText}
 
minimum valuable product to push out to customers
currently importing memes data from a javascript file but we need to pull from an api. need to learn more before we get to that 

266.5 Get Memes from API 
Challenge: 
As soon as the Meme component loads the first time, make an API call to "https://api.imgflip.com/get_memes".

When the data comes in, save just the memes array part of that data to the 'allMemes' state 

Think about if there are any dependencies that, if they changed, you'd want to cause to re-run this function. 

Hint: for now, don't try to use an async/await function. Instead use '.then()' blocks to resolve the promises from using 'fetch' we will learn why after the challenge. 

1. useEffect + arrow function
make a call to React.useEffect and use an arrow function 

    For the dependencies: We want the API request to happen as soon as the component loads. All the data is saved to state but state itself isn't changed. THerefore we leave the dependcies blank. 

    React.useEffect(() => {}, [])

2. FETCH REQUEST: 

Inside the effect make a fetch request to the url "https://api.imgflip.com/get_memes". Resolve with a .then. Take the response and parse the JSON into javascript. Take the data and console log it to make sure everything is working well 

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => console.log data)
    }, [])

3. SET STATE: 
erase the memesData from allMemeImages and pass in an empty array which will store the data : 
    const [allMemes, setAllMemes] = React.useState([])
    
Replace console.log with setAllMemes and return/access data.data.memes 

    .then(data => setAllMemes(data.data.memes))

outside of the effect, console.log allMemes. what will be returned will be the empty array [] from the first rendering and then all the data from the second rendering BUT
every key stroke in the input box will log the entire memesArray to the console so make sure to comment it out before proceeding 

Challenge: Fix the bug! 

1. get rid of 
    const memesArray = allMemeImages.data.memes
since we are already doing the work in state above. 
2. change all instances of memesArray to allMemeImages

DELETE memesData





