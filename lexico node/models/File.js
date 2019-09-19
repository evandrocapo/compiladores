const file = require('fs');

class File {
    constructor (){
        this.file = ""
        this.content = ""
    }

    async open(fileName, type) {
        let result = new Promise ( async (resolve,reject) => {
            await file.readFile(fileName, type, function (err, data) {
                resolve(data);
            })
        })

        this.file = fileName;
        this.content = result;

        return 0;
    }

    async read() {
        if(this.file){
            return this.content;
        }
        
        throw "Não foi selecionado nenhum arquivo";
    }

    save(data){
        try{
            file.writeFile("./save", data, function(err){
                throw "Erro ao salvar arquivo";
            })
        } catch(error){
            throw error;
        }
    }
}

module.exports = {File}