var myGuests = ["Haya Suleiman", "Cihan Sikander", "Khadija Sikander"];
var notComing = "Khadija Sikander";
console.log(notComing, "would not be able to attend the dinner.");
console.log("--------------------------------");
var newGuest = "Imama Hashim";
myGuests[myGuests.indexOf(notComing)] = newGuest;
myGuests.forEach(function (myGuests) {
    console.log('Dear', myGuests, ', would you like to join me for dinner?');
});
