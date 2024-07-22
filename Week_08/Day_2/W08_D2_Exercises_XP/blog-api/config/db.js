const knex = require ('knex');
const dotenv = require ('dotenv');

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env;

console.log(PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT);

const dbase = knex({
    client: 'pg',
    connection: {
    //   connectionString: config.DATABASE_URL,
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      database: 'DI_W04_D1_lesson1',
      password: 'A836$cw7@5oWUe6s7Zf6',
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