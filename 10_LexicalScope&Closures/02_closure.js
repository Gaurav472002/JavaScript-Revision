/* ***************** CLOSURE ************************* */
// a closure gives you access to an outer function's scope 
// from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

/*
A closure is created when a function “remembers” variables from its outer (lexical) scope,
even after the outer function has finished executing. */

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

/* 
When outer() runs, it creates a variable counter = 0.

It returns the inner function inner() without executing it.

Even though outer() has finished,
the returned inner function still remembers the variable counter from outer()’s scope.

So each time you call count(),
it increments the same counter — because of the closure.

✅ This is exactly what a closure is —
an inner function “closing over” variables from its parent scope.
*/

///** REAL LIFE EXAMPLE FOR CLOSURES ***///
function bankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited ₹${amount}. Current Balance: ₹${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrew ₹${amount}. Remaining Balance: ₹${balance}`);
      }
    },
    getBalance() {
      console.log(`Balance: ₹${balance}`);
    }
  };
}

const myAccount = bankAccount(1000);
myAccount.deposit(500);   // ₹1500
myAccount.withdraw(300);  // ₹1200
myAccount.getBalance();   // ₹1200


