/*
Whatever we pass inside resolve() will be received by the .then() block when the promise is fulfilled.

Whatever we pass inside reject() will be received by the .catch() block as an error when the promise is rejected.
*/

/*** PROMISES USING .then and .catch *****/


let promiseOne = new Promise((resolve,reject)=>{
    
    console.log("Fetching the data ...");
    
    setTimeout(()=>{
        
        let flag =0;
        
        if(flag){
            resolve("Data fetched successfully from the database");
        }
        else{
            reject("Sorry failed to fetch the data");
        }
        
    },2000)
})

// Consuming the Promise using the .then and .catch method
promiseOne.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})

// Consuming the Promise using the async and await


async function fetchData() {
  console.log("Fetching the data ...");

  let result = await promiseOne; // waits for promiseOne to settle
  console.log(result);
}

// fetchData();

/* Problem with above method is it will break if the promise is rejected so we will handle this using try and catch block */

async function fetchDataSafely(){
    console.log("Fetching the data ...");
    
    try{
        let result = await promiseOne; 
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

fetchDataSafely();
