let current_users: string[] = ["user1", "admin", "user3" ,"user4", "user5"];
let new_user: string[] = ["user1", "user6", "user7","admin","user8"];
new_user.forEach((newUser) => {
    if(
        current_users.some(
        (currentUser) =>currentUser.toLowerCase() === newUser.toLowerCase()
    
        
    )




){
    console.log(`${newUser}will need to enter a new username.`);
}else {
    console.log(`${newUser}is available.`);
}
});