// Understanding apply in js

// Call and apply do the same thing
// Only difference is we can pass the arguments via an array list in apply

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

// greet.call(User1,22,"India");
// greet.call(User2,23,"Russia");

greet.apply(User1, [22,"India"]);
greet.apply(User2, [23,"Russia"]);

// In mordern JS is less commonly used
// We can follow the below syntax

const args = [22, "India"];
greet.call(User1, ...args);
