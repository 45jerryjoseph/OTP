import express from 'express';
import dotenv from "dotenv";
import sqlite3 from 'sqlite3';
import usersRoute from "./routes/users.js";

const app = express();
const connect = async() => {
    try {
        let db = new sqlite3.Database('/home/jerryj/Jerry/BSSC/OTPform/backend/db/users.db', (err) => {
            if (err) {
                return console.error(err.message);

            }
            console.log("Connected to the in-memory Sqlite database");
        });
    } catch (error){
        console.log("Connection Failure");

    }
}
app.use("/users",usersRoute);
app.listen(8080, () => {
    connect();
    console.log("Connected to backend")
});
