// Understanding bind in js

// Bind is simliar to apply and call but it doesn't calls the function immediately rather it stores the reference of the function and using that referece we can call the function later when it is needed

/* bind() helps us link (or lock) a function permanently to a particular object.”
No matter where or how this function is called, always treat this as referring to that object */

let greet =function(age, country){
        
        console.log(`Hi ${this.name} ! Good Morning`);
        console.log(`Your age is: ${age} ! and you are from ${country}`)
    }

let User1 ={
    name: "Gaurav"
   
}
let User2 ={
    name: "Saurav",
   
}



let fun1 = greet.bind(User1,22,"India");
let fun2 = greet.bind(User2,23,"Russia");

fun1();
fun2();

// More practical Example for bind

