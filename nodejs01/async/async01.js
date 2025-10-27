
console.log("it is anync file to be rendered")

const fetchData = new Promise((resolve, reject) => {
    try{
        setTimeout(() => {
            const data = {id:12, name: "yadnyesh",city:"akola"}
            resolve(data);
        }, 2000)
    }
    catch(error){
        reject("Error is there could you please resolve"+error.message)
    }
})

fetchData.then(printingData).catch(err => {console.log("It is the error")});

function printingData(data){

    console.log(data)
    console.log("The fetched data is "+JSON.stringify(data))
    //console.log(data)
}



