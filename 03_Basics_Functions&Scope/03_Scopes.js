
{
    // this region is called the scope where the variables or the functions are accessible
}

// Scopes in javascript determines the accessibility of variables, objects and functions in different parts of the code.

var c=300;
let a =300;

// this is called the block scope where the values are accesible only inside this scope
// and the values declared outside this scope is called the global scope values declared in the global scope is accessible everywhere
{
    let a =10;
    const b =20;
    var c =30;
    console.log("Inner c:",c)
    console.log("Inner a:",a)
}
// a will print the value 300 not 10 because we are in the global scope here 10 will not be printed because a of above is not accesible here
console.log(a); 

// b will not  be printed because b is not accesible here

// console.log(b);  

// c also  shouldn't have printed but it will be because variables declared using the var is global and it is an exception

// The value of c bill be 30 not 300 because the value of c is changed in the inner scope and it is accessible here as well
console.log(c);  // this will print the inner value of c =30 which is declared using var


/* the problem with the keyword var, is if someone else has also declared the var c with some another value he will expect 
it to print the required value but 30 will be printed 
Suppose you have created multiple functions where you are using the variable i in the for loops if you declare i using the var keyword
then the value of i in a loop will not be limited and it will be shared to other loops as well which will created problems for you. 
*/



// the global scope is different when we run our code on live browser and through node in our own pc

/*-----------------------------------------------*/

// SCOPE LEVELS



function one(){
    const userName ="Gaurav"

    function two(){
        const website ="google"
        console.log(userName);   // the userName is accessible here
    }
    // console.log(website); // this will give error because website is defined inside the second function and it is not accessible outside 

    two(); // calling the function
}

one()
// considering an analogy we can say that a child can access parent's properites but a parent can't access child properties
// the same happened here if one function is the parent and the two function is the child one can't access the variables of two function but 
//two can access one's property this property is called lexical scoping 

// the same principle is applied for  if else statements as well

if(true){
    const userName ="Gaurav"
    if(userName=="Gaurav"){
        const website ="google"
        console.log(userName+website)
    }
    // console.log(website); // this will generate error as this is out of the scope of the nested if statement
}
// console.log(userName) // this will also generate error as it is out of scope of if statement as well


/* ------------------Interesting-------------------------*/

// normal function

console.log(addOne(5)) // this will not generate error even if we are calling the function before declaring it

function addOne(num){
    return  num+1
}

/****************** HOISTING ******************/
/* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the compile phase, but how exactly they are moved depends on how you have declared them. This is because of the way the JavaScript engine works. */

/* When we declare a function in the following way, the function is hoisted to the top of the scope. So we can call the function before declaring it. */

addOne(5) // this will not generate error even if we are calling the function before declaring it
function addOne(num){
    console.log(num+1);
}

/* But when we declare a function using a const variable, the function is not hoisted to the top of the scope. So we cannot call the function before declaring it. */

addTwo(5) // this will generate error as we are calling the function before declaring it
const addTwo = function(num){
    console.log(num+2);
}