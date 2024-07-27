const knex = require ('knex');
const dotenv = require ('dotenv');

dotenv.config();

const { PGPORT, PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

module.exports = {
    db: knex({
        client: 'pg',
        connection: {
            host: PGHOST,
            port: PGPORT,
            user: PGUSER,
            database: PGDATABASE,
            password: PGPASSWORD
        }
    })
};