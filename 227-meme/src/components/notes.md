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



    

