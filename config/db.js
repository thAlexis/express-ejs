import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "express_mvc",
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
