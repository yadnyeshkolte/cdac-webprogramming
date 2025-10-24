const readline = require('readline');

const rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let name = "";
let age = "";
let salary = "";

/*
rs.question("Enter your name: ", function(input){
    name = input;
    console.log("Name is: " + name);
    rs.close();
});

rs.question("Enter your age: ",function(input){
    age = input;
    console.log("Age is: " + age);
    rs.close();
})

rs.question("Enter your salary: ", function(input){
    salary = input;
    console.log("Salary is: " + salary);
    rs.close();
})
*/
// This above code will not work as expected because rs.close() will terminate the input stream after first question
// This is the correct way to take multiple inputs from user

rs.question("Enter you name: ", function(inputname){
    name = inputname;
    rs.question("Enter your age: ", function(intputage){
        age = intputage;
        rs.question("Enter you salary: ", function(inputsalary){
            salary = inputsalary;
            console.log(`Name is ${name} || Age is ${age} || Salary is ${salary}`)
            rs.close();
        })
    })
})
