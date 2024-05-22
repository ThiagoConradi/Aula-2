const { Router } = require('express');
const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/ProdutosController');


// Rota para criar um produto (CREATE)
router.get('/create', produtosController.formCreate);

// Rota para listar todos os produtos (READ)
router.get('/', produtosController.list);

// Rota para mostrar um produto (READ)
router.get('/:id', produtosController.show);

// Rota para atualizar um produto (UPDATE)
router.get('/:id/edit', produtosController.formEdit);

// Rota para atualizar um produto (UPDATE)
router.post('/:id/edit', produtosController.update);

// Rota para deletar um produto específico (DELETE)
router.post('/delete/:id', produtosController.delete);

module.exports = router;
