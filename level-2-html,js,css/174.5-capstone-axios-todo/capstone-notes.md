### **Part 1 - GET**
- The user can see their current list of todos.
- Todos show up as soon as the page loads.
- If a todo item is complete, it should have a strikethrough line on it
- Images should be displayed as images if there are any

Hints:

A `createTodo` function that takes one todo and inserts it to the DOM is very userfull

Use postman to get those first few todos in there with some images so you can style your list!

## ***Report as Story Point 168.5 (2 Story Points)**

### **Part 2 - POST**

- The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.
- A user should be able to give the item a title.
- A user should be able to give the item a price.
- A user should be able to give the item a description.
- A user should be able to attach an imgUrl to the item

## ***Report as Story Point 170.5 (2 Story Points)**

### **Part 3 - PUT Part 1**

- Each todo will have a checkbox where it can be marked complete or incomplete
- Checking the checkbox should update the database

## ***Report as Story Point 172.5 (2 Story Points)**

### **Part 4 - DELETE**

- A user will be able to delete todos (this is different from marking a todo as "completed")
- Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

## ***Report as Story Point 174.5 (2 Story Points)**

### **Part 5 - PUT Part 2 (extra credit)**

- Each Todo will have an "edit" button.
- When clicked, the info will change to input boxes that are autofilled with the old Todo data
- A user can change the value of these inputs
- When the "edit" button is clicked, it will change to a "save" button.
- When "save" is clicked, the form will disappear, and the new values will be displayed.
- On save, the todo will be edited in the database.

Read through the "using id" section in the [API documentation](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21) to learn how to delete items using the item's unique id.

---

# **API Documentation**

Check our [documentation on the V School Todo API](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21) to learn how to use it.

[V School's Todo API Documentation](https://www.notion.so/V-School-s-Todo-API-Documentation-9066d3bb43fb4ee98f242d24759fbc35?pvs=21) 

---

# **Styling ideas:**

If you want some *pretty* looking ToDo list website examples take a look [HERE](https://www.google.com/search?q=todo+list&espv=2&biw=1483&bih=865&source=lnms&tbm=isch&sa=X&ved=0CAYQ_AUoAWoVChMIlKjcxNSQxwIVRJaICh3CjAk-#tbm=isch&q=bootstrap+todo)