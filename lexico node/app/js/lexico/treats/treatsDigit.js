const tokenModel = require("../../../../models/Token");

//Imports
module.exports = (caracter) =>
{
    var num = caracter;
    var token = new Token();
    
    // read(caracter);

    while((Number.isInteger(caracter)))
    {
        num = num + caracter;
        // read(caracter);
    }
    // token.setSymbol('snúmero');
    // token.setLexem(num);

    // return token;
}