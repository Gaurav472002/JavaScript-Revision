/*****************************
 * 🌟 JavaScript Event Notes
 *****************************/

/*
🧩 1️⃣ EVENT
---------------
An event is any user interaction:
→ click, keypress, mouseover, etc.

Example:
*/
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});


/*
🌊 2️⃣ EVENT BUBBLING (Default)
--------------------------------
Event moves from child → parent → document (bottom to top).
*/
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked!");
});
// Output when clicking child:
// Child clicked!
// Parent clicked!


/*
🌊 3️⃣ EVENT CAPTURING (Top-down)
--------------------------------
Use 3rd argument as `true` in addEventListener().
Event moves parent → child (top to bottom).
*/
document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent clicked! (capturing)");
  },
  true // enable capturing
);

document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked!");
});
// Output when clicking child:
// Parent clicked! (capturing)
// Child clicked!


/*
🛑 4️⃣ stopPropagation()
------------------------
Stops event from propagating further (in either bubbling or capturing).
*/
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child clicked!");
  event.stopPropagation(); // Stops bubbling up
});

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked!");
});
// Output when clicking child:
// Child clicked!


/*
🧠 SUMMARY TABLE
----------------
| Concept              | Direction        | Notes                                 |
|----------------------|------------------|----------------------------------------|
| Event                | –                | User action like click/key press       |
| Bubbling (default)   | child → parent   | Handlers fire bottom-up                |
| Capturing            | parent → child   | Enable with 3rd arg = true             |
| stopPropagation()    | –                | Stops event movement further           |
*/
