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
// const fileJson = 'users.json';
const p = path.join(require.main.path, 'users.json');

// parser requests
app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

// route
router.get('/readfile', (req, res) => {
    fs.readFile(p, 'utf8', (err, content) => {
        // file not exists
        if(err){
            res.send('error on read file');
            console.log(err);            
        }
        else{
            res.send(content);
            console.log(content);
        }
    });
});

// route
router.get('/writefile', (req, res) => {
    res.sendFile(path.join(require.main.path, 'formwritefile.html'), (err) => {
        if(err){
            res.send('error on app user');
            console.log(err);
        }
    });    
});

// route
router.post('/writefile', (req, res) => {
    users.push({'user' : req.body.user});    

    fs.writeFile(p, JSON.stringify(users), {'flag' : 'a+'}, (err) => {
        if (err) {
            res.send(err);
            console.log(err);
        }
        else{
            res.redirect('/readfile');
            console.log('user written on file');
        }
    })


});

// active routes
app.use(router);

// server
app.listen(3000);