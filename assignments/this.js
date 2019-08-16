/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: In global binding, the 'this' keyword will be the window/console object.
* 2. Implicit Binding: This is when a function is called, then the 'this' keyword is referring to the object left of the dot of 'this'.
* 3. New Binding: This is when constructor function is created and then 'this' is referrimg to the "new object" being created using that constructor.
* 4. Explicit Binding: This occurs when the .call, .apply, and .bind methods are used to "push" an object into another object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globeBind(thing) {
  console.log(this);
  return thing;
}

globeBind("Herb");

// Principle 2

// code example for Implicit Binding



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
