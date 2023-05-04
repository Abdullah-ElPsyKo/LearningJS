const express = require("express");
const app = express();
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

let trips = [];

trips.push({
    reis : "Spanje",
    tripid : 1,
    uitgaven : [100, 200]
},
{
    reis : "Frankrijk",
    tripid : 2,
    uitgaven : [200]
})



app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/htmlfile.html")
})

app.post("/trips", (req,res)=>{
    console.log(req.body)
    let trip = {
        reis : req.body.reis,
        tripid : trips.length + 1,
        uitgaven : [parseInt(req.body.uitgaven)]
    };
    trips.push(trip);

    res.redirect("/trips");
    console.log(trips);
})

app.get("/trips", (req,res)=>{
    let html = "<ul>";
    for (let i = 0; i < trips.length; i++) {
        html += "<li><a href='/trips/" + trips[i].tripid + "'>" + trips[i].reis + "</a></li>";
    }
    html += "</ul>";
    res.send(html);
})
app.get("/kosten", (req,res)=>{
    kosten = 0;
    for (let i = 0; i < trips.length; i++) {
        for (let j = 0; j < trips[i].uitgaven.length; j++) {
            kosten += trips[i].uitgaven[j];
        }
    }
    res.send("<p>Totaal: " + kosten + "</p>");
})
function totaalBerkenen(uitgaven){
    let totaal = 0;
    for (let i = 0; i < uitgaven.length; i++) {
        totaal += uitgaven[i];
    }
    return totaal;
}

app.get("/trips/:tripid", (req,res)=>{
    res.sendFile(__dirname + "/htmlfile2.html")
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].tripid == req.params.tripid) {
            res.send("<p>Reis: " + trips[i].reis + "</p>" + "<p>Uitgaven: " + trips[i].uitgaven + "</p>" + "<p>Totaal: " + totaalBerkenen(trips[i].uitgaven))
        }   
    }
})


app.post("/trips/:tripid", (req,res)=>{
    let id  = req.body.id;
    console.log(id);
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].tripid == id) {
            trips[i].uitgaven.push(parseInt(req.body.uitgaven));
        }
            
    }
    res.redirect("/trips/" + id);

    console.log(trips);
})


app.listen(3000, err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("de webserver luistert op poort 3000")
    }
})

