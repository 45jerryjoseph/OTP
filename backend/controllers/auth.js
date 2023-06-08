import sqlite3 from 'sqlite3';
import CryptoJS from 'crypto-js';
const db = new sqlite3.Database('/home/jerryj/Jerry/BSSC/OTPform/backend/db/users.db')

export const register = async(req,res) =>{
    const {firstname, lastname, email, password} = req.body;
    const encpassword = CryptoJS.AES.encrypt(req.body.password, process.env.encCode ).toString();
    try {
        const sql = `INSERT INTO users (FirstName, LastName, Email, password) VALUES (?,?,?,?   )`;
        db.run(sql,[firstname,lastname,email,encpassword], (err)=>{
            if (err){
                // res.status(err.status).json(err.message);
                console.log(err)
            } else {
                res.status(201).json({message: "User created succesfully"});
            }
        }

        )
        // res.json(req.body)
    } catch (err) {
        console.log(err)
    }
}