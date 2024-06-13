function create_car(manufacturer:string, model:string, ...options:string[]){
    type Car = {
        [key: string]: any
    }
    let car: Car = {
        manufacturer:manufacturer,
        model: model
    };

options.forEach(options => {
    let [key, value] = options.split(":");
    car[key.trim()] = value.trim();
});
return car;
}
let my_car = create_car("toyota","corolla","colour:black", "wheel");
console.log(my_car);