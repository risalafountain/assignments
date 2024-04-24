/**
Challenge: move the Footer and MainContent components
into their own files.
*/


Organizing Components in React

One of the key principles in React development is organizing components in a structured and maintainable manner. By following a well-organized approach, developers can enhance code readability, reusability, and scalability. Here's a simple example of how to organize components:

Folder Structure:
Create a clear and logical folder structure to organize your components. For instance:

```jsx
src/
	components/
		common/
			Button.js
			Input.js
		pages/
			HomePage.js
			AboutPage.js
```

Categorize Components:
Categorize components based on their functionality or purpose. For example, create a "common" folder for reusable components like buttons or inputs, and a "pages" folder for higher-level components representing different pages of the application.

Modularize and Reuse:
Break down complex UIs into smaller, reusable components. For instance, if the HomePage and AboutPage components share a common feature like a header, consider creating a separate Header component and reuse it in both pages.

Export and Import:
Export components from their respective files and import them where needed. For example, in the HomePage.js file, import the Header component using **`import Header from './Header'`** and utilize it within the HomePage component.

By organizing components in a systematic manner, developers can easily locate and manage their code, promote code reuse, and maintain a clear separation of concerns. Remember, there is no one-size-fits-all approach to organizing components, and the structure may vary based on the complexity and requirements of your application.

Here is another example of a possible App.js structure

```jsx
import React from 'react';
import Header from './components/common/Header';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
```

```jsx
const App = () => {
return (
<div className="app">
<Header />
  <main className="content">
    <HomePage />
    <AboutPage />
  </main>

  <footer className="footer">
    {/* Footer content */}
  </footer>
</div>
);
};

export default App;
```