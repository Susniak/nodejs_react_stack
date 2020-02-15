import express from 'express';
import cors from 'cors';

import MysqlConnection from './core/MysqlConnection';
import databaseConfig from './config/database';
import apiRouter from './controllers';

if (!MysqlConnection.getInstance(databaseConfig)) {
    throw new Error('Cannot initialize database.');
}

const app = express();

app.listen("8080", function() {
    console.log('app started');
});
app.use(cors());
app.use('', apiRouter);

export default app;
