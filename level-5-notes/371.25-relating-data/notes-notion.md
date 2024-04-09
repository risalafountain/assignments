
# Overview

Learn how to connect different data models to each other in a one to many relationship.

# Lesson Video

https://www.youtube.com/watch?v=xi6zaNsP8JI&list=PL1whVIy6oz7PXKvf9ivEtmXbkR7-QOa0I&index=37&t=0s

# Understanding the One-to-Many Relationship in Express and Mongoose

In web development, it's common to encounter scenarios where you need to establish relationships between different entities in your application's database. One such relationship is the "one-to-many" relationship, where one entity is associated with multiple instances of another entity. In this guide, we'll explore the concept of a one-to-many relationship and how it is implemented using Express.js and Mongoose, a popular library for MongoDB.

## 1. Introduction to One-to-Many Relationship

In a one-to-many relationship, one entity (e.g., an author) can have multiple related instances of another entity (e.g., books). This relationship is a fundamental concept in database design and is essential for structuring and organizing data efficiently.

In the provided code, we'll focus on how to establish a one-to-many relationship between authors and books using Express.js and Mongoose. Authors will be associated with multiple books, allowing us to create, retrieve, and manage this relationship.

## 2. Code Implementation

To implement a one-to-many relationship between authors and books, we start with defining our Mongoose schema for the "Book" entity. The schema includes fields such as "title," "likes," and a reference to the "Author" entity using the "author" field.

```jsx
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
});

```

Now, let's explore how this relationship is implemented in the code.

## 3. Creating a New Book

In the code, there's a route for creating a new book associated with a specific author. When a POST request is made to this route, the author's ID is extracted from the URL parameters (req.params.authorID). This ID is then assigned to the "author" field in the new book's data. A new book instance is created based on the received data, and it is saved to the database.

```jsx
bookRouter.post('/:authorID', (req, res, next) => {
    req.body.author = req.params.authorID;
    const newBook = new bookSchema(req.body);
    newBook.save((err, savedBook) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedBook);
    });
});

```

This code allows you to create a new book and associate it with a specific author, demonstrating the "one" side of the one-to-many relationship.

## 4. Retrieving Books by Author

In the code, there's also a route for retrieving books associated with a particular author. When a GET request is made to this route, the author's ID (req.params.authorID) is used as a query parameter to find all books in the database that have the same author ID. These books are then returned as a response.

```jsx
bookRouter.get('/:authorID', (req, res, next) => {
    Book.find({ author: req.params.authorID }, (err, books) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(books);
    });
});

```

This code demonstrates how you can retrieve multiple books associated with a specific author, showcasing the "many" side of the one-to-many relationship.

## 5. Conclusion

Understanding and implementing a one-to-many relationship is crucial in building data-driven applications. In the context of Express.js and Mongoose, we've seen how to establish this relationship between authors and books. You can create new books associated with authors and retrieve books by their respective authors using the provided code.

By using the principles demonstrated in this code, you can create more complex and robust one-to-many relationships in your Express.js applications. This knowledge is valuable for building applications that involve multiple entities with various associations. Happy coding!

# Next Up

[MongoDB $ Methods](https://www.notion.so/MongoDB-Methods-b6a5f26f98024309bc0c60bf4f879365?pvs=21)