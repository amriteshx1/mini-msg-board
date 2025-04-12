require("dotenv").config();
const { Client } = require("pg");

const SQL = `
   DROP TABLE IF EXISTS messages;

  CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START WITH 0 MINVALUE 0 INCREMENT BY 1),
  text TEXT NOT NULL,
  username TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

    
      INSERT INTO messages (text, username)
      VALUES
      ('Whats Up!', 'Amando'),
      ('Hello World!', 'Charles');
`;

async function main(){
const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    });
    try {
        await client.connect();
        await client.query(SQL);
        console.log("✅ Table created and messages inserted!");
      } catch (err) {
        console.error("❌ Error running script:", err);
      } finally {
        await client.end();
      }
}

main();