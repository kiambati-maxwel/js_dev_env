"use strict";

import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 8000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
    // simplicity 101

    res.json([{
            "id": 1,
            "firstName": "Theon",
            "lastName": "catMEl",
            "email": "catMEl@save.net"
        },
        {
            "id": 2,
            "firstName": "sebrina",
            "lastName": "craig",
            "emai": "craig@yahoo.com"
        },
        {
            "id": 3,
            "firstName": "tom",
            "lastName": "richard",
            "email": "tom@gmail.com"
        },
        {
            "id": 4,
            "firstName": "Perly",
            "lastName": "wanjiku",
            "email": "perlyKiambati@silicon.io"
        },
        {
            "id": 5,
            "firstName": "diana",
            "lastName": "wanjiku",
            "email": "shiku99@gmail.com"
        }
    ]);

});

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
        console.log(chalk.blue(`app running on portp ${port}`));
    }
});
