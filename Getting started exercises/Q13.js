"use strict";
let favTransport = [];
favTransport.push(["Bike", "Kawasaki"]);
favTransport.push(["Bus", "Peoples Bus"]);
favTransport.push(["Car", "Koeinsegg"]);
console.log(favTransport);
favTransport.forEach(([transport, brand]) => {
    console.log("I would like to own a " + brand + " " + brand);
});
