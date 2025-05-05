
// DIFFERENT WAYS TO DECLARE VARIABLES IN JAVASCRIPT 

const  accountId = 14453 // the value will be constant we can't update it further
let accountEmail = "gaurav123@gmail.com"
var accountPass = "12345"
accountCity = "Kolkata" // this  fromat of declaring variables is not recommended
let accountState;  // the value will be undefined as it is not defined yet

// accountId=1234 // this is not allowed because we can't change the constant values
console.log(accountId)
console.table([accountId,accountEmail,accountPass,accountCity,accountState]) // using the table method we can print variables in tabular form

// var is not recommended to declare variables because it doesn't supports scoping
// if a programmer defines a variable var name = something then again a program can also redeclare this variable
// and the value for that variable will be changed everywhere

// Let solved the problem of scoping which used to be caused because of var

/* Don't use var because of the issue of block and functional scope */

