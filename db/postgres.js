const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
  user: process.env.USER,
  database: 'products',
  host: process.env.DB_IP, // Assuming your PostgreSQL server is running locally
  port: 5432, // Default PostgreSQL port
  password: process.env.PASS // Explicitly set password to null
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

module.exports = client;