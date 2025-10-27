Events are actions performed on the object by the users directly or indirectly.  Examples could be click, mouse move, mouse leave etc. Most of the Windows Apps use these events to perform an operation after an action is executed(triggered) on it. It follows a listener pattern design. 

U can create UR own events for UR Application as notification messages when a user performs a certain action with the object. Performing crud operations on the object could be certain actions in the real world. once the addition is successfull, U could trigger an event notifying that the addition was completed to the user. 

An event has 3 things to work. Creating an event, triggering an event and handling what needs to be done if the event triggers. 
```node
const events = require("events");//Events is the built in module available in Nodejs for using events in UR code. 

const button = new events();//create an event object.
button.on("abc", function(){
    console.log("Abc event was triggered")
})//specify a name/register an event and tell what it does(Event handler)

button.on("click", () => console.log("Click event is triggered"))

//Raise/Trigger the event in the code using emit function.
button.emit("bcd");//Will not have any effect as no event by name bcd is registered. 
button.emit("abc");
button.emit("abc");
button.emit("click");//Clicking the action..
button.emit("click");
button.emit("click");
button.emit("click");
button.emit("click");

console.log("End of the Program")
```
 
 1. create the event object.
 2. on method should be used to register the event and map the handler.
 3. emit method is used to raise the event appropriately.

--- 

- Js is single threaded language but it can handle asynchronous operations using callbacks, promises, and async/await syntax. It internally uses an event loop to manage these operations without blocking the main thread.
- Some of the popular ways to handle asynchronous programming in JavaScript are: callbacks, promises, and async/await syntax. Typically we use them for operations like fetching data from an API, reading files, or performing time-consuming computations.
- Callbacks: A function passed into another function to be executed later, once a certain operation is complete.
- Async/Await: Syntactic sugar built on top of promises that allows writing asynchronous code in a more synchronous fashion.
- Promise: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

Creating a new Promise object that shall resolve the long standing operation and return the data when the operation is complete. Every Promise object takes a function with 2 parameters: resolve and reject. The function contains the code for the asynchronous operation or operations that take longer time to complete. Once completed successfully, resolve is called with the result. If there is an error, reject is called with the error message.

```node
const fetchData = new Promise((resolve, reject) => {
   //Block that takes time to complete, e.g., fetching data from a server
    console.log("Fetching data from server...");
   try {
       setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        if(data.id != 1){
            reject("Invalid data fetched");
        }
        console.log("Data fetched successfully");
        resolve(data);
       }, 5000);
   } catch (error) {
         reject("Error fetching data: " + error.message);//Call reject when there is an error 
   }
   console.log("Continuing with other operations while data is being fetched...");
});

```

Using async/await syntax for this same example

```node
async function fetchDataAsync(){
    try {
        const data = await fetchData; //await is used to wait for the promise to resolve
        console.log("Data received using async/await: ", data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();
```
