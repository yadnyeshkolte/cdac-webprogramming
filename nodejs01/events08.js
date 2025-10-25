const events = require("events")

const button = new events();

button.on("clickit", () => {
    console.log("button is clicked");
})

button.emit("adv"); // it will not working
button.emit("clickit")

console.log("end of the program")