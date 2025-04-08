const { compareSync } = require("bcrypt");
const usersDAO = require("../models/users.dao");


const authController = {
    login(req, res) {
        
        const {email , password}  = req.body;
        const user = usersDAO.findByEmail(email);
        console.log({ user });
        
        if (email == user.email && compareSync(password, user.password)) {
            // LOGADO
            req.session.isAuth = true;

            const sessionUser = {
                email: user.email,
                role: user.role
            }

            req.session.user = sessionUser;
            return res.send("AUTENTICADO")
        }

        res.send("NAO DEU!")
    },

    logoff(req, res) {
        req.session.destroy();
        res.send("LOGOFF CONCLUIDO");
    }
}

module.exports = authController;