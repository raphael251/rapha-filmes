const express = require('express');
const routes = require('./resource/routes/index');

class App {
    constructor() {
        this.server = express();

        this.initMiddlewares();
        this.initRoutes();
    }

    initMiddlewares() {
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
        this.server.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', '*');
            res.append('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    }

    initRoutes() {
        this.server.use(routes);
    }
}

module.exports = new App();