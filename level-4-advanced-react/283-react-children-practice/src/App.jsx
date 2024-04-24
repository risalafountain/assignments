import { useState } from 'react'
// import ImageCallout from './components/ImageCallout'
// import EmailCallout from './components/EmailCallout'
// import InfoCallout from './components/InfoCallout'
import Callout from './components/Callout'


function App() {

  return (
    <main>
      <h1>Welcome!</h1>

      <Callout>
        <h2>Don't Miss Out!</h2>
        <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
      </Callout>

      {/* <InfoCallout 
        header="Don't Miss Out!"
        body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!"
      />   */}
      <p> Ths is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>

      <Callout>
        <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" />
        <figcaption>Just look at that view!</figcaption>
      </Callout>

      {/* <ImageCallout 
        img={"https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        caption="Just look at that view!"
      />   */}

      <p>Here is some more unforgettable content. Lorem ipsum something or other.</p>

      <Callout>
        <h2>Give us your email. We definitely won't sell it to anyone.</h2>
        <input
          type="email"
          placeholder="Enter Email"
        />
        <button>Sign me up!</button>
      </Callout>
      {/* <EmailCallout 
        header="Give us your email. We definitely won't sell it to anyone."
        btnText="Sign me up!"
      />       */}

    </main>
  )
}

export default App

//callout has the border and light blue background 

/*
283
Challenge:
--CREATE A CALLOUT COMPONENT THAT TAKES CHILDREN INSTEAD OF HAVING THE 3 SEPARATE CALLOUT COMPONENTS THAT HAVE THEIR OWN CHILDREN IN THEM. 

1. set up standard function that takes props and returns {props.children}
2. give the div a className of callout to match the styling 
3. in App, instead of having three different instances {commented out} render the Callout Component WITH A CLOSING TAG in order to use the children 
  <Callout></Callout>
4. take the rendered elements from each callout and place them within the parent Callout component. Remove the {props.??} and replace it with the hardcoded data 
5. delete the file and the ImageCallout component import since it is no longer needed 

*/