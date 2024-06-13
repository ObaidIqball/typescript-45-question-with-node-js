let guestArray:string[]= ["abbu","ammi","bhaijaan"];

let  canNotAttend:string = "bhaijaan";
console.log(`${canNotAttend} can not make it,for dinner`);
let newguest :string = "zubair";
guestArray[guestArray.indexOf(canNotAttend)]=newguest;
guestArray.map((items)=> console.log(`hi,${items} you are invited to dinner`));

