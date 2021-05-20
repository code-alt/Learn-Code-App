const express = require('express');
const app = express();

app.get("/:route:", (req, res) => {
    if (require('fs').existsSync(__dirname + "/static" + req.path)) {
        res.sendFile(__dirname + "/static" + req.path);
    } else {
        res.sendFile(__dirname + "/static/404/index.html")
    }
})

app.listen(3000 || process.env.PORT);