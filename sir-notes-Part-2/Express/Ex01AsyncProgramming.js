//Js is single threaded language but it can handle asynchronous operations using callbacks, promises, and async/await syntax. It internally uses an event loop to manage these operations without blocking the main thread.
// Some of the popular ways to handle asynchronous programming in JavaScript are: callbacks, promises, and async/await syntax. Typically we use them for operations like fetching data from an API, reading files, or performing time-consuming computations.
//Callbacks: A function passed into another function to be executed later, once a certain operation is complete.
//Async/Await: Syntactic sugar built on top of promises that allows writing asynchronous code in a more synchronous fashion.
//Promise: An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Example of callback function:

//In the first example, we will use a callback function to perform arithmetic operations. The 3rd parameter is a callback function that performs the operation. This function shall be implemented by the caller of invokeArithematicOperation function. The caller decides what operation to perform.
function invokeArithematicOperation(first, second, callback){
   //do some validation if required
   if(typeof first !== 'number' || typeof second !== 'number'){
       throw new Error("Invalid input, both inputs must be numbers");
   }
   //Then we invoke the callback function
   const result = callback(first, second);
   console.log("The result of the operation is: " + result);
}

function add(a, b){
   return a + b;
}
// console.log("Program started");
// try {
//     invokeArithematicOperation(5, "test", add);//add function is passed as callback to invokeArithematicOperation.     
// } catch (error) {
//     console.error(error.message);
// }
// console.log("Program ended");
/////Example of setTimeout function: setTimeout is a built-in JavaScript function that allows you to execute a function after a specified delay (in milliseconds). It is commonly used to simulate asynchronous behavior or to schedule tasks to be executed later.
// function callMeAfterSomeTime(){
//     console.log("Operation will be executed after some time");
// }
// setTimeout(callMeAfterSomeTime, 2000);//milliseconds.
// console.log("This message is displayed immediately");

////////////////Promise Example:
//A Promise is an object that represents a completion or a failure of a certain asynchronous operation and its resulting value. Promise takes 2 parameters: resolve and reject. Resolve is called when the operation is successful, and reject is called when there is an error. They are both Callback functions. 


//Creating a new Promise object that shall resolve the long standing operation and return the data when the operation is complete. Every Promise object takes a function with 2 parameters: resolve and reject. The function contains the code for the asynchronous operation or operations that take longer time to complete. Once completed successfully, resolve is called with the result. If there is an error, reject is called with the error message.
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


//This function is created to be called when the promise is resolved successfully.
// function resolvingLogic(data){
//     console.log("Data received in then: ", data);
// }
//Call the fetchData, it takes some time to fetch the data. Then calls UR resolvingLogic function when the data is fetched successfully.
// fetchData.then(resolvingLogic)
// .catch(err =>{
//     console.error(err);
// });//then is called when the promise is resolved successfully.
// console.log("This message is displayed immediately after calling fetchData");


//using async/await syntax for this same example
async function fetchDataAsync(){
    try {
        const data = await fetchData; //await is used to wait for the promise to resolve
        console.log("Data received using async/await: ", data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();