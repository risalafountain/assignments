see workshop as well 

# **Adding Comments to Your RTV**

In this comprehensive guide, we'll walk you through the process of adding a comments feature to your MERN (MongoDB, Express, React, Node.js) application. Comments are a valuable addition, allowing users to engage in discussions, provide feedback, and foster a sense of community around your content. We'll cover both the backend and frontend implementation of this feature.

## **Backend Implementation:**

### **1. Define the Comment Schema**

To start, you need to define the structure of a comment. In your backend code (using Mongoose for MongoDB), create a Comment schema that includes fields such as `text`, `user`, and `issue`:

```jsx
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the user who posted the comment
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue' // Reference to the issue the comment is related to
    }
});

module.exports = mongoose.model("Comment", CommentSchema);

```

### **2. Implement the Comment Routes**

Now, let's set up the necessary routes for comments in your Express server:

- **Creating a Comment (POST):**

Create a route to allow users to post comments. This route should extract the user's ID from the authenticated request and associate it with the comment. It should also associate the comment with a specific issue using `req.params.issueId`:

```jsx
commentRouter.post('/:issueId', (req, res, next) => {
      // Attach the user who posted the comment
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId; // Link the comment to the issue
    const newComment = new Comment(req.body);

    newComment.save((err, savedComment) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedComment);
    });
});

```

## **Frontend Implementation:**

### **3. Fetching Comments at the Application Level:**

In your `App.jsx`, you can set up the `useEffect` to fetch comments once when the application loads. This ensures that comments are fetched when the app starts, and not repeatedly:

```jsx
import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserContext'; // Import your UserContext
import axios from 'axios';

function App() {
    const { getAllComments } = useContext(UserContext); // Access the getAllComments function from the context

    // Fetch all comments once when the application loads using the context's getAllComments function
    useEffect(() => {
        getAllComments(); // Use the function from the context
    }, []); // Empty dependency array ensures this effect runs only once when the app starts
}

```

### **4. Displaying Comments at the Issue Level with Filtering:**

In the `Issue` component, you can continue to filter and display comments at the issue level. You should pass the issue's `_id` as a prop to each `Issue` component, and within the component, use the `.filter` method to show only the comments related to that specific issue:

```jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Import your UserContext

function Issue(props) {
    const { comments } = useContext(UserContext); // Access comments from the context
    const { _id } = props.issue; // Assuming you have an issue object

    // Efficiently filter comments for the current issue
    const filteredComments = comments.filter(comment => comment.issue === _id);
}

```

### **5. Posting New Comments with Issue Association and Updating State:**

When posting a new comment using the `postNewComment` function, not only are you associating the comment with a specific issue but you're also ensuring that the frontend view remains updated in real-time. Here's the code:

```jsx
function postNewComment(newComment, issueId) {
    axios.post(`/api/comments/${issueId}`, newComment)
        .then(res => {
            // Update the comments state with the new comment
            setComments(prev => [...prev, res.data]);
        })
        .catch(err => console.log(err));
}

```

The reason we pass the `issueId` is that, in your backend route, you have set up a route parameter for the `issueId`. This parameter allows the server to determine which issue the comment is associated with. By passing the `issueId` when making the POST request, you are telling the server explicitly which issue this comment relates to. This association is essential for organizing and displaying comments correctly within the context of specific issues.

Equally important is the update to the frontend state. After successfully posting a comment, the new comment received as `res.data` is added to the `comments` state using `setComments`. This ensures that the user interface immediately reflects the new comment, creating a seamless and responsive user experience.

The state management in React is a powerful mechanism for keeping the frontend updated with the latest data, and in this case, it ensures that your comment system remains real-time and user-friendly. Users can post comments and see them appearing instantly after posting, fostering active and dynamic discussions in your application.

Incorporating this efficient comment management method enhances the user experience by displaying relevant comments while improving the overall performance of your application. Users can easily engage in discussions, and the comment system remains responsive and real-time, creating a dynamic and engaging platform for interaction.