import { Router } from "express";
import { conexao } from "../../sql_connection/sqlConnection";

const usersRoutes = Router();

usersRoutes.get("/usuarios", async (request, response) => {
  const [listarUsuarios] = await conexao.query("SELECT * FROM usuarios");
  return response.json(listarUsuarios);
});

usersRoutes.post("/cadastro", async (request, response) => {
  const { dadosUsuario } = request.body;

  try {
    const [consultarEmail] = await conexao.query(
      `SELECT * FROM USUARIOS U WHERE U.EMAIL = '${dadosUsuario.email}'`
    );

    if (consultarEmail.length == 0) {
      await conexao.query(
        `INSERT INTO USUARIOS VALUES('${dadosUsuario.nome}','${dadosUsuario.email}','${dadosUsuario.telefone}','${dadosUsuario.data_nascimento}','${dadosUsuario.ramo_atividade}','${dadosUsuario.receber_notificacao}')`
      );
      response.json({
        messageStatus: "Cadastro realizado com sucesso!",
        usuario: dadosUsuario,
      });
    } else {
      response.json({
        messageStatus: "Este e-mail já foi utilizado.",
      });
    }
  } catch (error) {
    response.status(500).send(`Erro no processamento dos dados ${error}`);
  }
});

export default usersRoutes;
