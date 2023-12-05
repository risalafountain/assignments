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

