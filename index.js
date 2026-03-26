const express = require("express");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express()
app.use(express.json())
const dbPath = path.join(__dirname,"users.db");

let db = null;
const initializeDBAndServer = async() => {
    try{
        db = await open({
        filename: dbPath,
        driver : sqlite3.Database
    });
    app.listen(3000 , () => {
        console.log("Server is Running at http://localhost:3000/")
    });
    } catch(e){
        console.log(`DB Error : ${e.message}`);
        process.exit(1)
    }
};

// Get all users 
app.get("/users",async(request,response) => {
    const getUsersQuery = `SELECT * FROM users ORDER BY name ASC;`;
    const AllUsers = await db.all(getUsersQuery);
    response.send(AllUsers);
});

// Get one user 
app.get("/users/:id",async(request,response) => {
    const {id} = request.params;
    const getUserQuery = `SELECT * FROM users WHERE id=${id};`;
    const SingleUser = await db.get(getUserQuery);
    response.send(SingleUser);
});

// Add one user 
app.post("/users", async(request,response) => {
    const userDetails = request.body;
    const {name,email} = userDetails;
    const addUserQuery = `INSERT INTO users (name,email) VALUES ( '${name}' , '${email}' );`;
    const dbResponse = await db.run(addUserQuery)
    const userId = dbResponse.lastID; 
    response.send({userId:userId})

});

// Update user 
app.put("/users/:id", async(request,response) => {
    const {id} = request.params;
    const userDetail = request.body;
    const {name,email} = userDetail;
    const updateUserQuery = `UPDATE users SET name='${name}',email='${email}' WHERE id=${id};`;
    await db.run(updateUserQuery);
    response.send("User Updated Successfully");
})


// Delete One User
app.delete("/users/:id", async(request,response) => {
    const {id} = request.params;
    const deleteUserQuery = `DELETE FROM users WHERE id=${id};`;
    await db.run(deleteUserQuery);
    response.send("User Deleted Successfully");
})



initializeDBAndServer();


























// const express = require("express")
// const app = express()

// app.get("/",(request,response) => {
//     response.send("Hello World")
// })

// app.get("/date",(request,response) => {
//     let date = new Date();
//     response.send(`Today Date is ${date}`)
// })


// app.listen(5000) 
 