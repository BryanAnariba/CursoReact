import 'dotenv/config';
import { Connection } from './database/Connection.js';
import { Server } from './Server.js';

const main = () => {
    const server = new Server();
    const connection = new Connection();
    server.start();
    connection.connectMe();
}

main();


