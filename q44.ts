

function sandwich(...items:string[]){
    console.log("\nmaking a sandwhich with the following items:\n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\n now enjoy sandwhich");

}
sandwich("chicken", "cheese", "mayo", "egg");

sandwich("bread", "butter");

sandwich("chicken" ,"tomato" ,"onion","cheese");