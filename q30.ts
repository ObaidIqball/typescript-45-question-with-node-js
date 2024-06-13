let users: string[] = ["arshad", "ali","john","sam","admin"]
for(let  user of users){
    if(user === "admin"){
        console.log("hello admin,would you like to see a status report? ")
    }
    else{
        console.log(`hello $(user), thank you for logging in again. `)
    }
}
