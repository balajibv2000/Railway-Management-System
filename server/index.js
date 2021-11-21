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

app.delete("/passenger/:pid" , async (req , res) => {
    try {
        const {pid} = req.params;
        const deletePassenger = await pool.query("DELETE FROM passenger WHERE pid = $1" , [ pid ])
        
        res.json("passenger was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/employee" , async(req , res) => {
    try {
        const {fname , lname , eid , dob ,  phone_no , gender , salary} = req.body;
        const newEmployee = await pool.query(
            `INSERT INTO employee (fname , lname , eid , dob ,  phone_no , gender , salary )
            VAlUES ($1 , $2 , $3 , $4 , $5 , $6 , $7) RETURNING *` , 
            [fname , lname , eid , dob ,  phone_no , gender , salary]
        );

        res.json(newEmployee.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

app.get("/employee" , async(req , res) => {
    try{
        const allEmployee = await pool.query("SELECT * FROM employee");
        res.json(allEmployee.rows)
    } catch(err) {
        console.error(err.message);
    }
})

app.get("/employee/:eid" , async(req , res) => {
    try{
        const { eid } = req.params;
        const passenger = await pool.query("SELECT * FROM employee WHERE eid = $1" , [eid]);

        res.json(passenger.rows)
    } catch(err) {
        console.error(err.message);
    }
})

app.delete("/employee/:eid" , async (req , res) => {
    try {
        const {eid} = req.params;
        const deletePassenger = await pool.query("DELETE FROM employee WHERE eid = $1" , [ eid ])
        
        res.json("employee was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/train" , async(req , res) => {
    try{
        const allTrains = await pool.query("SELECT * FROM train INNER JOIN time_table ON train.train_no = time_table.train_no");
        res.json(allTrains.rows)
    } catch(err) {
        console.error(err.message);
    }
})

app.get("/station" , async(req , res) => {
    try{
        const allStations = await pool.query("SELECT * FROM station");
        res.json(allStations.rows)
    } catch(err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});