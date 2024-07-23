const knex = require ('knex');
const dotenv = require ('dotenv');

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env;

const dbase = knex({
    client: 'pg',
    connection: {
    //   connectionString: config.DATABASE_URL,
      host: PGHOST,
      port: PGPORT,
      user: PGUSER,
      database: PGDATABASE,
      password: PGPASSWORD,
      // ssl: { rejectUnauthorized: false },
    },
  });
  
// async function getVersion() {
//     try {
//         result = await dbase.raw("select version()")
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getVersion();

module.exports = {
  dbase
}