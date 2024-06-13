"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["abbu", "ammi", "bhaijaan"];
let canNotAttend = "bhaijaan";
let newguest = "zubair";
guestArray[guestArray.indexOf(canNotAttend)] = newguest;
// guestArray.map((items)=> console.log(`hi,${items} you are invited to dinner
guestArray.unshift("arshad");
let middleGuest = "sadia";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("misbah");
console.log("we can invite only two people for dinner");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nsorry ${removeguest} we cant invite you to dinner`);
}
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner`));
guestArray.splice(0, 2);
console.log(guestArray);
