// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName: string = "Eric";
let message: string = "Hello " + personName + ", would you like to learn some Python today?";
console.log(message);


// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
personName = "Eric";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
console.log(toTitleCase(personName));














