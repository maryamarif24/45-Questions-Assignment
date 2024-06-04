let magicians: string[] = ["Salar", "Jihaan", "Umer"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}


function make_great(magicians:string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(magician, "the Great");
    })
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
