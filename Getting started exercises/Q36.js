"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_Shirt = (size, message) => {
    console.log("Size: " + size + ", Message: " + message);
    return "size: " + size + ", Message: ";
};
let size = "S";
let message = "PIAIC GENERATIVE AI";
make_Shirt(size, message); //made with variables
make_Shirt("XL", "PAIAC WEB 3.0"); // direct function
