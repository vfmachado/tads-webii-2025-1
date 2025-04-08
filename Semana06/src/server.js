// UMA DAS PRIMEIRAS COISAS É INICIAR A CONFIGURACAO

const dotenv = require('dotenv');
dotenv.config();

console.log({ VARIAVEIS_AMBIENTE: process.env });


// Import required modules
const express = require('express');
const path = require('path');

// Initialize the app
const app = express();
const PORT = 3000;

// estamos utilizando memoria do servidor para guardar as sessoes.
// 1. caso o servidor seja reiniciado, vc perde os dados da memoria.
// 2. escalabilidade fica comprometida pq conforme aumenta o numero de usuarios, aumenta a quantidade de memoria necessaria
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat',      // CHAVE
    resave: false,      
    saveUninitialized: true,
    // cookie: { secure: true }
}));


app.use((req, res, next) => {
    if (req.session.routes) 
        req.session.routes.push(req.url);
    else
        req.session.routes = [req.url];

    console.log('SESSION ID ' + req.sessionID )
    console.log({ session: req.session})
    next();
})

// Middleware setup
app.use(express.urlencoded({ extended: true }));
// PERMITE ACESSO ESTATICO (DIRETO) AOS ARQUIVOS QUE ESTAO NA PASTA PUBLIC
app.use(express.static(path.join(__dirname, '..', 'public')));    // ../public

// RENDERIZAÇÃO POR TEMPLATE
// nao tem jeito, tem que olhar na documentacao de cada uma.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes
const taskRouter = require('./routes/tasks.routes');
app.use('/', taskRouter);
     //  ^ (prefixo no router)   todas as rotas começam com / agora
     
const usersRouter = require('./routes/users.routes');
app.use(usersRouter);

const painelRouter = require('./routes/painel.routes');
const { configDotenv } = require('dotenv');
app.use(painelRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});