the data thus far has been hard coded which is not helpful when dealing with pages such as: 
-apple (multiple components with img and title)
-imdb (new movie comes out but the dev doesn't go in and hardcode everything)

we will next learn to use props for resolving this issue 

## Component Reusability and Creating a Card List Component

### Component Reusability

In React, component reusability is a powerful concept that allows you to create a single component and reuse it multiple times throughout your application. This approach promotes code efficiency, consistency, and maintainability.

### Creating a Card List Component

One common example of reusable components is a card list, such as a list of accommodations in a vacation rental website. Here's how you can approach building a reusable card list component:

1. **Card Component:** Begin by creating a **`Card`** component that represents a single card item in the list. The **`Card`** component should receive props to customize its content, such as title, image, description, or any other relevant data.
2. **List Component:** Next, build a **`CardList`** component that serves as a container for multiple **`Card`** components. The **`CardList`** component should receive an array of data (e.g., an array of accommodations) as a prop. Inside the **`CardList`** component, map over the data array and render individual **`Card`** components, passing the appropriate data as props.
3. **Reusability and Customization:** By creating the **`CardList`** component, you now have a reusable component that can be used throughout your application. Each instance of the **`CardList`** component can display a different set of data, allowing you to create multiple lists with different content, such as lists of accommodations, products, or any other related items.

### Advantages of Component Reusability

- **Efficiency:** Reusable components save development time and effort by eliminating the need to rewrite similar code for each instance.
- **Consistency:** Using the same component for similar functionality ensures a consistent look and behavior across your application.
- **Maintainability:** With reusable components, updates or changes can be applied to all instances simultaneously, reducing code duplication and the risk of inconsistencies.

### Customization and Flexibility

While the **`CardList`** component provides a standard layout and structure, it can still be customized and extended as needed. You can add additional props to modify its appearance, such as adjusting the number of cards per row, applying different styles, or adding interactive features.

### Conclusion

Creating reusable components, like the **`CardList`** component, in React allows you to build efficient, consistent, and maintainable code. By encapsulating functionality and structure, you can easily generate multiple instances of a component, promoting code reusability and facilitating the development process.