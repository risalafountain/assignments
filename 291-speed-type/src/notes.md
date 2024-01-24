
291.5=React Context API

"provides a way to pass data through the component tree without having to pass props down manually at every level" (i.e. prop drilling) 


https://react.dev/learn/passing-data-deeply-with-context
https://react.dev/reference/react/useContext

-You can only pass data downwards through props, so if you have a series of components you cannot pass data across to them. You would need to put state in the parent component then use props. Prop drilling means the component is being used as a tunnel to filter the data down into the appropriate spot. Can become tedious. 

--Provider: wrap top component in a provider
--Consumer Pair : wrap all the components that need the data in a consumer 

