//Events are actions performed on the object by the users directly or indirectly.  Examples could be click, mouse move, mouse leave etc. Most of the Windows Apps use these events to perform an operation after an action is executed(triggered) on it. It follows a listener pattern design. 
//U can create UR own events for UR Application as notification messages when a user performs a certain action with the object. Performing crud operations on the object could be certain actions in the real world. once the addition is successfull, U could trigger an event notifying that the addition was completed to the user. 
//An event has 3 things to work. Creating an event, triggering an event and handling what needs to be done if the event triggers. 

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

/** 
 * create the event object.
 * on method should be used to register the event and map the handler. 
 * emit method is used to raise the event appropriately.
*/