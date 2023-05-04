const express = require('express');
const bp = require('body-parser');

const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ekvoetbal'
});

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/ploegen', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err){
            throw err;
        }
        else{
            connection.query('select * from ploegen', (err, rows) => {
                connection.release();
                if (err){
                    console.log(err);
                }
                else{
                    res.send(rows);
                }
            });
        }
    })
});

app.get("/ploegen/:id", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err){
            throw err;
        }
        else{
            connection.query(`select * from ploegen where id = ${req.params.id}`, (err, rows) => {
                connection.release();
                if (err){
                    console.log(err);
                }
                else{
                    res.send(rows);
                }
            });
        }
    })
});

app.delete("/ploegen/:id", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err){
            throw err;
        }
        else{
            connection.query(`delete from ploegen where id = ${req.params.id}`, (err, rows) => {
                connection.release();
                if (err){
                    console.log(err);
                }
                else{
                    res.send(rows);
                }
            });
        }
    })
});


app.post("/ploegen", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err){
            throw err;
        }
        else{
            connection.query(`insert into ploegen (name) values ("${req.body.name}")`, (err, rows) => {
                connection.release();
                if (err){
                    console.log(err);
                }
                else{
                    res.send(rows);
                }
            });
        }
    })
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});