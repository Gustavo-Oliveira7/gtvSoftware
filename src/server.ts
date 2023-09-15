import { App } from './app';
import sequelize from './database/models';

const PORT = process.env.APP_PORT || 3001;

// usado para testar a conexao com o db
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

  

new App().start(PORT);
