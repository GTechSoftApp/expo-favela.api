import * as express from "express";
import * as cors from "cors";
import usersRoute from "./routes";

import { initConnection } from "./sql_connection/connecttion";
const port = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(usersRoute);
app.use(cors());
initConnection();
app.listen(port, () => {
  console.log("Servidor on!");
});
