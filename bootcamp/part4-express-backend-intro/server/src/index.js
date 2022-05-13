require( 'dotenv' ).config()
const { Server } = require('./Server')

const main = () => {
    const server = new Server();
    server.start()
}

main()


// eslint init config-> ./node_modules/.bin/eslint --init