const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"));

app.get("*", (req,res) => {
    res.sendFile(__dirname + "/static/404/index.html");
});

app.listen(3000 || process.env.PORT);