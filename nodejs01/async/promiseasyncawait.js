//learning callback functiion
const fetchData = new Promise((success, fail) => {
    try{
        const data = {idno:2, name:"yadnyesh", city:"akola"}
        success(data);
        console.log("data fetch sucessfly");
    }
    catch(error){
        fail("Data is not fetched "+error)
    }
})

async function datafetching() {
    try{
        let fetchingdata = await fetchData;
        console.log(fetchingdata)
        console.log(fetchingdata.city)
    }
    catch(error){
        console.log("Async function is not working "+error);
    }
}

datafetching();
