
const db = require('better-sqlite3')('dados.db',  {
    // CONFIGS
    verbose: console.log        // FUNCAO UTILIZADA PARA MOSTRAR AS QUERIES EXECUTADAS
});
// podem existir outras configs relacionadas ao meu banco

module.exports = db;