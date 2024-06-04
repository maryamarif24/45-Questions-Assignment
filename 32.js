var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log(newUser, "will need to enter a new username.");
    }
    else {
        console.log(newUser, "is available");
    }
});
