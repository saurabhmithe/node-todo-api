var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((result) => {
        console.log('Success');
        res.send(result);
    }, (err) => {
        console.log('Error');
        res.status(400).send(err);
    });
});

app.post('/users', (req, res) => {

});

app.listen(3000, () => {
    console.log('Started on port 3000');
});
