import { createConnection } from "mysql";
import { promisify } from "util";
import dotenv from "dotenv";

dotenv.config();

const connection = createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const queryPromise = promisify(connection.query).bind(connection);

export { connection, queryPromise };
