function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}
function make_great(magician: string[]){
   return magician.map(name => `The Great ${name}`);
}
let magician_names =[" haary","don", "chris"]
 let great_magician = make_great(magician_names);
 //console.log(great_magician);
 show_magicians(great_magician);