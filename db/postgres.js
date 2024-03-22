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
    const query = 'SELECT * FROM product WHERE id = $1';
    const values = [2];

    return client.query(query, values);
  })
  .then((response) => {
    console.log('Product response =', response.rows);
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });