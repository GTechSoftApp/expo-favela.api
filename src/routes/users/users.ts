import { Router } from "express";
import { conexaoString } from "../../sql_connection/connecttion";
import * as sql from "mssql";

const usersRoutes = Router();

usersRoutes.post("/cadastro", async (request, response) => {
  const { dadosUsuario } = request.body;
  try {
    const conexaoBanco = await sql.connect(conexaoString);
    const resultado =
      await conexaoBanco.query`select * from usuarios where email = ${dadosUsuario.email}`;

    if (resultado.recordset.length == 0) {
      const usuarioCriado =
        await conexaoBanco.query`INSERT INTO usuarios VALUES(${dadosUsuario.nome},${dadosUsuario.email},${dadosUsuario.telefone},
      ${dadosUsuario.data_nascimento},${dadosUsuario.ramo_atividade},${dadosUsuario.receber_notificacao})`;

      return response.json({
        messageStatus: "Cadastro realizado com sucesso!",
        usuario: usuarioCriado.recordset,
      });
    } else {
      return response.json({
        messageStatus: "Este e-mail já foi utilizado.",
      });
    }
  } catch (error) {
    return response.json({ messageStatus: error });
  }
  return;
});
export default usersRoutes;
