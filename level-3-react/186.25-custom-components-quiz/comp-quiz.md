Quiz!

1. What is a React component?
    A functionthat returns a react element (UI)

2. What's wrong with this code?
```
    components need to be PascalCase so capitalize MyComponent
    
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
    we don't use a () to execute our component but instead surround it with angle brackets

        ReactDOM.render(<Header/>, document.getElementById("root))


function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root))
```
