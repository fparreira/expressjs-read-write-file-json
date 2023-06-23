const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');


const app = express();
const router = express.Router();

app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

router.get('/readfile', (req, res) => {
    res.send('read file');
});

router.get('/writefile', (req, res) => {
    res.sendFile(path.join(require.main.path, 'formwritefile.html'), (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("sent formwritefile.html");
        }
    });
    // console.log(require.main.path);
});

router.post('/writefile', (req, res) => {
    res.send('write inside file');
    console.log(req.body.user);
});

app.use(router);


app.listen(3000);