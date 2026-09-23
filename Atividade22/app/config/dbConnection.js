let sql = require ('mssql');
let connSQLServer = function(){
    const sqlConfig = {
        user: 'DS2612018',
        password: '#NinePig09#',
        database:'LP2',
        server: 'APOLO',
        options:{
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);
} 

module.exports = function(){
 console.log('O autoload carregou o módulo de conexão com o bd');
 return connSQLServer;
}
