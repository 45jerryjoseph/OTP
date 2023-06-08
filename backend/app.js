import express from 'express';
import dotenv from "dotenv";
import sqlite3 from 'sqlite3';
import usersRoute from "./routes/users.js";
import authRoute from "./routes/auth.js"

//configuring dotenv
dotenv.config();

const app = express();
app.use(express.json())
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
app.use("/api/users",usersRoute);
app.use("/api/auth",authRoute);

app.listen(8080, () => {
    connect();
    console.log("Connected to backend")
});
