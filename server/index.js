const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/passenger" , async(req , res) => {
    try {
        const {fname , lname , pid , dob ,  phone_no , gender} = req.body;
        const newPassenger = await pool.query(
            `INSERT INTO passenger (fname , lname , pid , dob ,  phone_no , gender )
            VAlUES ($1 , $2 , $3 , $4 , $5 , $6) RETURNING *` , 
            [fname , lname , pid , dob ,  phone_no , gender]
        );

        res.json(newPassenger.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

app.get("/passenger" , async(req , res) => {
    try{
        const allPassengers = await pool.query("SELECT * FROM passenger");
        res.json(allPassengers.rows)
    } catch(err) {
        console.error(err.message);
    }
})

app.get("/passenger/:pid" , async(req , res) => {
    try{
        const { pid } = req.params;
        const passenger = await pool.query("SELECT * FROM passenger WHERE pid = $1" , [pid]);

        res.json(passenger.rows)
    } catch(err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});