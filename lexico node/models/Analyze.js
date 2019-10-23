const analyzeBlock = require('../app/js/sintatico/analysis/analyzeBlock')

class Analyze {
    constructor() { 
    }

    main(token){
        analyzeBlock(token)
    }
}
module.exports = { Analyze }