// node modules
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const fs = require('fs');

// active modules
const app = express();
const router = express.Router();

// consts
const users = [];
const fileJson = 'users.json';

// parser requests
app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

// route
router.get('/readfile', (req, res) => {
    res.send('read file');
});

// route
router.get('/writefile', (req, res) => {
    res.sendFile(path.join(require.main.path, 'formwritefile.html'), (err) => {
        if(err){
            console.log(err);
        }
        // else{
        //     console.log("sent formwritefile.html");
        // }
    });
    // console.log(require.main.path);
});

// route
router.post('/writefile', (req, res) => {
    users.push({'user' : req.body.user});
    res.send(users);

    // exists file users.json ?
    fs.access(path.join(require.main.path, fileJson),(err) => {
        if(err){
            console.log('file doesnt exist');
            console.log(err);
        }
        else{
            console.log('the file exists');
        }      
        
    });
        // no
        // create json file
    // 
        // yes
        // write in json 


    // console.log(req.body.user);
    // console.log(req.body);
});

// active routes
app.use(router);

// server
app.listen(3000);