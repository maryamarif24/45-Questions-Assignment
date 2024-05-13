var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favPlace = ["Turkey", "South Korea", "Maldives", "Canada", "Manchester"];
console.log("Original Order:", favPlace);
console.log("Alphabetical Order:", __spreadArray([], favPlace, true).sort());
console.log("Reverse Alphabetical Order:", __spreadArray([], favPlace, true).sort().reverse());
favPlace.reverse();
console.log("Reversed Order:", favPlace);
favPlace.sort();
console.log("Alphabetical Order:", favPlace);
favPlace.reverse();
console.log("Reverse Alphabetical Order:", favPlace);
