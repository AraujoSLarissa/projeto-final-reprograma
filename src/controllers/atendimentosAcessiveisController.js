const AtendimentosAcessiveisSchema = require("../models/AtendimentosAcessiveisSchema")

const cadastrarAtendimento = async(req, res) => {
    try {
        const { 
            nome, telefone, endereco, tipo_de_servico
        } = req.body

        if (!nome || nome.trim() === "") {
            return res.status(400).send({ mensagem: "O nome é obrigatorio" })
        } else if (isNaN(telefone) || telefone.length <= 0) {
            return res.status(400).send({ mensagem: "O número de telefone é obrigatório" })
        } else if (typeof(endereco.rua) !== "string" || endereco.rua.trim() === "") {
            return res.status(400).send({ mensagem: "O campo rua é obrigatório" })
        } else if (isNaN(endereco.numero)|| endereco.numero.length <= 0) {
            return res.status(400).send({ mensagem: "O número do endereço é obrigatório" })
        } else if (typeof(endereco.estado) !== 'string' || endereco.estado.trim() === "") {
            return res.status(400).send({ mensagem: "O campo estado é obrigatório" })
        } else if (typeof (endereco.cidade) !== 'string' || endereco.cidade.trim() === "") {
            return res.status(400).send({ mensagem: "O campo cidade é obrigatório" })
        } else if (typeof (endereco.bairro) !== 'string' || endereco.bairro.trim() === "") {
            return res.status(400).send({ mensagem: "O campo bairro é obrigatório" })
        } else if (!tipo_de_servico || tipo_de_servico.trim() === "") {
            return res.status(400).send({ mensagem: "O tipo de serviço é obrigatorio" })
        }
        

        let buscarBairro = await AtendimentosAcessiveisSchema.find({ endereco })

        let checarBairro = buscarBairro.filter((atendimento) => atendimento.endereco.bairro === endereco.bairro)

        let checarNomeAtendimento = checarBairro.find((atendimento) => atendimento.nome === nome)

        if(checarNomeAtendimento){
            return res.status(409).send({ mensagem: "Já existe atendimento com esse nome neste bairro"})
        }

        const atendimento = new AtendimentosAcessiveisSchema({
            nome: nome,
            telefone: telefone,
            endereco: {
                cep: endereco.cep,
                rua: endereco.rua,
                numero: endereco.numero,
                complemento: endereco.complemento,
                referencia: endereco.referencia,
                estado: endereco.estado,
                cidade: endereco.cidade,
                bairro: endereco.bairro
            },
            tipo_de_servico: tipo_de_servico
        })

        atendimento.save()
        res.status(201).json({
            mensagem: "Serviço de atendimento psicológico cadastrado com sucesso!",
            atendimento
        })
    } catch (error) {
        res.status(400).send({ mensagem: error.message})
    }
}


const buscarTodosAtendimentos = async(req, res) => {
    const { nome } = req.query

    let query = { }

    if (nome) query.nome = new RegExp(nome, "i")

    try {
        const atendimentos = await AtendimentosAcessiveisSchema.find(query)
        
        if (atendimentos.length === 0) return res.status(200).send([])
        
        res.status(200).json({
            mensagem: "Lista com todos os serviços de atendimento gratuito ou com preços acessíveis cadastrados",
            atendimentos
        })
    } catch (error) {
        res.status(500).send({ mensagem: error.message})
    }
}

const buscarAtendimentoPorId = async(req, res) => {
    try {
        const { id } = req.params
        const atendimento = await AtendimentosAcessiveisSchema.findById(id)
        
        if(atendimento == undefined || id == " ") {
            return res.status(404).send({ mensagem: "Id não encontrado!"})
        }

        res.status(200).json(atendimento)
    } catch (error) {
        return res.status(500).send({ mensagem: error.message })
    }
}


const atualizarAtendimentoPorId = async(req, res) => {
    const { id } = req.params

    try {
        const { nome, telefone, endereco, tipo_de_servico } = req.body
        

        const buscarAtendimento = await AtendimentosAcessiveisSchema.findById(id)

        if(!buscarAtendimento) {
            return res.status(404).json({
                message: "Serviço de atendimento psicológico não encontrado"
            })
        }

        buscarAtendimento.nome = nome || buscarAtendimento.nome
        buscarAtendimento.telefone = telefone || buscarAtendimento.telefone
        buscarAtendimento.endereco = endereco || buscarAtendimento.endereco
        buscarAtendimento.tipo_de_servico = tipo_de_servico || buscarAtendimento.tipo_de_servico
        

        const atendimentoAtualizado = await buscarAtendimento.save()

        res.status(200).json({
            mensagem: "Serviço de atendimento psicológico atualizado!",
            atendimentoAtualizado
        })
    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const deletarAtendimentoPorId = async(req, res) => {
    try {
        const { id } = req.params

        const atendimento = await AtendimentosAcessiveisSchema.findById(id)

        if(!atendimento) {
            return res.status(404).json({
                mensagem: "Atendimento não encontrado!"
            })
        }

        await atendimento.delete()

        res.status(200).json({
            mensagem: "Atendimento psicológico deletado do sistema com sucesso!"
        })
    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}
module.exports = {
    cadastrarAtendimento,
    buscarTodosAtendimentos,
    buscarAtendimentoPorId,
    atualizarAtendimentoPorId,
    deletarAtendimentoPorId
}