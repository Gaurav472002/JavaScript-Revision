/* ***************** CLOSURE ************************* */
// a closure gives you access to an outer function's scope 
// from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function makeFun(){
    const name ="Gaurav"
    function displayName(){
        console.log(name)

    }
    return displayName; // we are not calling the function like previous cases we are returning it's reference
    // the whole lexical scope of the innner function is retured 
    // if this happens then how will it get executed because as we return the functikn it's execution context will be gone

    // so when we do this not only displayName function is returned but it's whole [ lexical scope] is retured means 
    // the whole makeFun function will be returned that is the outer function will be returned

    // because the inner function needs variables of the outer function the lexical scope of the function is returned
    
    // so the whole memory is shared not only the execution context of the respective function which is returned




    
}

const myFunc = makeFun()
myFunc()

function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(counter);
  };
}

const count = outer(); // outer() runs, and returns inner()
count(); // 1
count(); // 2
count(); // 3

