/// <reference path="_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as http from "http";
/**
 * The server.
 *
 * @class Server
 */
class Server {

    private static _server: Server;
    private app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        if (Server._server != null) return Server._server
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(this.handle404);
    }

    private handle404(error: any, req: express.Request,
        res: express.Response, next: express.NextFunction) {
        res.sendFile('index.html');
    }


    private routes(): void {

    }

    public start(): void {
        const port = this.normalize(process.env.PORT || 80);
        let server = http.createServer(<any>this.app);
        server.listen(port);
    }

    private normalize(value: any): any {
        let port = parseInt(value);
        if (isNaN(port)) {
            return value;
        }
        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }
}

const server = Server.bootstrap();
server.start();