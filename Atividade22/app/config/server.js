let express = require('express');
let consign = require('consign');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
// especificado qual arquivo ele deve executar porque dentro do config tem o server
// ele iria ficar executando o servidor toda hora
// precisa da extensao senao ele pensa que é um subdiretorio
//Ao passar {cwd:'app'} como um objeto de configuração para consign(), informa ao consign
//que todos os caminhos subsequentes nos métodos .include() e .then() devem ser relativos
//ao diretório app/.
consign({cwd:'app'}) // para incluir a pasta app
 .include('routes')
 .then('config/dbConnection.js') // garante que todos os arquivos do routes tenham sido processados
 .into(app);
module.exports = app; 
