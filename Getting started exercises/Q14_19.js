"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ["Albert Einstein", "Nelson Mandela", "Oprah Winfrey"];
guest.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. It would be an honor to have you as our guest.`);
});
console.log(`You are inviting ${guest.length} people to dinner.`);
