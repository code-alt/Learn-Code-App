const express = require('express');
const app = express();

app.get('*', (req,res)=>{ // I don't know if this will even work
    if (require('fs').existsSync(__dirname + req.path)) {
        res.sendFile(req.path);
    } else {
        req.statusCode('404');
        res.sendFile(__dirname + "/static/404/");
    }
});

app.listen(3000 || process.env.PORT);