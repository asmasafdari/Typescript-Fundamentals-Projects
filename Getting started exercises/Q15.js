"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Initial guest list
let guestList = ["Albert Einstein", "Nelson Mandela", "Oprah Winfrey"];
let NotAttending = "Albert Einstein";
let newInvitee = "Leonardo da Vinci";
console.log(`${NotAttending} can't make it to the dinner.`);
let UnableToAttend = guestList.indexOf(NotAttending);
if (UnableToAttend !== -1) {
    guestList[UnableToAttend] = newInvitee;
}
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. It would be an honor to have you as our guest.`);
});
