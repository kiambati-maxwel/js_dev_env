"use strict";

import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
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
