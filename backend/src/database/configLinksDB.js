const { Client } = require('pg');

const connection = new Client({
    host: 'localhost',
    port: 5432, // Default PosgreSQL'S Port
    user: 'postgres',
    password: 'root',
    database: 'links',
});

const dbConnection = async () => {
    try {
        await connection.connect();
        console.log('Connected at Data Base Links on PostgreSQL');
    } catch (error) {
        console.error('Error to connect at Data Base Links on PostgreSQL:', error);
    }
};

module.exports = {
    dbConnection,
    connection,
};
