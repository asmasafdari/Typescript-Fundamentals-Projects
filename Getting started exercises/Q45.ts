function carInformation(manufacturer: string, model: string, ... options: [string, any][]): any  {
    const carInfo : any = {
        manufacturer,
        model,
    };
    for (const [key, value] of options ) {
carInfo[key] = value
    }
    return carInfo;
}

let myCar1 = carInformation("Toyota", "Camry", ["color",  "blue"], ["feature", "sunroof"]);
console.log(myCar1);
