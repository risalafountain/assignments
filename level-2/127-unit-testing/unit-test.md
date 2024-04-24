# Unit Testing (replace unit/test w/ functions)
    * (FROM GOOGLE) UNIT TESTING is a level of software testing where individual units/ components of a software are tested.  A unit is the smallest testable part of any software. It usually has one or a few inputs and usually a single output
    
    * Why Test?
        * Essential for programs being worked on by many developers at once as it allows a developer
        to add to the existing code and then run the tests to make sure what they have added to the
        program has not caused another part of the program to fail.
        
        * Approaching a program with testing in mind creates an stronger overall program as you are approaching each individual section with tests.  In practice this produces fewer bugs and better thought out code.
        
    * TDD (Test Driven Development, aka Red Green testing)
        * Test Driven Development is a method in writing code that requires you to write your test before writing your function. 
        * At first the test will fail producing a "red" failed test in the console.
        * As you develop the function, you are shooting for all "green" in the console meaning all your tests have passed.

# **What is unit testing?**

Unit testing is the practice of breaking your program into smaller pieces and inspect each piece with tests.

Tests run when changes are made to the code in your projects. The more often you run your tests the better.This helps you catch problems sooner and write better code.

# **Why should we be unit testing our code?**

When new developers hear of unit testing their first thoughts are why? Doesn't this add more work and more code? In reality, by making a test for each piece of application we improve a number of things.

- Makes your code easier to understand by forcing you to write out the expected output of your program.
- Makes it easy to add new features. Normally when we add new code we have to go through the application and make sure it still works as it did before. Now we can simply run are tests and have proof that it works as it did before.
- Protects your code against other developers. By writing out the way your program should behave if other developers change your code they will see immediately see when they break the application.

# **How?**

Many frameworks and tools exist to help developers easily write and run unit tests. The frameworks we will be using to write unit tests are Mocha and Chai.

Mocha website:https://mochajs.org/

Chai:http://chaijs.com/

### **Mocha**

Mocha is a test runner. It's sole job is to look for (or be told where to find) unit tests you've written, and to execute them. It also displays in a nice, easy format to show you how your unit tests faired - how many passed, how many and which ones failed.

### **Chai**

Chai is an assertion library. Chai's libraries allow you to choose exactly how your unit tests should read to a developer. There are three libraries you get to choose from: **assert**, **expect**, and **should**.

All of these libraries essentially do the same thing, just with slightly different syntaxes. For simplicity, we're going to use the **assert** library, but you should definitely check out how tests are written in the **expect** and **should** libraries. (It's pretty nice, because they read like english).