let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin! Would you like to see a status report?");        
    } else {
        console.log("Hello,", username, "Thankyou for logging in again.");
    }
});