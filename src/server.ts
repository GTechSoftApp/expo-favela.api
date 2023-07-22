import * as express from "express";
import * as cors from "cors";
import usersRoute from "./routes";

import { novaBaseConnection } from "./sql_connection/sqlConnection";

const app = express();
app.use(express.json());
app.use(usersRoute);
app.use(cors());
//initConnection();
novaBaseConnection();
app.listen(3333, () => {
  console.log("Servidor on!");
});
