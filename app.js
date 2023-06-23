const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();


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
    console.log(req.body.user.toString());
});

app.use(router);


app.listen(3000);