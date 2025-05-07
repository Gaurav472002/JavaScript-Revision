// suppose you are a developer at flipkart and you are writing a function to calculate the prize of the cart items
// You don't know right ki how many items are going to come in the cart so you will have to manage it dynamically

function calculatePrice(price){
    return price;
}
console.log(calculatePrice(100))
// suppose this function keeps getting prices and it will have to return the total price every time

function calculatePrice2(price){
    return price;
}
// we will have to bundle this data together to find the total sum
console.log(calculatePrice2(100,200,300)) // this will also print 100 but we want 600


// this ... is called the spread  operator in js but  this is also called  operator but the usecases are different

function calculatePriceAllPrice(...price){
    return price;
}
console.log(calculatePriceAllPrice(100,200,300)); // this will return us an array [100,200,300] on which we can loop and calculate the price


function calculatePriceDifferently(price1,price2,...allPrices){
    return allPrices
}
console.log(calculatePriceDifferently(100,200,300,400,500));
// here [300,400,500 ] will be bundled in the array and returned and 100 will go to price 1 and 200 will go to price 2
// we might have to use the spread operator along with other values so we can follow this format


// calculating the total price of the cart using a for of loop on the array returned by the rest operator
// Here ... signfies rest operator and it will bundle all the values in an array and we can loop through it using for of loop
function calculateTotalPrice(...price){
    let totalPrice=0;
    for(itemPrice of price){
        totalPrice+=itemPrice;
    }
    return totalPrice;
}

console.log(calculateTotalPrice(100,200,300,400,500));



// passing object to the function

const user ={
    name:"Gaurav",
    age:18
}

// object destructuring so that we don't have to write user.name and user.age every time
function handleObject({name,age}=anyobject){
    console.log(`the user name is ${name} and the age is ${age}`)
}
handleObject(user)

// we can directly create the object in the function call as well
handleObject({
    name:"Ram",
    age:18
})

//  passing array to the function

const myArray =[100,200,300]

function printarray(ogarray){
    console.log(ogarray[0])
}

printarray(myArray)
// we can create the array and pass it directly in the function call as well
printarray([1,2,3])
