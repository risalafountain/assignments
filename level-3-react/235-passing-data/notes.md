it is not possible to pass data between sibling components. 
but if you put state in the parent component, then through PROPS you can pass data from the parent to the children components. 

/**
 * Challenge:
 * Raise state up a level and pass it down to both the
 * Header and Body components through props.
 *  
 take the line that is intializing state and move into our app component 

then pass the props down into the Header and Body Component. This is a simple case and we can just pass in the prop user={} and pass in the state variable user (from     const [user, setUser] = React.useState("Joe")
)

have the header and the body components accept (props) and display {props.user}

as a rule of thumb keep state as local as we can---as closely tie to the component/s that need it 




*/

