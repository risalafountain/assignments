1. Why do we need to `import React from "react"` in our files?
the jsx syntax is defined in react 

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
This shows two sibling elements but they need to be nested under one parent element. like a div 


4. What does it mean for something to be "declarative" instead of "imperative"?
----
Declarative: What should be done? 
"Tell me WHAT to do and I'll worry about how to get it done" 
"make me a pbj sandwich"
Imperative: How should it be done? 
"describe to me every step on HOW to do something, and i'll do it" 
JS is imperative. 
"grab two pieces of bread with two fingers. use a knife.....etc"
---

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something larger/greater than the individual pieces. 