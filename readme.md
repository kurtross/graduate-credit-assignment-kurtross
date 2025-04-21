What's Up With async/await?

Async/await is a way to handle asynchronous operations in JavaScript. An asynchronous operation is a task that runs in the background and allows the program to continue executing other code without waiting for the task to complete. Async/await is made up of promises. A Promise is a representation of the eventual completion (or failure) of an asynchronous operation. Once an asynchronous operation finishes, it notifies the program so the result can be processed. 

In other words, the program makes a promise that something will happen, but it can continue doing other tasks in the meantime (async/asynchronously). It'll wait (await) until the thing that's promised comes true or for there to be an error before doing the next thing. Once the thing that was promised does (or doesn't) happen, some result will happen. 


There are two parts to async/await: 

The async function declares a function as asynchronous and returns a promise. 

The await keyword pauses the execution of an async function until the promise is resolved or rejected. The await keyword can only be used inside an async function. 

Have a look at the minimal examples in the "minimalist-examples" folder. 

async/await could be useful for a bunch of things in the MEAN (Mongodb, Express, Angular, Node) stack that we're learning like the following. I'll put an example for each one I outline her in the "async/await-mean-examples" folder. 

Example 1 -Database Queries
It could be used for database queries using mongoose (our lovely MongoDB middleware) to fetch things from MongoDb. 

Example 2 - CRUD (Create, Read, Update, Delete) Operations
async/await can be used for crud operations with MongoDB/mongoose. 

Example 3 - Express API
In Express, async/await can be used to handle logic in route handlers, like when the program interacts with an API. 