const chai = {
    name: "ginger-chai",
    price:80,
    isAvailabe:true,

    orderChai : function(){
        console.log("OBJECT KA FUNCTION")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name")) // here all the values will be true by default they are changeable

// modifying the editable values of the object

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false // this will stop the iteration  means we cant apply loops on the object 
})

Object.defineProperties() // define multiple properties

// value will not be changed but we will also not get errors

chai.name="adrak"
console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"name"))