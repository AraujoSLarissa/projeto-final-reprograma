require("dotenv").config()

const express = require("express")
const cors = require("cors")
const database = require("./database/mongoConnect")
const atendimentosAcessiveis = require("./routes/atendimentosAcessiveisRoutes")
const indexRouter = require("./routes/indexRoutes")

const app = express()

app.use(express.json())
app.use(cors())
database.connect()

app.use("/atendimentos-acessiveis", atendimentosAcessiveis)
app.use(indexRouter)

module.exports = app