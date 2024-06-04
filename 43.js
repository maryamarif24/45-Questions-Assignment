var magicians = ["Salar", "Jihaan", "Umer"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push(magician, "the Great");
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
