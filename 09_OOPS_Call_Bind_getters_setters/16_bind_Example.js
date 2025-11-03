/*
====================================================
 Understanding bind() in JavaScript (Real-world Example)
====================================================

Scenario:
We have a Button class with a `handleClick` method.
We’ll see what happens when:
  1️⃣ We DON’T use bind()
  2️⃣ We DO use bind()
====================================================
*/

// ---------------- WITHOUT BIND ----------------
class ButtonWithoutBind {
  constructor(text) {
    this.text = text;
  }

  handleClick() {
    // Here, we expect `this` to refer to the class instance
    console.log("Without bind → this.text:", this.text);
  }
}

const btn1 = new ButtonWithoutBind("Submit");

// Simulate a button element (for demo purpose only)
const fakeButton1 = document.createElement("button");
fakeButton1.textContent = "Button 1 (No Bind)";
document.body.appendChild(fakeButton1);

// When the button is clicked, browser calls handleClick()
// BUT — in event listeners, `this` refers to the DOM element, NOT the class instance
fakeButton1.addEventListener("click", btn1.handleClick);

/*
🧠 EXPECTED OUTPUT (when you click):
Without bind → this.text: undefined

Explanation:
- The function `handleClick()` is passed as a callback.
- When the event occurs, browser calls it with `this` = <button> DOM element.
- Since <button> has no `text` property, we get undefined.
*/



// ---------------- WITH BIND ----------------
class ButtonWithBind {
  constructor(text) {
    this.text = text;

    // ✅ Bind 'this' to the class instance permanently
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("With bind → this.text:", this.text);
  }
}

const btn2 = new ButtonWithBind("Upload");

// Simulate another button element
const fakeButton2 = document.createElement("button");
fakeButton2.textContent = "Button 2 (With Bind)";
document.body.appendChild(fakeButton2);

// This time, the function is already bound to the class instance
fakeButton2.addEventListener("click", btn2.handleClick);

/*
🧠 EXPECTED OUTPUT (when you click):
With bind → this.text: Upload

Explanation:
- We used `bind(this)` inside the constructor.
- That permanently ties the method to the class instance.
- So even when the method is used as an event listener,
  `this` still refers to the ButtonWithBind object (not the DOM button).
*/



/*
====================================================
🔍 Summary

| Case               | What `this` refers to           | Output                  |
|--------------------|--------------------------------|--------------------------|
| Without bind()     | The <button> DOM element       | undefined                |
| With bind()        | The Button class instance      | Correct text value       |

✅ bind() helps us "link" a function permanently to a particular object
   so that `this` inside it always points to that object,
   regardless of how or where the function is called.
====================================================
*/
