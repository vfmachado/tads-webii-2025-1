const db = require("../config/dbConnection");

const usersDAO = {
    findAll(page, limit, filter) {
        const listaUsers = "SELECT * FROM users;";
        return db.prepare(listaUsers).all();
    },
    insert(user) {
        const insereUser = "INSERT INTO users (nome, email, password) VALUES (?, ?, ?);"
        db.prepare(insereUser).run(user.nome, user.email, user.password);
    }
}
module.exports = usersDAO;