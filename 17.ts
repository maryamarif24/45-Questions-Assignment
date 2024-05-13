let myGuests : String[] = ["Haya Suleiman", "Cihan Sikander", "Imama Hashim"];


console.log("Great news! I have found a bigger dinner table.");



myGuests.unshift("Salar Sikander");
myGuests.splice(myGuests.length / 2, 0, "Inaya Sikander");

myGuests.push("Jibreel Sikander");

myGuests.forEach(myGuests => {
    console.log("Dear", myGuests, "would you like to join me for the dinner?");
});


console.log("----------------------------------");


console.log("Unfortunately, I can only invite two people for dinner.");

while (myGuests.length > 2) {
    let removedGuest = myGuests.pop();
    console.log("Sorry,", removedGuest, "I can't invite you to the dinner.");
};

myGuests.forEach(myGuests => {
    console.log("Dear", myGuests, "you are still invited to the dinner.");
});

myGuests.splice(0, myGuests.length);
console.log(myGuests);