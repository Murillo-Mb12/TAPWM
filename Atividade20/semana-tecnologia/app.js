const app = require('./app/config/server');

const rotaHome = require('./app/routes/home');
const rotaSobre = require('./app/routes/sobre');
const rotaProgramacao = require('./app/routes/programacao');
const rotaContato = require('./app/routes/contato');
const rotaInscricao = require('./app/routes/inscricao');

rotaHome(app);
rotaSobre(app);
rotaProgramacao(app);
rotaContato(app);
rotaInscricao(app);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
