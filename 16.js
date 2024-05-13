var myGuests = ["Haya Suleiman", "Cihan Sikander", "Imama Hashim"];
console.log("Great news! I have found a bigger dinner table.");
myGuests.unshift("Salar Sikander");
myGuests.splice(myGuests.length / 2, 0, "Inaya Sikander");
myGuests.push("Jibreel Sikander");
myGuests.forEach(function (myGuests) {
    console.log("Dear", myGuests, "would you like to join me for the dinner?");
});
