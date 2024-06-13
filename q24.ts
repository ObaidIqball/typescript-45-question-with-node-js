let car: string = 'subaru';
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];

// string test
//test 1: equality (true)
console.log("is car == 'subaru'? ipredict true.");
console.log(car =='subaru'); //true (case-insensitive)

// // test2: strict equality (false)
console.log("is car === 'subaru'? i predict false,");
console.log(car ==='subaru'); // false (case-sensitive)
// // test 3 : inequality (false)
console.log("is car != 'toyota'? i predict true.");
console.log(car !== 'toyota'); // true
 
// // test 4 :inequality (false)
console.log("is car !== 'subaru'? i predict fasle.");
console.log(car !== 'suabru'); //fasle (case-sensitive)
// //  lower case function test
// // test 5 lower-case conversion(false)
console.log("is car.toLowerCase() == 'subaru'? i predict true.");
console.log(car.toLowerCase() == 'subaru'); //false (orignal value remains uppercase)
// //test 6 lowercase-consversion
console.log("is car === car.toLowerCase()? i predict false.");
console.log(car === car.toLowerCase()); // false origanlvalue remains same

// // numeric test
// // test 7: equalty (true) 
console.log("is age == 25 ?i predict true.");
console.log(age == 25); //true

// // test 8 inequality(false
    console.log("is age != 30 ?i predict false.");
    console.log(age != 30); //true
//     // test 9 : grater than (false)
    console.log("is age > 30 ?i predict fasle.");
    console.log(age > 30);// false
    
//     //test 10:  les than or equal to(true)
    console.log("is age <= 25 ? i predict true.");
    console.log(age <= 25); //true
     
//     //logical operator
//     // test 11: and (true)
    console.log("is age > 20 && age < 30 ?i predict true.");
    console.log(age > 20 && age < 30); // true both condition
//     // test 12 :or (false)
    console.log("is age > 30 || age < 18 ? i predict false.");
    console.log(age > 30 || age < 18); //false (neither condition met)
    // array test
     // test 13 in aaray
     console.log("is 3 in numbers?ipredict true");
     console.log(3 in numbers);
     // test 14 not in aaray (false)
     console.log("is 6 not in numbers? i predict true");
     console.log(6  in numbers); // true (negation of "in" operator)

