"use strict";
const current_users = ["Ammar", "Zia", "Amir", "Imran", "Hamzah"];
const new_users = ["AMMar", "Okasha", "Shehzad", "Iqbal", "Qasim", "zia"];
function checkusername(current_users, new_users) {
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase);
    for (const newuser of new_users) {
        const loercasedNewUser = newuser.toLowerCase();
        if (loercasedNewUser.includes(loercasedNewUser)) {
            console.log("Username " + newuser + " is already taken");
        }
        else {
            console.log("Username " + newuser + " is available");
        }
    }
}
checkusername(current_users, new_users);
