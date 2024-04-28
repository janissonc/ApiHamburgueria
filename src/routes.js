import { Router } from "express";

import { selectPessoas,selectPessoa,insertPessoa,updatePessoa,deletePessoa} from './controller/Pessoa.js';
import { selectProdutos,selectProduto,insertProduto,updateProduto,deleteProduto} from './controller/Produto.js';

const router = Router();

router.get('/pessoas',selectPessoas)
router.get('/pessoa',selectPessoa)
router.post('/pessoa',insertPessoa)
router.put('/pessoa',updatePessoa)
router.delete('/pessoa',deletePessoa)

router.get('/produtos',selectProdutos)
router.get('/produto',selectProduto)
router.post('/produto',insertProduto)
router.put('/produto',updateProduto)
router.delete('/produto',deleteProduto)

export default router;