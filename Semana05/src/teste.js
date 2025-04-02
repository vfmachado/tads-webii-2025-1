// IMPORTACAO                       //NOME DO BANCO
const db = require('better-sqlite3')('dados.db',  {
    // CONFIGS
    verbose: console.log        // FUNCAO UTILIZADA PARA MOSTRAR AS QUERIES EXECUTADAS
});

const query = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY autoincrement, nome TEXT not null);"
db.exec(query);


// const insereUser = "INSERT INTO users (nome) VALUES ('Bruno');"
// db.exec(insereUser);

const listaUsers = "SELECT * FROM users;";
const resultado = db.prepare(listaUsers).all();
console.log({ resultado })
