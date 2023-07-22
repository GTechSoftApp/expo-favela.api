import * as sequelize from "sequelize";

const serverName = "192.168.0.5";
const dataBase = "expo_favela";
const userName = "sa";
const password = "##Heitor2021##";
const instance = "SQLEXPRESS";

const conexao = new sequelize.Sequelize(dataBase, userName, password, {
  host: serverName,
  port: 49172,
  dialect: "mssql",
  dialectOptions: { instanceName: instance, trustedConnection: true },
});

export async function novaBaseConnection() {
  try {
    await conexao
      .authenticate()
      .then(async () => {
        console.log("Conectado com sucesso!");
      })
      .catch((er) => {
        console.log(`Erro na aplicação ${er}`);
      });
    
  } catch (error) {
    console.log(`Erro encontrado ${error}`);
  }
}

export { conexao };
