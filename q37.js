"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_tshirt(size = "large", message = "i love typescript") {
    console.log(`making a ${size} t-shirt with the mesage "${message}" printed on it.`);
}
make_tshirt();
make_tshirt("small");
make_tshirt("medium", "dive into coding");
