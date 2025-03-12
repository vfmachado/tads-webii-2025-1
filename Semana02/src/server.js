
import express from 'express'

const app = express();

app.use(express.json());    // apis rest
app.use(express.urlencoded({
    extended: false // tem que olhar na doc quando false/true
}));  // sistemas web - SSR

// as rotas sao mapeadas a partir da instancia do express
// a rota tem um caminho ('/')
// e normalmente, dois parametros, request e response
app.get('/', (req, res) => {
    res.send("OI DO SERVIDOR!!!");
});

const users = ['vini', 'theo'];
app.get('/users', (req, res) => {
    let html = "<ul>";
    users.forEach(u => {
        html += `<li>${u}</li>`
    })
    html += "</ul>"
    html += '<a href="add-user.html">ADD USER</a>'
    res.send(html);
});

app.post('/users', (req, res) => {
    console.log({ body: req.body});
    const { name } = req.body;
    users.push(name);
    // res.send("OK!!")
    res.redirect('/users');
});

// pagina estatica
// 1. mapear junto ao express tudo que é estático
app.use(express.static('public'))
// 2. enviar o arquivo de fato



// query params
// sao legais => CACHE! Dados simples, paginacao, consulta, limites
// nao sao legais => deixa exposta a informação, logo nao podem ser utilizados para dados sensiveis; quantidade de informação e encoding da url; 
// ?q=educacao&saude
/*
{ q: 'educação', saude: '' }
*/
app.get('/teste', (req, res) => {
    console.log({
        query: req.query
    })
    const query = req.query.q;
    res.send("Voce buscou por " + query);
})

app.get('/parametrizado/1', (req, res) => {
    res.send("O 1 é imutavel - deve ser declarado primeiro")
});

app.get('/parametrizado/:id', (req, res) => {
    // Destructuring, pega o atributo id do objeto req.params, o mesmo que
    // const id = req.params.id;
    const { id } = req.params;
    res.send("Buscou pelo id " + id);
})

//app.get('/users/admin')
//app.get('/users/:username)


app.get('/series/:name/:season', (req, res) => {
    res.json(req.params);
})



app.listen(3000, (err) => {
    if (err) {
        console.log('Erro ao iniciar o serviço!');
        return;
    }
    console.log("Service iniciado na porta 3000");
});