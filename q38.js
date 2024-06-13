"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "country") {
    console.log(`${city} is in  ${country}.`);
}
describe_city("karachi", "pakistan");
describe_city("lahore");
describe_city("london", "england");
