"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `"${city}, ${country}"`;
    console.log(`"${city}, ${country}"`);
}
city_country("karachi", "pakistan");
let mycities = city_country("karachi", "pakistan");
console.log(mycities);
console.log(city_country("dubai", "UAE"));
console.log(city_country("london", "United Kingdom"));
console.log(city_country("Riyaz", "saudi Arabia"));
