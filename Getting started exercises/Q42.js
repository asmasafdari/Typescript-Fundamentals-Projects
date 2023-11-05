"use strict";
const MagicNames = ["David Blanie", "Harry Houdini", "Uri Geller"];
function show_magicians(MNames) {
    for (const name of MNames) {
        console.log(name);
    }
}
function make_great(MNames) {
    const makegreat = MNames.map(MNames => "Honorable Great " + MNames);
    return makegreat;
}
const greatnames = make_great(MagicNames);
console.log("True OG Magicians: ");
show_magicians(MagicNames);
console.log("\nGreat Magicians!: ");
show_magicians(greatnames);
