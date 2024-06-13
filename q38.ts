function describe_city(city: string , country: string = "country"){
    console.log(`${city} is in  ${country}.`);
}
describe_city("karachi", "pakistan")
describe_city("lahore");
describe_city("london", "england")