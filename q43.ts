function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}
function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}
let magician_names =[" haary","don", "chris"]

let copy_magician_names = magician_names.slice();

 let copy_great_magician = make_great(copy_magician_names);

 console.log("orignal array\n");

 show_magicians(magician_names);
 console.log("\ncopied array\n")

 show_magicians(copy_great_magician);

