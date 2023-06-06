import express from 'express';
import sqlite3  from 'sqlite3';

const db = new sqlite3.Database('/home/jerryj/Jerry/BSSC/OTPform/backend/db/users.db');

const router = express.Router();

router.get("/", async(req,res) => {
    try {
        await db.all(
            `SELECT * FROM users;`, (err,rows) => {
                try {
                    rows.forEach(
                        row => {
                            console.log(row);
                            
                        }
                    );
                    // res.send(rows);
                    res.json(rows);

                } catch (err) {
                    console.log(err.message);
                }
            
            }
        )
        db.close();
    } catch (error) {
        console.log(error)
    }
});

export default router