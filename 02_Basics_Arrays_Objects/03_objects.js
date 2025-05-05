// objects are non primitve datatypes in js which allows us to store data in key value pairs

// BY default the dataType of the keys in objects are string

// singleton objects are created when we create objects using the constructor
// singleton means ye apni tarah ka ek hi object hai

// Object.create  // constructor method to create the object

const mySym = Symbol("key1") // using symbol as a key
const jsUser= {    // literal method to create the  object
    name:"  Gaurav",
    age: 18,
    isloggedIn:false,
    email:"abcd@gmail.com",
    loginDays: ["monday","Thrusaday","Saturday"],
    "max sal" :10000,
    // mySym: "mykey1"
    [mySym]: "mykey1"  // using symbol as a key inside an object we will have to wrap it around []
}
console.log(jsUser);
console.log("Symbol->",jsUser[mySym])

// to print the data of the objects we generally use the . operator

console.log(jsUser.age);

// but we can also access them using this method
// This method is useful when we are dealing with a key of different format for example the max sal will not be printed usint the . operator
console.log(jsUser["age"])
console.log(jsUser["max sal"])

console.log(jsUser[mySym]); // to print the values of a data where symbol is key use  []

console.log(typeof mySym)
console.log(jsUser)
console.log(mySym)


// we can also add functions inside  the object

jsUser.greeting = function(){
    console.log(`Hello Js user ${this.name}`)
}
console.log(jsUser.greeting) // this will print just the function because it is the reference
console.log(jsUser.greeting()) // this will make the function call


// we can change the values of the object simply using the dot notation jsUser.value = modified value

// we can freeze the object so that no further modifications can be made

jsUser.email="xyz@gmail.com"

// syntax to freeze the object so that we can't modify it further
Object.freeze(jsUser) ; 

// this change will not be applied because the object is freezed but no error will be generated
jsUser.email="xydsfsdfdsz@gmail.com"  
console.log(jsUser)

// use of symbol

let name =Symbol("gaurav")
let name2 =Symbol("gaurav")
console.log(name===name2)