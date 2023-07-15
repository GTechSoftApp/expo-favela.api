import * as express from "express";
import * as cors from 'cors';
import usersRoute from "./routes";
import { iniciarConexao } from "./sql_connection/db_connection_server";
const port = process.env.PORT || 3333;


const app = express();
app.use(express.json());
app.use(usersRoute);
app.use(cors());
iniciarConexao();
app.listen(port, () => {
  console.log("Servidor on!");
});


