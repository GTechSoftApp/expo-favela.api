import * as sql from "mssql";

export const conexaoString =
  "Driver={ODBC Driver 17 for SQL Server};Server=SERVER\\SQLEXPRESS;Database=expo_favela;UID=sa;PWD=##Heitor2021##;Encrypt=false";

export async function initConnection() {
  try {
    const conexaResponse = await sql.connect(conexaoString);
    console.log("Conexão realizada com sucesso!");
  } catch (error) {
    console.log({ "Erro encontrado": error });
  }
}
