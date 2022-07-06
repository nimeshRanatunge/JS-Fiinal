Use a Set when your dataset needs to be composed of unique values
Use a Map when you have pairs of associated data. You map the keys to the values

const letters = new Set(["a","b","c"]);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

////////////////////////////////////////
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})

//////////////////////////////////////
// Create an Iterator
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}

A Set can hold any value of any data type