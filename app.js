const express = require('express');
const path = require("path")
const app = express();

app.get("/" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/index.html"));
})

app.get("/style.css" , (req, res) => {
    res.contentType("text/css");
    res.sendFile(__dirname + "/style.css");
})

app.get("/script.js" , (req, res) => {
    res.contentType("text/js");
    res.sendFile(__dirname + "/script.js");
})

app.get("/fa.png" , (req, res) => {
    res.status(200);
    res.contentType("image/png");
    res.sendFile(path.join(__dirname, "/fa.png"));
})



app.get("/about" , (req, res) => {
    res.status(200);
    res.contentType("text/html");
    res.sendFile(path.join(__dirname, "/about.html"));
})

app.get("/about.css" , (req, res) => {
    res.contentType("text/css");
    res.sendFile(__dirname + "/about.css");
})

app.get("/about/team_photo" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "team.jpg"));
})

app.get("/2.jpg" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/2.jpg"));
})

app.get("/ava.png" , (req, res) => {
    res.status(200);
    res.contentType("image/png");
    res.sendFile(path.join(__dirname, "/ava.png"));
})

app.get("/group-photo" , (req, res) => {
    res.status(200);
    res.contentType("image/jpg");
    res.sendFile(path.join(__dirname, "/gr.jpg"));
})

app.get("/video",(req, res) =>res.redirect
('https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps'))


app.set("port", 3000 || process.env.PORT)
app.listen(app.get("port"), () => {
    console.log(`Express server is running on localhost:${app.get("port")}. Press CTRL+C to terminate...` )

});