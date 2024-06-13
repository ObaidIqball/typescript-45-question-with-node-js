let guestArray:string[]= ["abbu","ammi","bhaijaan"];

let  canNotAttend:string = "bhaijaan";

let newguest :string = "zubair";
guestArray[guestArray.indexOf(canNotAttend)]=newguest;
// guestArray.map((items)=> console.log(`hi,${items} you are invited to dinner`));
console.log ("welcome all we found a bigger dinner table");
guestArray.unshift("arshad");
let middleGuest:string = "sadia";
let middleIndex =guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);
guestArray.push("misbah");
guestArray.map((item)=> console.log(`\nDear ${item} you are invited to dinner!`));