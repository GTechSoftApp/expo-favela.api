import * as sql from "mssql";

export const conexaoString =
  "Driver={ODBC Driver 17 for SQL Server};Server=SERVER\\SQLEXPRESS;Database=expo_favela;UID=sa;PWD=##Heitor2021##;Encrypt=false";

var config = {
  server: "SERVER",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "##Heitor2021##",
      port: 49172,
    },
  },
  options: {
    database: "expo_favela",
    instanceName: "SQLEXPRESS",
    trustServerCertificate: true,
  },
};
export async function initConnection() {
  try {
    const conexaResponse = await sql.connect(config);
    console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.log({ "Erro encontrado": error });
  }
}
