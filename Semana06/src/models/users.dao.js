const db = require("../config/dbConnection");

const usersDAO = {
    findAll(page, limit, filter) {
        const listaUsers = "SELECT * FROM users;";
        return db.prepare(listaUsers).all();
    },
    findByEmail(email) {
        const userQuery = "SELECT * FROM users u WHERE u.email = ? LIMIT 1;"
        return db.prepare(userQuery).get(email);
    },
    insert(user) {
        const insereUser = "INSERT INTO users (nome, email, password) VALUES (?, ?, ?);"
        db.prepare(insereUser).run(user.nome, user.email, user.password);
    }
}
module.exports = usersDAO;