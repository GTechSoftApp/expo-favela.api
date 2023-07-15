import { Router } from "express";
import { sequelize } from "../../sql_connection/db_connection_server";

const usersRoutes = Router();

usersRoutes.post("/cadastro", async (request, response) => {
  try {
    const { dadosCadastro } = request.body;
    console.log(dadosCadastro);

    const [userEmailQuery] = await sequelize.query(
      `select * from usuarios where email = '${dadosCadastro.email}'`
    );

    if (userEmailQuery.length == 0) {
      const [createUser] = await sequelize.query(
        `INSERT INTO usuarios
      values('${dadosCadastro.nome}','${dadosCadastro.email}','${dadosCadastro.telefone}','${dadosCadastro.dataNascimento}','${dadosCadastro.ramoAtividade}',${dadosCadastro.receberNotificacao})`
      );

      return response.json({
        messageStatus: "Cadastrado realizado com sucesso",
        dados: dadosCadastro,
        criado: createUser,
      });
    } else {
      return response.json({ messageStatus: "Este e-mail já foi utilizado." });
    }
  } catch (error) {
    return response
      .status(500)
      .send({ messageStatus: "Erro ao realizar cadastro.", errorType: error });
  }
});

export default usersRoutes;
