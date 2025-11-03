// Apply, call and bind in javascript

// Understanding the call function

//Invokes a function immediately, setting its this context manually

let User ={
    name: "Gaurav",
    age: 18,
    greet : function(){
        // Without using this keyword we can't access the properties of the objects
        console.log(`Hi ${this.name} ! Good Morning`);
    }
}

User.greet();

// Suppose we create another smiilar object and want to use the greet function of the first object
let User2 ={
    name: "Saurav",
    age: 18
}
// User2.greet(); // this will throw an error
// We can borrow the function using the call function
User.greet.call(User2);


// Suppose now the same function is defined outside and now it is a generic function that is not limited to any object and can be access by any object

 let greet =function(){
        
        console.log(`Hi ${this.name} ! Good Morning`);
    }

let User1 ={
    name: "Gaurav",
    age: 18,
   
}
let User2 ={
    name: "Saurav",
    age: 18,
   
}

greet.call(User1);
greet.call(User2);

