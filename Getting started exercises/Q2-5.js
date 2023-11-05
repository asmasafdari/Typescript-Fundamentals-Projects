"use strict";
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Eric";
let message = "Hello " + personName + ", would you like to learn some Python today?";
console.log(message);
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
personName = "Eric";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function toTitleCase(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
    }
    return words.join(' ');
}
const titleCaseName = toTitleCase(personName);
console.log(titleCaseName);
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
