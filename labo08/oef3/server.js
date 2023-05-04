const express = require("express");
const app = express();
const bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/todolist.html")
})

let ToDoList = [];
let done = [];

app.post("/todo", (req,res)=>{
    ToDoList.push(
        {
            "todo": req.body.todo,
            "done": false,
            "id": ToDoList.length
        }
    )
    res.redirect("/")
    console.log(ToDoList)
})

app.post('/remove/:id', (req, res) => {
    let itemId = req.body.id;
    console.log(req.body.id);
    ToDoList[itemId].done = true;
    done.push(ToDoList[itemId]);
    ToDoList.splice(parseInt(itemId),1)
    res.redirect("/")
    console.log(ToDoList)
})

app.get("/done", (req,res)=>{
    res.send(done)
}
)

app.get("/todo", (req,res)=>{
    res.send(ToDoList)
}
)


app.listen(3000, err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("de webserver luistert op poort 3000")
    }
})

