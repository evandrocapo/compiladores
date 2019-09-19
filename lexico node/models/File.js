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

        return result;
    }

    read(data) {
        console.log(data);
    }

    save(data){
        file.writeFile("./save", data, function(err){
            throw "Erro ao salvar arquivo";
        })
    }
}

module.exports = {File}