"use strict";
function carInformation(manufacturer, model, ...options) {
    const carInfo = {
        manufacturer,
        model,
    };
    for (const [key, value] of options) {
        carInfo[key] = value;
    }
    return carInfo;
}
let myCar1 = carInformation("Toyota", "Camry", ["color", "blue"], ["feature", "sunroof"]);
console.log(myCar1);
