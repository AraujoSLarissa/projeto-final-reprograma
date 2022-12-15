const express = require("express")
const router = express.Router()

const controller = require("../controllers/atendimentosAcessiveisController")

router.get("/buscar", controller.buscarTodosAtendimentos)
router.get("/buscar/:id", controller.buscarAtendimentoPorId)

router.post("/cadastrar", controller.cadastrarAtendimento)

router.delete("/deletar/:id", controller.deletarAtendimento)

router.patch("/atualizar/:id", controller.atualizarAtendimento)

module.exports = router
