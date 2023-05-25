ES : EcmaScript (Javascript)

Javascript version ES2015, ES2016
integrated with the Browser (Chrome, Firefox)

ES2015 (ES6)

// json-server

To run a mocking server using json-server on sample data, run:

json-server ./data/db.json

OR

npx json-server .\data\db.json --host 0.0.0.0

Then you can go to browser and see the results at the URLs:

http://localhost:3000/tasks
http://localhost:3000/tasks/1
http://localhost:3000/tasks/2

// Promises in javascript

Each promise represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
The code looks like this:

const promise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});

### Routes required for backend

POST http://localhost:4000/tasks => Add new task

PATCH http://localhost:4000/tasks/:id => Update task

GET http://localhost:4000/tasks => Get all tasks

