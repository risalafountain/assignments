Part 2 is the fun part. We get to explore all the cushy things our browser has built for us, and all we have to do is simply implement them.

---

### **Input types**

---

Let start with the different input types. The first two are old news.

- text
- number
- checkbox
- radio
- tel
- email
- date
- search
- color

Some of these will appear to do nothing, but there's some handy things they do for us. For example, different key boards will pop up on your users phone for `type="email"` and for `type="tel"`.

Not only that, but these attributes could be useful for form validation later on down the road.

`type="search"` may seem like it doesn't do anything, but remember, a browser may choose to do a number of cool things to any input type if it wished. Like maybe adding a little magnifying glass, or an `x` to clear a search input field.

The rest of these types have pretty big and cool features.

---

Date gives the user a calendar to pick a date from:

---

Color give the user a sweet color picker to choose a color from:

---

# **Radio and Checkbox**

---

Radio Buttons (circles) only allow ther user to select one of the options.
using the name attribute: 
    having all options with the same name attribute, will automatically limit to one selection 
    add value: to retrieve the option selected
    then clg in JS to verify it is working correctly 
    

const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(form.gender.value)
})

Checkboxes (squares) mean the user can pick as many of the options as they want.

```html
<form><p>I like:</p><br><label><input type="checkbox"/>Cats</label><br><label><input type="checkbox"/>Dogs</label><br><label><input type="checkbox"/>Unicorns</label><br>
    But my favorite is:
    <br>
    Dogs <input type="radio" name="favorite"/>
    Cats <input type="radio" name="favorite"/>
    Unicorns <input type="radio" name="favorite"/></form>
```

---

The `name` and `value` attribute are especially important with radio buttons and check boxes.

All buttons and boxes that are in the same grouping will be given the same `name`.

The value of each input box will be the desired `.value` for radio buttons. Usually just what the user is selecting:

```html
<form name="animals">
    I like:
    <br>
    Cats <input value="cats" name="likes" type="checkbox"/>
    Dogs <input value="dogs" name="likes" type="checkbox"/>
    Unicorns <input value="unicorns" name="likes" type="checkbox"/><br>
    But my favorite is:
    <br>
    Dogs <input value="cats" type="radio" name="favorite"/>
    Cats <input value="dogs" type="radio" name="favorite"/>
    Unicorns <input value="unicorns" type="radio" name="favorite"/><button>submit</button></form>
```

To get the value of the radio button the user selected, you can use the `name` attribute and the DOM gets a new property to the form!:

```html
document.animals.favorite.value //=>  "cats"

```

To get the checkboxes that the user selected? That's it's own beast.

```html
Cats <input value="cats" name="likes" type="checkbox"/>
Dogs <input value="dogs" name="likes" type="checkbox"/>

```

What would `document.animals.likes.value` look like?

It's not just going to be a string, because it can be multiple options that are selected. It's actually undefined.

There are a few methods you can use to get which check boxes are check.

If you select the input box, either by name or id, you can looked at it's `.checked` property.

In this way, you could see wether or not a checkbox was checked.

You could also get at the list of checkboxes, loop through them, and make another array of just the values of all the checked ones.

Special note: `document.animals.likes` is kind of an array, but it's more accuratly a "node list".

```jsx
document.animals.addEventListener("submit", function(e){
  e.preventDefault()
  //assign our animals that are liked to a variable
  var animals = document.animals.likes
  //create a new array that we can fill with the values (as strings) of our checkboxes
  var checkedAnimals = []
  //loop through each checkbox
  for (var i = 0; i < animals.likes.length; i++){
    //check to see if the checkbox is checked
    if(animals[i].checked){
      //add the values to our new array
      checkedAnimals.push(animals[i].value)
    }
  }
  console.log(checkedAnimals)
})

```

Things got heavy there at the end, but for the most part, working with forms is great. Start practicing!

# **An easier way to get array of values from checkboxes**

Fortunately, there's a slightly easier alternative we can use to get the list of checked items using `document.querySelectorAll`:

```jsx
document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    var checkedAnimals = [];
    var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedAnimals.push(checkedBoxes[i].value);
    }
    console.log(checkedAnimals)
});
```