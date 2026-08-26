let express = require('express');
let app=express(); 
app.listen(3000, function(){
    console.log("ola o servirdor com express foi carregado com sucesso");
});

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});

app.get('/historia',function(req,res){
    res.render("secao/historia");
    //res.send("<html><body>Historia da Fatec Sorocaba</body></html>");
});

app.get('/cursos', function(req,res){
    res.render("secao/cursos");
    //res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
})

app.get('/professores',function(req,res){
    res.render("secao/professores");
    //res.send("<html><body>Professores da Fatec Sorocaba</body></html>");
});

app.listen(3000,function(){
    console.log("servidor com express foi carregado");
});