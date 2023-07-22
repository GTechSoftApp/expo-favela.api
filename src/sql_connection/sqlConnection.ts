import * as sequelize from "sequelize";

const serverName = "SERVER";
const dataBase = "expo_favela";
const userName = "sa";
const password = "##Heitor2021##";
const instance = "SQLEXPRESS";

const conexao = new sequelize.Sequelize(dataBase, userName, password, {
  host: serverName,
  port: 49172,
  dialect: "mssql",
  dialectOptions: { instanceName: instance },
});

export async function novaBaseConnection() {
  try {
    await conexao.authenticate().then(async (response) => {
      console.log("Autenticado");
    });
  } catch (error) {
    console.log(`Erro na autenticação ${error}`);
  }
}
