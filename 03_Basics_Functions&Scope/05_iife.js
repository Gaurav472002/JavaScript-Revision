// Immediately Invoked Function Expressions  (IIFE)
/* this function is invoked immediately after it is defined. */
/* this is usually used in files where we put for example a function that connects to the database and we want to run it immediately when an application starts */

/*writing iife we can immediately invoke the function as well as we can protect our function from the pollution of the global scope 
like from variables and functions of global scope  */

// this is a named iife
(function chai(){
    console.log('DB - CONNECTED')
})() ;  // making the function iife


// chai() // how we normally call a function

// to make an iife just wrap the function around the () and then attach another () to immediately invoke it

// two iifes will not work until this semicolon is provided at the end of first iife



// ()()=>{}() 

// this is an unnamed iffe written through the arrow function
(
    (name)=>{
        console.log(`Db is connected ${name}`)
    }
)("Gaurav"); // we pass the argument here in iifes



(()=>console.log("Hello Ji"))();

