import sqlite3 from 'sqlite3';
import CryptoJS from 'crypto-js';
const db = new sqlite3.Database('/home/jerryj/Jerry/BSSC/OTPform/backend/db/users.db')

export const register = async(req,res) =>{
    const {firstname, lastname, email} = req.body;
    const encpassword = CryptoJS.AES.encrypt(req.body.password,process.env.encCode).toString();
    try {
        // checkEmailExists here
        const sql = `INSERT INTO users (FirstName, LastName, Email, Password) VALUES (?,?,?,?   )`;
        db.run(sql,[firstname,lastname,email,encpassword], (err)=>{
            if (err){
                // res.status(err.status).json(err.message);
                console.log(err)
            } else {
                res.status(201).json({message: "User created succesfully"});
            }
        }

        );
        // res.json(req.body)
    } catch (err) {
        console.log(err)
    }
}

export const login = async (req,res) => {
    const {email} = req.body;

    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        db.get(sql,[email], (error, row)=>{
            if (error){
                console.error(error);
                return;
            }

            if (row){
                const {Password,...otherDetails} = row;
                // console.log(row.Password)
                const bytes = CryptoJS.AES.decrypt(Password,process.env.encCode);
                // console.log(bytes)
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
                // console.log(originalPassword);
                // res.json(originalPassword);
                originalPassword !== req.body.password && res.status(401).json("Wrong password or Username");
                // console.log(`User password: ${Password}`)
                res.status(200).json({details :{...otherDetails}})
            } else {
                console.log('user not found');
            }
        });



    } catch (err) {
        res.status(500).json(err)
        
    }
}