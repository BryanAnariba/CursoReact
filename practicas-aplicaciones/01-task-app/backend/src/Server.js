require( 'colors' );
const fastify = require( 'fastify' )({ logger: true });

const { DataBase } = require('./config/DataBase');
const { taskRoutes } = require('./routes/Task.Routes');


class Server {
    constructor () {
        this.routes();
    }

    routes () {
        fastify.register( require( 'fastify-cors' ) );
        taskRoutes.forEach( taskRoute => {
            fastify.route( taskRoute );
        });
    }

    async start () {
        const connection = new DataBase();
        try {
            console.clear();
            await fastify.listen( process.env.PORT || 3999 );
            await connection.connectMe();
            fastify.log.info( `Server started on port ${ fastify.server.address().port }`.cyan )
        } catch ( err ) {
            fastify.log.error( err );
            process.exit( 1 );
        }
    }
}

module.exports = {
    Server,
}