"use strict";
// Create an array to store a list of countries
const countries = [
    'USA',
    'Canada',
    'France',
    'Japan',
    'Australia',
];
// Create TypeScript objects to store information about cities
const cityInfo = {
    NewYork: {
        name: 'New York',
        population: 8622698,
    },
    Toronto: {
        name: 'Toronto',
        population: 2731571,
    },
    Paris: {
        name: 'Paris',
        population: 2140526,
    },
    Tokyo: {
        name: 'Tokyo',
        population: 13929286,
    },
    Sydney: {
        name: 'Sydney',
        population: 5230330,
    },
};
console.log('List of Countries:', countries);
console.log('City Information:');
for (const city in cityInfo) {
    if (cityInfo.hasOwnProperty(city)) {
        console.log(`City: ${cityInfo[city].name}, Population: ${cityInfo[city].population}`);
    }
}
