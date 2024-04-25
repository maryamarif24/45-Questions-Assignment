let myGuests : String[] = ["Haya Suleiman", "Cihan Sikander", "Khadija Sikander"];


let notComing : String = "Khadija Sikander";
console.log(notComing, "would not be able to attend the dinner.");


console.log("--------------------------------");

let newGuest = "Imama Hashim";
myGuests[myGuests.indexOf(notComing)] = newGuest;


myGuests.forEach(myGuests => {
    console.log('Dear', myGuests, ', would you like to join me for dinner?',)
})
