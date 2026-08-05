function abrirCurso() {

    const curso = document.getElementById("cursos").value;

    if (curso === "") {
        return;
    }

    const confirmar = confirm("Deseja abrir a janela do curso selecionado?");

    if (!confirmar) {
        document.getElementById("cursos").selectedIndex = 0;
        return;
    }

    const cursos = {
        ads: {
            nome: "Análise e Desenvolvimento de Sistemas",
            descricao: "Curso voltado ao desenvolvimento de softwares, bancos de dados, programação web e mobile."
        },

        eletronica: {
            nome: "Eletrônica Automotiva",
            descricao: "Forma profissionais para atuar em sistemas eletrônicos de veículos automotores."
        },

        fabricacao: {
            nome: "Fabricação Mecânica",
            descricao: "Capacita profissionais para atuar em processos de fabricação e produção industrial."
        },

        logistica: {
            nome: "Logística",
            descricao: "Prepara profissionais para gestão da cadeia de suprimentos, transporte e armazenagem."
        },

        polimeros: {
            nome: "Polímeros",
            descricao: "Ensina processos de fabricação e desenvolvimento de materiais poliméricos."
        },

        processos: {
            nome: "Processos Metalúrgicos",
            descricao: "Forma tecnólogos para atuar em processos industriais relacionados aos metais."
        },

        manufatura: {
            nome: "Manufatura Avançada",
            descricao: "Curso voltado à Indústria 4.0, automação e tecnologias inteligentes de produção."
        }
    };

    let novaJanela = window.open("", "", "width=600,height=300");

    novaJanela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>${cursos[curso].nome}</title>

            <style>
                body{
                    font-family: Arial;
                    background:#f4f4f4;
                    margin:20px;
                }

                h2{
                    color:#b00000;
                }

                p{
                    font-size:18px;
                    line-height:1.6;
                }
            </style>
        </head>

        <body>
            <h2>${cursos[curso].nome}</h2>
            <p>${cursos[curso].descricao}</p>
        </body>
        </html>
    `);

    novaJanela.document.close();
}