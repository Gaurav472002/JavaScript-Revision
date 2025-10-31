1️⃣ Scope

var → Function-scoped (ignores block {})

let, const → Block-scoped (limited to {} block)

2️⃣ Hoisting

All are hoisted to the top of their scope.

var → initialized with undefined (can be accessed before declaration)

let, const → hoisted but not initialized (exist in Temporal Dead Zone → accessing before declaration gives ReferenceError)

3️⃣ Redeclaration

var → ✅ Allowed (can redeclare in same scope)

let, const → ❌ Not allowed (throws error if redeclared)

4️⃣ Reassignment

var → ✅ Allowed

let → ✅ Allowed

const → ❌ Not allowed (must be assigned once)

5️⃣ Global Object Behavior

Global var → becomes property of global object (window.varName)

Global let / const → does not become property of global object

6️⃣ Common Problems with var

Not block-scoped → accessible outside loops or if-blocks

Hoisted with undefined → leads to unexpected results

Redeclaration overwrites existing variables silently

Pollutes global scope → increases name conflict risk

7️⃣ How let and const Solve Them

Introduce block scope → safer, predictable behavior

Use Temporal Dead Zone (TDZ) → prevents accessing before declaration

Prevent redeclaration → reduces accidental overwriting

Don’t attach to global object → no global pollution

8️⃣ Best Practices

✅ Use const by default

✅ Use let only if reassignment is needed

🚫 Avoid var — it’s outdated and unsafe in modern JS
