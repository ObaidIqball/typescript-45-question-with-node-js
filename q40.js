"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_Album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_Album("ladyGaga", "The Fame");
let album2 = make_Album("zayn", "Mind of mine");
let album3 = make_Album("rihaana", "loud");
console.log(album1);
console.log(album2);
console.log(album3);
function make_Album2(artistName, albumTitle, numberofTrack) {
    return { artistName, albumTitle, numberofTrack };
}
let album4 = make_Album2("edSheeran", "Divide", 7);
let album5 = make_Album2("britneySpears", "Circus", 13);
let album6 = make_Album2("atifAslam", "Adaat", 1);
console.log(album4);
console.log(album5);
console.log(album6);
