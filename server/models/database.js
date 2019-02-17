const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/polleg';

const client = new pg.Client(connectionString);
client.connect();

const main = async () => {
    const query = await client.query(
        `CREATE TABLE authors(
        id SERIAL PRIMARY KEY,
        name VARCHAR(40) NOT NULL,
        surname VARCHAR(40),
        description TEXT,
        pic TEXT,
        facebook TEXT,
        instagram TEXT,
        twitter TEXT,
        linkedin TEXT,
        reddit TEXT,
        active BOOLEAN DEFAULT true
    )`);

    await client.end();
};
main();
