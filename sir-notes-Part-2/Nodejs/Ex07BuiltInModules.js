//Nodejs has its own library of modules that developers can consume in their application. This includes filesystem, Http, os modules along with many more other modules. These modules can be imported/required and consumed in our programs. 
const readline = require('readline'); //readLine is a built in module for taking inputs from the User thru' Command Prompt. m
const fs = require("fs");//fs is a built in module of Nodejs that is used to perform read/write operations on the file system
//fs.writeFileSync("SampleText", "A sample string to write", 'utf-8') //this is a sync task where the app shall wait till the writing is complete. 

const fileName = 'Ex07BuiltInModules.js'
//const contents  = fs.readFileSync(fileName, 'utf-8')
//console.log(contents)

//Reading the file in async manner which is the feature of Nodejs
// fs.readFile(fileName, 'utf-8', function(err, data){
//     if(err){
//         console.log(`Error: ${err.message}`)
//         return;
//     }
//     console.log(data)
// })
////////////Taking Inputs from the user//////////////////////////////////


//readline creates an interface for std in and std output. 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = ""
let address = ""
let salary = ""

rl.question("Enter UR Name", function(answer){
    console.log(`Hello ${answer}`)
    name = answer
})

rl.question("Enter UR Address", function(answer){
    address = answer
})

rl.question("Enter UR Salary", function(answer){
    salary = answer
})
//assync
console.log(`The Name entered is ${name} from ${address} and earns ${salary} as salary`)

////////////////////Os Module//////////////////////////////
const os = require("os");
console.log(os.platform())
console.log("The memory is " + os.totalmem())
console.log("The available memory "+ os.freemem())
console.log("The total Cpus" + os.cpus().length)
const cpus = os.cpus();
for(const cpu of cpus){
    console.log(cpu.speed)
    console.log(cpu.model)
    console.log(JSON.stringify(cpu))
}
//Todo: convert the MB memory to GB  and display..

