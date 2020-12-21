const express = require('express');
const cors = require('cors');
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
        this.server.use(cors());
    }

    initRoutes() {
        this.server.use(routes);
    }
}

module.exports = new App();