//import { openDb } from './configDB.js';

import express from 'express';
import router from './routes.js';
import { createTable} from './controller/Pessoa.js';
import { createTableProduto} from './controller/Produto.js';


const app = express();
app.use(express.json())
app.use(router);
createTable();
createTableProduto();

app.listen(3000,()=> console.log("Api rodando."));