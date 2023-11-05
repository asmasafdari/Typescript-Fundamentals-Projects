"use strict";
const MagicName = ["David Blanie", "Harry Houdini", "Uri Geller"];
function shows_magicians(MNames) {
    for (const name of MNames) {
        console.log(name);
    }
}
function making_great(MNames) {
    const makegreat = MNames.map(MNames => "Honorable Great " + MNames);
    return makegreat;
}
const Greatnames = making_great(MagicName);
console.log("True OG Magicians: ");
shows_magicians(MagicName);
console.log("\nGreat Magicians!: ");
shows_magicians(Greatnames);
