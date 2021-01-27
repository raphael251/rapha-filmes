import express from 'express';
import cors from 'cors';
import { mainRouter } from './resource/routes/index';

class App {
    server: express.Application
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
        this.server.use(mainRouter);
    }
}

module.exports = new App();