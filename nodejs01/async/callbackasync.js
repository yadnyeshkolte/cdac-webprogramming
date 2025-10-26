//learning callback functiion

function add(num1, num2){
    return num1+num2;
}

function mul(num1, num2){
    return num1*num2;
}

function callingCallbackFunction(num1, num2, mayur, mayur2){  //async operatinns are going on
    let number = 0;
    let number2 = 0;
    setTimeout(() => {
        number = mayur(num1, num2);
        console.log(number)
        console.log(typeof mayur)

    }, 5000)
    
    setTimeout(() => {
        number2 = mayur2(num1, num2);
        console.log(number2)
        console.log(typeof mayur2)
    }, 1000)

    return number+number2;
}

let out = callingCallbackFunction(45, 2, add, mul);

console.log("The output is: "+out)

/*
Output

The output is: 0
90
function
47
function

  */
