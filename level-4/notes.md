# 282-Code Reuse in React 
to keep code DRY rely on 
Composition over inheritance  https://www.youtube.com/watch?v=wfMtDGfHWpA

1. components with props 
2. Children
3. Higher Order Components 
4. Render Props 

# 282.5 React Children 
--any element that you create can be used with a self closing tag like we've been using <Example />

--you can also use a closing tag like this <Example> something here</Example>

anything within the tags can be accessed using props.children 
    function Example(props) {
    return (
        <div className="border"> //this styling is done in css and applied on each render of this component 
            {props.children}
        </div>
    )
}

this allows the component to be rerendered in APP component  with different things inside it while keeping the styling. all the styling done in css would apply to all instances of the Example component 

function App() {
    return (
        <div>
            <Example>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </Example>
            
            <Example>
                <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br />
                    <button>Submit</button>
                </form>
            </Example>
        </div>
    )
}

props is still the best way to do go for components that are exactly the same. 

for user to have full access to customization of what is displayed, use children
for there to be some structure (e.g. will always have a <h1> and <button>), use props 

