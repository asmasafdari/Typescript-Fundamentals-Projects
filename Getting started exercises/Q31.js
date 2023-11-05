"use strict";
let names = ["Admin", "Iqbal", "Qasim", "Amir", "Okasha"];
function greetuser(names) {
    if (names.length === 0) {
        console.log("We need to get users!");
        return;
    }
    for (const name of names) {
        if (name.toLowerCase() === "Admin") {
            console.log("Hello Admin, What are we geting sone today");
        }
        else {
            console.log("Greetings " + names + " We are at your services");
        }
    }
}
console.log(`For non empty username:\n`);
greetuser(names);
