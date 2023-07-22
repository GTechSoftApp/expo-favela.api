import * as express from "express";
import * as cors from "cors";
import usersRoute from "./routes";
import { initConnection } from "./sql_connection/connecttion";

const app = express();
app.use(express.json());
app.use(usersRoute);
app.use(cors());
initConnection();
app.listen(3333, () => {
  console.log("Servidor on!");
});
