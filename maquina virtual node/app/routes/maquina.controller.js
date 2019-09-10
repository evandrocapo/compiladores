//const validateToken = require('../../config/security/tokenValidator')

module.exports = routes => {

    const db = routes.config.firebaseConfig.collection('maquina')

    routes.get('/maquina/:maquinaId', async (req, res) => {
        try {
            let maquina = await db.doc(req.params.maquinaId).get()

            if (maquina.exists)
                return res.send(extractMaquina(maquina))
            else
                return res.status(404).send('maquina not found!')

        } catch (error) {
            return res.status(500).send(error).toString()
        }
    })

    routes.put('/servicoId/:servicoId', async (req, res) => {
        try {
            let servico = await db.doc(req.params.servicoId).update(req.body)
            return res.send(`O servico ${req.params.servicoId} foi atualizada com sucesso!`)
        } catch (error) {
            return res.status(500).send(error.toString)
        }
    })

    routes.delete('/servico/:servicoId', async (req, res) => {
        try {
            let servico = await db.doc(req.params.servicoId).delete()
            return res.send(`A vaga ${req.params.servicoId} foi removida com sucesso`)
        } catch (error) {
            return res.status(500).send(error)
        }
    })

    routes.post('/maquina/', async (req, res) => {
        try {
            const result = await db.add(req.body)

            return res.send(result.id)
        } catch (error) {
            return res.status(500).send(error)
        }
    })

    routes.get('/servico/', async (req, res) => {
        try {
            let docs = await db.get()
            let servico = []
            docs.forEach(doc => {
                servico.push(extractMaquina(doc))
            })

            return res.send(servico)

        } catch (error) {
            return res.status(500).send(error)
        }
    })

    extractMaquina = maquina => {
        let v = maquina.data()

        return {
            id: maquina.id,
            i: v.i,
            instrucoes: v.instrucoes,
            pilha: v.pilha,
            s: v.s
        }
    }
}