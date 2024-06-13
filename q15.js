"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestArray = ["abbu", "ammi", "bhaijaan"];
let canNotAttend = "bhaijaan";
console.log(`${canNotAttend} can not make it,for dinner`);
let newguest = "zubair";
guestArray[guestArray.indexOf(canNotAttend)] = newguest;
guestArray.map((items) => console.log(`hi,${items} you are invited to dinner`));
