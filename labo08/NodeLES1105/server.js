const express = require("express")
const http = require("http")
const app = express()
const bp = require("body-parser")

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

let users = []
users.push({
    "id":1,
    "naam":"Peeters"
})
users.push({
    "id":2,
    "naam":"Dams"
})


let dt = new Date()

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/start.html');
})

app.get("/users",(req,res)=>{
    res.send(users)
})

app.post("/users",(req,res)=>{
    console.log(req.body)
    let user = req.body
    users.push(user)

    console.log(users)

    res.status(201).send("post")
})

app.get("/login/:user/:pwd",(req,res)=>{

    let isLoginSuccess = false
    if(req.params.user == "tom" && req.params.pwd =="tom")
        isLoginSuccess = true

    res.send(isLoginSuccess)
})


app.get("/users/:id/:name",(req,res)=>{
   
    console.log(req.params)
    let user = undefined;
    for(let i=0; i<users.length; i++){
        if(users[i].id == req.params.id){
            user = users[i]
        }
    }

    res.send(user)
})

app.put("/",(req,res)=>{
    console.log("een put request" + dt.getDate())
    res.send("put")
})

app.post("/",(req,res)=>{
    console.log(req)
    //voeg iets in de database toe en als het gelukt is stuur je een 201 code terug
    res.status(401).send("post")
})

app.delete("/",(req,res)=>{
    
    console.log("een delete request")
    res.send("delete")
})




app.listen(3000, err=>{
    if(err)
        console.log(err)
    else
        console.log("de webserver luistert op poort 3000")
})