"use strict";
const anim = ["Horse", "Camel", "Goat"];
console.log("List of animals");
for (const list of anim) {
    console.log(list);
}
console.log("\nStatements on Animals: ");
for (const list of anim) {
    if (list === "Horse") {
        console.log("A " + list + " is the best animal");
    }
    else if (list === "Camel") {
        console.log("A " + list + " was a very widely used mode of transport in the desert");
    }
    else if (list === "Goat") {
        console.log("A " + list + " is used for getting milk and also to be enjoyed on Eid");
    }
}
console.log("\nWhat do they all have in common you may ask");
console.log("They are all mammals!");
