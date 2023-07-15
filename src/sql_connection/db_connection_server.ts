import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  database: 'expo_favela',
  dialect: 'mssql',
  username: 'sa',
  password: '##Heitor2021##',
    dialectOptions: {
    instanceName: 'SQLEXPRESS',
    trustedConnection: true
  },
    host: 'SERVER',
port:49172
});

export async function iniciarConexao() {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');  
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}
