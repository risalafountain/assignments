1. How would you describe the concept of "state"?
    A way for React to remember saved values from within a component.
    This is similar to declaring variables from within a component,
    with a few added bonuses (which we'll get to later)

2. When would you want to use props instead of state?
    Anytime you want to pass data into a component so that
    component can determine what will get displayed on the
    screen.


3. When would you want to use state instead of prop?
    Anytime you want a component to maintain some values from
    within the component. (And "remember" those values even
    when React re-renders the component) 

4. What does "immutable" mean? Are props "immutable"? Is state "immutable"?
    unchanging.
    Props are immutable---they SHOULD never be changed within the body of the function. 
    State is mutable--they plan to be changed. 
