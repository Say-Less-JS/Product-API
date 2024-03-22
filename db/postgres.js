const { Client } = require('pg');

const client = new Client({
  user: 'root',
  database: 'root',
  host: 'localhost', // Assuming your PostgreSQL server is running locally
  port: 5432, // Default PostgreSQL port
  password: 'root' // Explicitly set password to null
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

module.exports = client;