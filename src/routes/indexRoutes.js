const router = require("express").Router()

router.get("/", (req, res) => {
  res.send({
    "versao": "1.0",
    "titulo": "Projeto final: Mapa da saúde mental - atendimentos psicológicos gratuitos ou com preços acessíveis",
    "descricao": "Olá! Seja bem vinde! Saúde mental é importante! Aqui você pode buscar serviços de atendimento psicológico gratuito ou com preços acessíveis na cidade de Salvador-Bahia"
  })
})

module.exports = router
