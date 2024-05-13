let favPlace: String[] = ["Turkey", "South Korea", "Maldives", "Canada", "Manchester"];

console.log("Original Order:", favPlace);

console.log("Alphabetical Order:", [...favPlace].sort());

console.log("Reverse Alphabetical Order:", [...favPlace].sort().reverse());

favPlace.reverse();
console.log("Reversed Order:", favPlace);

favPlace.sort();
console.log("Alphabetical Order:", favPlace);

favPlace.reverse();
console.log("Reverse Alphabetical Order:", favPlace);