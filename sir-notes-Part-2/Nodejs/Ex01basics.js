console.log("Testing the Js function for Nodejs")

//alert("Hello world") =>Does not work in Nodejs, so is confirm and prompt. 

console.log(Math.sqrt(125))

const data = [123,23,45,67]
console.log(data)
for (const key in data) {
    console.log(`key: ${key}, value: ${data[key]}`)
}

console.log(JSON.stringify(data))
