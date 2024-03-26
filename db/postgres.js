const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
  user: 'postgres',
  database: 'products',
  host: process.env.DB_IP, // Assuming your PostgreSQL server is running locally
  port: 5432, // Default PostgreSQL port
  password: 'rfp2401-password' // Explicitly set password to null
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });

module.exports = client;