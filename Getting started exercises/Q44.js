"use strict";
function orderSandwich(...items) {
    console.log("Sandwich Order:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss", "Tomato", "Mustard");
orderSandwich("Peanut Butter", "Jelly");
