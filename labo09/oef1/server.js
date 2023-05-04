const express = require('express');
const bp = require('body-parser');

const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tripsdb'
});

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post("/trips", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err){
            throw err;
        }
        else{
            connection.query(`insert into trips (plaats,kosten) values ("${req.body.plaats}", ${req.body.kosten})`, (err, rows) => {
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

app.post("/trips/:id", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err){
            throw err;
        }
        else{
            connection.query(`insert into trips (plaats,kosten) values ("${req.body.plaats}", ${req.body.kosten})`, (err, rows) => {
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

app.get("/trips", (req, res) =>{
    pool.getConnection((err, connection) => {
      if (err) {
        throw err;
      }
      else{
        connection.query(`select * from trips`, (err, rows) => {
            if (err) {
                console.log(err);
            }
            else{
                res.send(rows);
            }
        })
      }
    })
});

app.get("/kosten", (req,res) =>{
    let totkosten = 0;
    pool.getConnection((err, connection) => {
        if (err) {
          throw err;
        }
        else{
          connection.query(`select kosten from trips`, (err, rows) => {
              if (err) {
                  console.log(err);
              }
              else{
                  for (let i = 0; i < rows.length; i++) {
                    totkosten += rows[i].kosten;
                  }
                  res.send({totkosten})
              }
          })
        }
      })
});

app.get("/trips/:tripid", (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
          throw err;
        }
        else{
          connection.query(`select kosten from trips where tripid = ${req.params.tripid}`, (err, rows) => {
              if (err) {
                  console.log(err);
              }
              else{
                  res.send(rows);
              }
          })
        }
      })
})
app.listen(3000, () => {
    console.log('Server started on port 3000');
});