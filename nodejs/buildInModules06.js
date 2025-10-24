const operating = require('os');

console.log("Operating System Info:");
console.log("Type:", operating.type());
console.log("Platform:", operating.platform());
console.log("Architecture:", operating.arch());
console.log("Total Memory:", operating.totalmem());
console.log("Free Memory:", operating.freemem());
console.log("Home Directory:", operating.homedir());
console.log("Uptime (seconds):", operating.uptime());
console.log("Number of CPUs:", operating.cpus().length);
for(const cpu of operating.cpus()){
    console.log(`Model is ${cpu.model} || Speed is ${cpu.speed}MHz`);
    console.log(JSON.stringify(cpu.times.idle));
}

const fs = require('fs');

console.log("\nFile System Operations:");

fs.writeFileSync('sample.txt', 'This created by javascript nodejs fs module','utf-8');

const data = fs.readFileSync('sample.txt','utf-8');
console.log("File Content:", data);

fs.appendFileSync('sample.txt','\n This the new line added thought node js','utf-8');
const newdata = fs.readFileSync('sample.txt','utf-8');
console.log("Updated File Content:\n", newdata);