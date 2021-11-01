const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/database.config')

const bodyParser = require('body-parser');

const PORT = 3000;





app.use(bodyParser.urlencoded({extended: true}));

// parse request of content tyoe to json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(db.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req,res) => {
    res.json({'message': "welcome "})
})

// Require Notes routes
require('./routes/noteRoutes')(app);

app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})