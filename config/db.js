import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.db_NAME,
});

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Connexion établie avec MySQL`);
//   }
// });

connection
  .connect()
  .then(() => console.log("Connexion établie avec MySQL"))
  .catch((err) => console.log(err));

export default connection;
