"use strict";
const placesToVisit = [
    'Tokyo',
    'Paris',
    'New York',
    'Machu Picchu',
    'Istanbul',
];
console.log('Original Order:', placesToVisit);
console.log('Alphabetical Order:', [...placesToVisit].sort());
console.log('Original Order:', placesToVisit);
console.log('Reverse Alphabetical Order:', [...placesToVisit].sort().reverse());
console.log('Original Order:', placesToVisit);
placesToVisit.reverse();
console.log('Reversed Order:', placesToVisit);
placesToVisit.reverse();
console.log('Original Order:', placesToVisit);
console.log('Sorted Alphabetical Order:', placesToVisit.sort());
console.log('Sorted Reverse Alphabetical Order:', placesToVisit.sort().reverse());
