import * as express from "express";
import * as cors from "cors";
import usersRoute from "./routes";

import { novaBaseConnection } from "./sql_connection/sqlConnection";

const app = express();
app.use(express.json());
app.use(usersRoute);
app.use(cors());
novaBaseConnection();
app.listen(5000, () => {
  console.log("Servidor ouvindo!");
});
