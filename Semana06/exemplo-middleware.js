
const express = require("express");

const app = express();

// MIDDLEWARE É UMA FUNCAO QUE EXECUTA NO MEIO DA REQUISICAO
const meuMiddleware = (req, res, next) => {
    console.log("CHAMEI O MIDDLEWARE")
    next();
}

app.use(meuMiddleware);

app.get("/users/vini");
app.get("/users/:id");

// app.get('/noticias/:categoria/:nome')    PARAMETRO DE ROTA
// app.get('/produtos)   ?busca=teclado     QUERY PARAMETER

app.get('/perfil', meuMiddleware, (req, res) => {
    if (req.headers.authorization == "123")
        res.send("ACESSEI O PERFIL");
    else
        res.send("NAO AUTORIZADO");
})

app.listen(3000);
