const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const guidelines = require('./routes/guidelines.js');

const getDatabase = require('./database.js');
const db = getDatabase();

const PORT = process.env.PORT || 2010;
const buildFolder = path.join(__dirname, '../dist');
const imageFolder = path.join(__dirname, './img');
// const staticFolder = path.join(__dirname, "./src");

//middleware läggs alltid FÖRE endpoints
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.params);
    next();
});

app.use(express.json());
app.use(cors());
app.use(express.static(buildFolder));

//ROUTES
app.use('/guidelines', guidelines);
app.use('/login', (req, res) => {
    console.log(req);
    res.send({
        token: 'pAvEmEnT',
    });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//Startar servern
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
