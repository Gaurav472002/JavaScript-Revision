// Arrays in js are objects that allows us to store collection of items in a single variable
// Arrays in js are resizable  and allows us to  store different dataTypes in a single Place
// Elements are accessed through the indexes

const myArr = [0,1,2,3,4,true,false,"Gaurav"];
console.log(myArr);
console.log(typeof myArr) // the type of array is object in js

// arrray operations in javascript creates shallow copies. All the copied arrays will share the same reference point
// so if you copy an array the changes made in the copy will be made in the original array as well
const arr1=[1,2,3]
const arr2=arr1
arr2[1]=100; // due to shallow copy the changes will  be reflected in both the arrays
console.table([arr1,arr2])

const heros =["IronMan", " SuperMan"]

const new_Array = new Array(1,2,3,4) // creating array  using the constructor method
console.log(new_Array);

// METHODS OF ARRAY

new_Array.push(100); // to push element at the end of the array
console.log(new_Array);

new_Array.pop() // to delete an element from the end of the array
console.log(new_Array);

// to PUSH ELEMENT AT THE FIRST INDEX OF THE ARRAY
new_Array.unshift(121); 

console.log(new_Array);

// to REMOVE THE FIRST ELEMENT OF THE ARRAY
new_Array.shift();

console.log(new_Array);

// another few useful array method methods

console.log(new_Array.includes(121));
console.log(new_Array.indexOf(3));

// convert whole array values to a string using the join method
const modifiedArray = new_Array.join(); // this will bind the array and the type will be converted to string bind means 
//from [1,2,3] to just 1,2,3 and the type will be strign 

console.log("binded array is",modifiedArray);
console.log(typeof modifiedArray);

// SLICE AND SPLICE METHODS


const ogArray = [0,1,2,3,4,5];

console.log("A",ogArray);

// slice method returns an modified array based on the start and end range values but does not modify the original array
const array1 = ogArray.slice(1,3);  //return elements from index 1 to 3-1
console.log("B",array1)   // this will print 1,2
console.log(ogArray) // but no changes in the original array 

// the splice method is used to add or remove elements from the array and it modifies the original array
// it takes 3 arguments first is the index from where to start removing elements, second is the number of elements to be removed and third is the element to be added
const array2 = ogArray.splice(1,3)
console.log("B",array2)  // this will print 1,2,3 not excluding the last index
console.log(ogArray) // but the original array will be affected now and it will be [0,4,5]

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); 
// At position 2, add "Lemon" and "Kiwi" but before that delete 1 element at position 2
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);



