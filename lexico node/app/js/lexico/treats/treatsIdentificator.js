const treatsReservedWord = require('./treatsReservedWord')
const tokenModel = require('../../../../models/Token');

module.exports = (caracter) =>
{
    var id = caracter;
    var token = new Token();

    // read(caracter);

    while(caracter.value.match("/^[A-Za-z]+$/") || caracter === '_')
    {
       id = id + caracter;
    //    read(caracter); 
    }
    // token.setLexem(id);
    // treatsReservedWord(id,token);

    // return token;
}